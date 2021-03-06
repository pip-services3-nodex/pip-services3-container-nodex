"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessContainer = void 0;
/** @module core */
/** @hidden */
let process = require('process');
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const Container_1 = require("./Container");
/**
 * Inversion of control (IoC) container that runs as a system process.
 * It processes command line arguments and handles unhandled exceptions and Ctrl-C signal
 * to gracefully shutdown the container.
 *
 * ### Command line arguments ###
 * - <code>--config / -c</code>             path to JSON or YAML file with container configuration (default: "./config/config.yml")
 * - <code>--param / --params / -p</code>   value(s) to parameterize the container configuration
 * - <code>--help / -h</code>               prints the container usage help
 *
 * @see [[Container]]
 *
 * ### Example ###
 *
 *     let container = new ProcessContainer();
 *     container.addFactory(new MyComponentFactory());
 *
 *     container.run(process.args);
 */
class ProcessContainer extends Container_1.Container {
    /**
     * Creates a new instance of the container.
     *
     * @param name          (optional) a container name (accessible via ContextInfo)
     * @param description   (optional) a container description (accessible via ContextInfo)
     */
    constructor(name, description) {
        super(name, description);
        this._configPath = './config/config.yml';
        this._logger = new pip_services3_components_nodex_1.ConsoleLogger();
    }
    getConfigPath(args) {
        for (let index = 0; index < args.length; index++) {
            let arg = args[index];
            let nextArg = index < args.length - 1 ? args[index + 1] : null;
            nextArg = nextArg && nextArg.startsWith('-') ? null : nextArg;
            if (nextArg != null) {
                if (arg == "--config" || arg == "-c") {
                    return nextArg;
                }
            }
        }
        return this._configPath;
    }
    getParameters(args) {
        // Process command line parameters
        let line = '';
        for (let index = 0; index < args.length; index++) {
            let arg = args[index];
            let nextArg = index < args.length - 1 ? args[index + 1] : null;
            nextArg = nextArg && nextArg.startsWith('-') ? null : nextArg;
            if (nextArg != null) {
                if (arg == "--param" || arg == "--params" || arg == "-p") {
                    if (line.length > 0)
                        line = line + ';';
                    line = line + nextArg;
                    index++;
                }
            }
        }
        let parameters = pip_services3_commons_nodex_1.ConfigParams.fromString(line);
        // Process environmental variables
        parameters.append(process.env);
        return parameters;
    }
    showHelp(args) {
        for (let index = 0; index < args.length; index++) {
            let arg = args[index];
            if (arg == "--help" || arg == "-h") {
                return true;
            }
        }
        return false;
    }
    printHelp() {
        console.log("Pip.Services process container - http://www.pipservices.org");
        console.log("run [-h] [-c <config file>] [-p <param>=<value>]*");
    }
    captureErrors(correlationId) {
        // Log uncaught exceptions
        process.on('uncaughtException', (ex) => {
            this._logger.fatal(correlationId, ex, "Process is terminated");
            process.exit(1);
        });
    }
    captureExit(correlationId) {
        this._logger.info(correlationId, "Press Control-C to stop the microservice...");
        // Activate graceful exit
        process.on('SIGINT', () => {
            process.exit();
        });
        // Gracefully shutdown
        process.on('exit', () => {
            this.close(correlationId);
            this._logger.info(correlationId, "Goodbye!");
        });
    }
    /**
     * Runs the container by instantiating and running components inside the container.
     *
     * It reads the container configuration, creates, configures, references and opens components.
     * On process exit it closes, unreferences and destroys components to gracefully shutdown.
     *
     * @param args  command line arguments
     */
    run(args) {
        if (this.showHelp(args)) {
            this.printHelp();
            return;
        }
        let correlationId = this._info.name;
        let path = this.getConfigPath(args);
        let parameters = this.getParameters(args);
        this.readConfigFromFile(correlationId, path, parameters);
        this.captureErrors(correlationId);
        this.captureExit(correlationId);
        this.open(correlationId);
    }
}
exports.ProcessContainer = ProcessContainer;
//# sourceMappingURL=ProcessContainer.js.map