---
title:  Trading System Hierarchy
summary: "A trading system provides the tools to build, test and depoy trading strategies from within a visual environment, with no coding requirements."
sidebar: suite_sidebar
permalink: suite-trading-system-hierarchy.html
toc: false
---

{% include note.html content="Hover your mouse over a node for a tooltip definition, and click to get all the details." %}

<table class='hierarchyTable'>
    <thead>
        <tr>
            <th>
                <a href='#trading-system' data-toggle='tooltip' data-original-title='{{site.data.trading_system.trading_system}}'><img src='images/icons/trading-system.png' /><br />Trading System</a>
            </th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#parameters' data-toggle='tooltip' data-original-title='{{site.data.trading_system.parameters}}'><img src='images/icons/parameters.png' /><br />Parameters</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#base-asset' data-toggle='tooltip' data-original-title='{{site.data.trading_system.base_asset}}'><img src='images/icons/base-asset.png' /><br />Base Asset</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#time-frame' data-toggle='tooltip' data-original-title='{{site.data.trading_system.time_frame}}'><img src='images/icons/time-frame.png' /><br />Time Frame</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#time-range' data-toggle='tooltip' data-original-title='{{site.data.trading_system.time_range}}'><img src='images/icons/time-range.png' /><br />Time Range</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#slippage' data-toggle='tooltip' data-original-title='{{site.data.trading_system.slippage}}'><img src='images/icons/slippage.png' /><br />Slippage</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#fee-structure' data-toggle='tooltip' data-original-title='{{site.data.trading_system.fee_structure}}'><img src='images/icons/fee-structure.png' /><br />Fee Structure</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#strategy' data-toggle='tooltip' data-original-title='{{site.data.trading_system.strategy}}'><img src='images/icons/strategy.png' /><br />Strategy</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#trigger-stage' data-toggle='tooltip' data-original-title='{{site.data.trading_system.trigger_stage}}'><img src='images/icons/trigger-stage.png' /><br />Trigger Stage</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#trigger-on-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.trigger-on_event}}'><img src='images/icons/trigger-on-event.png' /><br />Trigger-On Event</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#situation' data-toggle='tooltip' data-original-title='{{site.data.trading_system.situation}}'><img src='images/icons/situation.png' /><br />Situation</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#condition' data-toggle='tooltip' data-original-title='{{site.data.trading_system.condition}}'><img src='images/icons/condition.png' /><br />Condition</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#trigger-off-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.trigger-off_event}}'><img src='images/icons/trigger-off-event.png' /><br />Trigger-Off Event</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#situation' data-toggle='tooltip' data-original-title='{{site.data.trading_system.situation}}'><img src='images/icons/situation.png' /><br />Situation</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#condition' data-toggle='tooltip' data-original-title='{{site.data.trading_system.condition}}'><img src='images/icons/condition.png' /><br />Condition</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#take-position-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.take_position_event}}'><img src='images/icons/take-position-event.png' /><br />Take Position Event</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#situation' data-toggle='tooltip' data-original-title='{{site.data.trading_system.situation}}'><img src='images/icons/situation.png' /><br />Situation</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#condition' data-toggle='tooltip' data-original-title='{{site.data.trading_system.condition}}'><img src='images/icons/condition.png' /><br />Condition</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#open-stage' data-toggle='tooltip' data-original-title='{{site.data.trading_system.open_stage}}'><img src='images/icons/open-stage.png' /><br />Open Stage</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#initial-definition' data-toggle='tooltip' data-original-title='{{site.data.trading_system.initial_definition}}'><img src='images/icons/initial-definition.png' /><br />Initial Definition</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#initial-stop' data-toggle='tooltip' data-original-title='{{site.data.trading_system.initial_stop}}'><img src='images/icons/initial-stop.png' /><br />Initial Stop</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#phase-0' data-toggle='tooltip' data-original-title='{{site.data.trading_system.phase_0}}'><img src='images/icons/phase-0.png' /><br />Phase 0</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#formula' data-toggle='tooltip' data-original-title='{{site.data.trading_system.formula}}'><img src='images/icons/formula.png' /><br />Formula</a>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#next-phase-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.next_phase_event}}'><img src='images/icons/next-phase-event.png' /><br />Next Phase Event</a>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#situation' data-toggle='tooltip' data-original-title='{{site.data.trading_system.situation}}'><img src='images/icons/situation.png' /><br />Situation</a>
            </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#condition' data-toggle='tooltip' data-original-title='{{site.data.trading_system.condition}}'><img src='images/icons/condition.png' /><br />Condition</a>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#initial-take-profit' data-toggle='tooltip' data-original-title='{{site.data.trading_system.initial_take_profit}}'><img src='images/icons/initial-take-profit.png' /><br />Initial Take Profit</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#phase-0' data-toggle='tooltip' data-original-title='{{site.data.trading_system.phase_0}}'><img src='images/icons/phase-0.png' /><br />Phase 0</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#formula' data-toggle='tooltip' data-original-title='{{site.data.trading_system.formula}}'><img src='images/icons/formula.png' /><br />Formula</a>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#next-phase-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.next_phase_event}}'><img src='images/icons/next-phase-event.png' /><br />Next Phase Event</a>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#situation' data-toggle='tooltip' data-original-title='{{site.data.trading_system.situation}}'><img src='images/icons/situation.png' /><br />Situation</a>
            </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#condition' data-toggle='tooltip' data-original-title='{{site.data.trading_system.condition}}'><img src='images/icons/condition.png' /><br />Condition</a>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#position-size' data-toggle='tooltip' data-original-title='{{site.data.trading_system.position_size}}'><img src='images/icons/position-size.png' /><br />Position Size</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#formula' data-toggle='tooltip' data-original-title='{{site.data.trading_system.formula}}'><img src='images/icons/formula.png' /><br />Formula</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#position-rate' data-toggle='tooltip' data-original-title='{{site.data.trading_system.position_rate}}'><img src='images/icons/position-rate.png' /><br />Position Rate</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#formula' data-toggle='tooltip' data-original-title='{{site.data.trading_system.formula}}'><img src='images/icons/formula.png' /><br />Formula</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#open-execution' data-toggle='tooltip' data-original-title='{{site.data.trading_system.open_execution}}'><img src='images/icons/open-execution.png' /><br />Open Execution</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#manage-stage' data-toggle='tooltip' data-original-title='{{site.data.trading_system.manage_stage}}'><img src='images/icons/manage-stage.png' /><br />Manage Stage</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#stop' data-toggle='tooltip' data-original-title='{{site.data.trading_system.stop}}'><img src='images/icons/stop.png' /><br />Stop</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#phase-1' data-toggle='tooltip' data-original-title='{{site.data.trading_system.phase_1}}'><img src='images/icons/phase-1.png' /><br />Phase 1</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#formula' data-toggle='tooltip' data-original-title='{{site.data.trading_system.formula}}'><img src='images/icons/formula.png' /><br />Formula</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#next-phase-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.next_phase_event}}'><img src='images/icons/next-phase-event.png' /><br />Next Phase Event</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#situation' data-toggle='tooltip' data-original-title='{{site.data.trading_system.situation}}'><img src='images/icons/situation.png' /><br />Situation</a>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#condition' data-toggle='tooltip' data-original-title='{{site.data.trading_system.condition}}'><img src='images/icons/condition.png' /><br />Condition</a>
            </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#take-profit' data-toggle='tooltip' data-original-title='{{site.data.trading_system.take_profit}}'><img src='images/icons/take-profit.png' /><br />Take Profit</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#phase-1' data-toggle='tooltip' data-original-title='{{site.data.trading_system.phase_1}}'><img src='images/icons/phase-1.png' /><br />Phase 1</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-fork.png' />
            </td>
            <td>
                <a href='#formula' data-toggle='tooltip' data-original-title='{{site.data.trading_system.formula}}'><img src='images/icons/formula.png' /><br />Formula</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#next-phase-event' data-toggle='tooltip' data-original-title='{{site.data.trading_system.next_phase_event}}'><img src='images/icons/next-phase-event.png' /><br />Next Phase Event</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#situation' data-toggle='tooltip' data-original-title='{{site.data.trading_system.situation}}'><img src='images/icons/situation.png' /><br />Situation</a>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-line.png' />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#condition' data-toggle='tooltip' data-original-title='{{site.data.trading_system.condition}}'><img src='images/icons/condition.png' /><br />Condition</a>
            </td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#close-stage' data-toggle='tooltip' data-original-title='{{site.data.trading_system.close_stage}}'><img src='images/icons/close-stage.png' /><br />Close Stage</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>
                <img src='images/icons/tree-connector-elbow.png' />
            </td>
            <td>
                <a href='#close-execution' data-toggle='tooltip' data-original-title='{{site.data.trading_system.close_execution}}'><img src='images/icons/close-execution.png' /><br />Close Execution</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>



{% include /trading_system/trading-system.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/parameters.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/base-asset.md heading="##" icon="150-" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/quoted-asset.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/time-frame.md heading="##" icon="150-" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/time-range.md heading="##" icon="150-" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/slippage.md heading="##" icon="150-" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/fee-structure.md heading="##" icon="150-" adding="###" configuring="###" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/strategy.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/trigger-stage.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/trigger-on-event.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/situation.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/condition.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/trigger-off-event.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/take-position-event.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/open-stage.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/initial-definition.md heading="##" icon="150-" adding="###" configuring="" starting="" content="no" definition="bold" table="yes" more="no"%}

{% include /trading_system/initial-stop.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/phase-0.md heading="##" icon="150-" adding="###" configuring="" starting="" content="no" definition="bold" table="yes" more="no"%}

{% include /trading_system/formula.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/next-phase-event.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/initial-take-profit.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/position-size.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/position-rate.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/open-execution.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/manage-stage.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/stop.md heading="##" icon="150-" adding="###" configuring="" starting="" content="no" definition="bold" table="yes" more="no"%}

{% include /trading_system/phase-1.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/take-profit.md heading="##" icon="150-" adding="###" configuring="" starting="" content="no" definition="bold" table="yes" more="no"%}

{% include /trading_system/close-stage.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

{% include /trading_system/close-execution.md heading="##" icon="150-" adding="###" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}