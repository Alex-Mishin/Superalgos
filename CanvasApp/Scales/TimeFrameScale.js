function newTimeFrameScale () {
  const MODULE_NAME = 'Time Frame Scale'

  let thisObject = {
    timeFrame: undefined,
    container: undefined,
    fitFunction: undefined,
    payload: undefined,
    isVisible: true,
    layersOn: undefined,
    onMouseOverSomeTimeMachineContainer: onMouseOverSomeTimeMachineContainer,
    draw: draw,
    drawForeground: drawForeground,
    physics: physics,
    getContainer: getContainer,
    initialize: initialize,
    finalize: finalize
  }

  const FILES_PERIOD_DEFAULT_VALUE = 0
  const TIME_PERIOD_DEFAULT_VALUE = 0
  const MIN_HEIGHT = 50

  let previousIsVisible = true
  let greyOutCoverLayer = false
  let isMouseOver

  let filePeriodIndex = FILES_PERIOD_DEFAULT_VALUE
  let timeFrameIndex = TIME_PERIOD_DEFAULT_VALUE
  let timeFramesMasterArray = [marketFilesPeriods, dailyFilePeriods]
  let timeFrameLabel = '24-hs'

  let onMouseWheelEventSubscriptionId
  let onViewportZoomChangedEventSubscriptionId
  let onMouseOverEventSubscriptionId
  let onMouseNotOverEventSubscriptionId

  let limitingContainer

  let mouse = {
    position: {
      x: 0,
      y: 0
    }
  }
  setupContainer()
  return thisObject

  function setupContainer () {
    thisObject.container = newContainer()
    thisObject.container.initialize(MODULE_NAME)

    thisObject.container.isDraggeable = false
    thisObject.container.isClickeable = false
    thisObject.container.isWheelable = true
    thisObject.container.detectMouseOver = true

    thisObject.container.frame.width = UI_PANEL.WIDTH.NORMAL
    thisObject.container.frame.height = 40
  }

  function finalize () {
    thisObject.container.eventHandler.stopListening(onMouseWheelEventSubscriptionId)
    canvas.chartingSpace.viewport.eventHandler.stopListening(onViewportZoomChangedEventSubscriptionId)
    thisObject.container.eventHandler.stopListening(onMouseOverEventSubscriptionId)
    thisObject.container.eventHandler.stopListening(onMouseNotOverEventSubscriptionId)

    thisObject.container.finalize()
    thisObject.container = undefined
    thisObject.fitFunction = undefined
    thisObject.payload = undefined

    limitingContainer = undefined
    mouse = undefined
  }

  function initialize (pLimitingContainer) {
    limitingContainer = pLimitingContainer

    readObjectState()
    newTimeFrame()

    onMouseWheelEventSubscriptionId = thisObject.container.eventHandler.listenToEvent('onMouseWheel', onMouseWheel)
    onViewportZoomChangedEventSubscriptionId = canvas.chartingSpace.viewport.eventHandler.listenToEvent('Zoom Changed', onViewportZoomChanged)
    onMouseOverEventSubscriptionId = thisObject.container.eventHandler.listenToEvent('onMouseOver', onMouseOver)
    onMouseNotOverEventSubscriptionId = thisObject.container.eventHandler.listenToEvent('onMouseNotOver', onMouseNotOver)
  }

  function onMouseOverSomeTimeMachineContainer (event) {
    if (event.containerId === undefined) {
      /* This happens when the mouse over was not at the instance of a certain scale, but anywhere else. */
      greyOutCoverLayer = false
    } else {
      if (event.containerId === thisObject.container.id) {
        greyOutCoverLayer = false
      } else {
        greyOutCoverLayer = true
        turnOnCounter = 0
      }
    }
    mouse = {
      position: {
        x: event.x,
        y: event.y
      }
    }
  }

  function onMouseOver (event) {
    isMouseOver = true
    event.containerId = thisObject.container.id
    thisObject.container.eventHandler.raiseEvent('onMouseOverScale', event)
  }

  function onMouseNotOver () {
    isMouseOver = false
  }

  function physics () {
    readObjectState()
    positioningPhysics()
    zoomOutPhysics()
  }

  function zoomOutPhysics () {
    if ((thisObject.isVisible === true && previousIsVisible === false) && (canvas.chartingSpace.viewport.zoomTargetLevel >= ZOOM_OUT_THRESHOLD_FOR_CHANGING_TIME_FRAME)) {
      let event = {}
      event.timeFrame = thisObject.timeFrame
      thisObject.container.eventHandler.raiseEvent('Time Frame Value Changed', event)
      previousIsVisible = true
    }
    if ((thisObject.isVisible === false && previousIsVisible === true) || (canvas.chartingSpace.viewport.zoomTargetLevel < ZOOM_OUT_THRESHOLD_FOR_CHANGING_TIME_FRAME)) {
      let event = {}
      event.timeFrame = ONE_DAY_IN_MILISECONDS
      thisObject.container.eventHandler.raiseEvent('Time Frame Value Changed', event)
      previousIsVisible = false
    }
  }

  function positioningPhysics () {
    /* Container Limits */

    let upCorner = {
      x: 0,
      y: 0
    }

    let bottonCorner = {
      x: limitingContainer.frame.width,
      y: limitingContainer.frame.height
    }

    upCorner = transformThisPoint(upCorner, limitingContainer)
    bottonCorner = transformThisPoint(bottonCorner, limitingContainer)

    upCorner = limitingContainer.fitFunction(upCorner, true)
    bottonCorner = limitingContainer.fitFunction(bottonCorner, true)

    /* We will check if we need to change the bottom because of being one of many scales of the same type */
    let displaceFactor = 0
    if (thisObject.payload.parentNode === undefined) { return } // This happens when in the process of deleting the scale, timeline chart or time machine.
    if (thisObject.payload.parentNode.type === 'Timeline Chart') {
      if (thisObject.payload.parentNode.payload.parentNode !== undefined) {
        if (thisObject.payload.parentNode.payload.parentNode.timeFrameScale !== undefined) {
          if (thisObject.payload.parentNode.payload.parentNode.timeFrameScale.payload.isVisible === true) {
            displaceFactor++
          }
        }
        for (let i = 0; i < thisObject.payload.parentNode.payload.parentNode.timelineCharts.length; i++) {
          let timelineChart = thisObject.payload.parentNode.payload.parentNode.timelineCharts[i]
          if (timelineChart.timeFrameScale !== undefined) {
            if (thisObject.payload.node.id !== timelineChart.timeFrameScale.id) {
              if (timelineChart.timeFrameScale.payload.isVisible === true) {
                displaceFactor++
              }
            } else {
              break
            }
          }
        }
      }
    }
    bottonCorner.y = bottonCorner.y - thisObject.container.frame.height * displaceFactor

    /* Positioning */
    timePoint = {
      x: 0,
      y: limitingContainer.frame.height
    }

    timePoint = transformThisPoint(timePoint, limitingContainer.frame.container)
    timePoint.x = mouse.position.x - thisObject.container.frame.width / 2

    /* Checking against the container limits. */
    if (timePoint.x < upCorner.x) { timePoint.x = upCorner.x }
    if (timePoint.x + thisObject.container.frame.width > bottonCorner.x) { timePoint.x = bottonCorner.x - thisObject.container.frame.width }
    if (timePoint.y < upCorner.y + thisObject.container.frame.height) { timePoint.y = upCorner.y + thisObject.container.frame.height }
    if (timePoint.y > bottonCorner.y) { timePoint.y = bottonCorner.y }

    thisObject.container.frame.position.x = timePoint.x
    thisObject.container.frame.position.y = timePoint.y - thisObject.container.frame.height

    thisObject.isVisible = true
    thisObject.payload.isVisible = true
    if (thisObject.container.frame.position.y + thisObject.container.frame.height > bottonCorner.y ||
        thisObject.container.frame.position.y - thisObject.container.frame.height * 3 < upCorner.y ||
      thisObject.container.frame.position.x < upCorner.x) {
      thisObject.isVisible = false
      thisObject.payload.isVisible = false
    }
    if (thisObject.layersOn === 0) {
      thisObject.isVisible = false
      thisObject.payload.isVisible = false
    }
  }

  function onViewportZoomChanged (event) {
    if (event !== undefined) { // it is undefined when the level is just being animated.
      if (event.shiftKey === false) { return } // with no shft key pressed, no automatic change in scale
      let currentTimeFrame = thisObject.timeFrame
      let timeFrame = recalculatePeriod(event.newLevel)
      if (timeFrame !== currentTimeFrame) {
        for (let i = 0; i < timeFramesMasterArray.length; i++) {
          let timeFrameArray = timeFramesMasterArray[i]
          for (let j = 0; j < timeFrameArray.length; j++) {
            let record = timeFrameArray[j]
            if (timeFrame === record[0]) {
              filePeriodIndex = i
              timeFrameIndex = j
            }
          }
        }
        newTimeFrame()
        saveObjectState()
      }
    }
  }

  function onMouseWheel (event) {
    delta = event.wheelDelta
    if (delta < 0) {
      timeFrameIndex--
      if (timeFrameIndex < 0) {
        filePeriodIndex--
        if (filePeriodIndex < 0) {
          filePeriodIndex = 0
          timeFrameIndex = 0
        } else {
          timeFrameIndex = timeFramesMasterArray[filePeriodIndex].length - 1
        }
      }
    } else {
      timeFrameIndex++
      if (timeFrameIndex > timeFramesMasterArray[filePeriodIndex].length - 1) {
        filePeriodIndex++
        if (filePeriodIndex > timeFramesMasterArray.length - 1) {
          filePeriodIndex = timeFramesMasterArray.length - 1
          timeFrameIndex = timeFramesMasterArray[filePeriodIndex].length - 1
        } else {
          timeFrameIndex = 0
        }
      }
    }

    newTimeFrame()
    saveObjectState()
  }

  function getContainer (point) {
    if (thisObject.container.frame.isThisPointHere(point, true) === true) {
      return thisObject.container
    }
  }

  function saveObjectState () {
    try {
      let code = JSON.parse(thisObject.payload.node.code)
      code.value = timeFrameLabel
      thisObject.payload.node.code = JSON.stringify(code)
    } catch (err) {
       // we ignore errors here since most likely they will be parsing errors.
    }
  }

  function readObjectState () {
    try {
      let code = JSON.parse(thisObject.payload.node.code)
      if (code.value !== timeFrameLabel) {
        let found = false
        for (let i = 0; i < timeFramesMasterArray.length; i++) {
          let timeFrameArray = timeFramesMasterArray[i]
          for (let j = 0; j < timeFrameArray.length; j++) {
            let record = timeFrameArray[j]
            if (code.value === record[1]) {
              filePeriodIndex = i
              timeFrameIndex = j
              found = true
            }
          }
        }
        if (found === true) {
          newTimeFrame()
        } else {
          saveObjectState()
        }
      }
    } catch (err) {
       // we ignore errors here since most likely they will be parsing errors.
    }
  }

  function newTimeFrame () {
    let timeFrameArray = timeFramesMasterArray[filePeriodIndex]
    thisObject.timeFrame = timeFrameArray[timeFrameIndex][0]
    timeFrameLabel = timeFrameArray[timeFrameIndex][1]
    // console.log('NEW TIME FRAME LABEL', timeFrameLabel)
    let event = {}
    event.timeFrame = thisObject.timeFrame
    thisObject.container.eventHandler.raiseEvent('Time Frame Value Changed', event)
  }

  function draw () {
    drawScaleBox()
    if (greyOutCoverLayer === true) {
      drawScaleDisplayCover(thisObject.container)
    }
  }

  function drawForeground () {
    if (isMouseOver === true) {
      drawScaleBox()
    }
  }

  function drawScaleBox () {
    if (timeFrameLabel === undefined) { return }

    let label = timeFrameLabel.split('-')
    let label1 = thisObject.payload.node.payload.parentNode.name
    let label2 = label[0]
    let label3 = label[1].toUpperCase()

    let icon1 = canvas.designSpace.iconByUiObjectType.get(thisObject.payload.node.payload.parentNode.type)
    let icon2 = canvas.designSpace.iconByUiObjectType.get(thisObject.payload.node.type)

    let backgroundColor = UI_COLOR.BLACK

    drawScaleDisplay(label1, label2, label3, 0, 0, 0, icon1, icon2, thisObject.container, backgroundColor)
  }
}
