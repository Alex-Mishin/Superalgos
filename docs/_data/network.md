network: "The network hierarchy contains definitions regarding the physical location in which certain nodes live or function. For instance, a certain process my run and store data in your local machine or some other machine in the network."

network_node: "A network node represents a machine in the network on which processes run or data is stored."

data_mining: "Data mining is the activity of processing data. You need to process data to feed charts, and so that the trading bot may make decisions based on quality information. In the context of the network hierarchy, the data-mining node groups the task managers handling sensor and indicator bots instances."

testing_environment: "The testing environment node organizes trading sessions involving testing of trading systems."

production_environment: "The production environment node organizes trading sessions involving live trading."

task_manager: "A task manager is a device used to organize and control any number of tasks, which, in turn, control bot instances. You use a task manager to start or stop several tasks at the same time."

task: "A task is the device used to control bot instances, that is, to start and stop bots, including sensors, indicators and the trading bot."

indicator_bot_instance: "An indicator bot instance is a reference to an indicator bot as defined in a data mine. The instance of the bot runs the defined processes and generates the defined data products."

indicator_process_instance: "An indicator process instance is a reference to the process definition of an indicator bot, as defined in a data mine."

sensor_bot_instance: "A sensor bot instance is a reference to a sensor bot as defined in a data mine. The instance of the bot runs the defined processes and generates the defined data products."

sensor_process_instance: "A sensor process instance is a reference to the process definition of a sensor bot, as defined in a data mine."

market_reference: "A market reference is a reference to a specific market in a specific exchange, as defined in the Crypto Ecosystem hierarchy. The reference dictates which market the process works with."

trading_bot_instance: "A trading bot instance is a reference to the trading bot as defined in the Masters data mine. The instance of the bot runs the defined processes and generates the defined data products."

trading_process_instance: "A trading process instance is a reference to the process definition of the trading bot, as defined in the Masters data mine."

backtesting_session: "A backtesting session is a trading mode by which the trading bot instance reads historic market data in a user-defined datetime range, applies the rules defined in the associated trading system, and generates a trading simulation."

paper_trading_session: "A paper trading session is a trading mode by which the trading bot instance reads a live market data feed, applies the rules defined in the associated trading system, and generates a trading simulation."

forward_testing_session: "A forward testing session is a trading mode by which the trading bot instance performs live trading with a user-defined fraction of the available capital."

live_trading_session: "A live trading session is a trading mode by which the trading bot instance reads a live market data feed, applies the rules as defined in the associated trading system, places the corresponding orders at the associated exchange, and stores the defined data products."

key_instance: "The key instance is a reference to an exchange account key as defined in a specific user account, in a specific exchange, on the Crypto Ecosystem hierarchy."

data_storage: "The data storage node controls aspects of what data is to be stored in the corresponding network node."

session_based_data: "Session-based data refers to data that is generated as a consequence of running a session, that is, data the trading bot instance generates while running backtesting, paper trading, forward testing or live trading sessions."

session_reference: "A session reference establishes which session is the one which shall store data in the current location."

single_market_data: "Single market data represents the group of data products generated by the referenced session, in a specific market."

data_product: "A data product represents the collection of datasets generated by the instance of a bot as defined in the corresponding data mine."

dataset: "A data set is a collection of files stored in the designated location, as per the definitions on the referenced data product in the corresponding data mine."

session_independent_data: "Session independent data refers to data generated by sensors and indicators, not related to trading sessions."

session: "A session, or trading session, is a specific mode in which the trading bot instance may be run. The trading bot is prepared to run three different types of testing sessions&mdash;backtesting, paper trading, and forward testing&mdash;and the live trading session mode."
