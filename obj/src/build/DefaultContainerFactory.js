"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultContainerFactory = void 0;
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const pip_services3_components_nodex_2 = require("pip-services3-components-nodex");
const pip_services3_components_nodex_3 = require("pip-services3-components-nodex");
const pip_services3_components_nodex_4 = require("pip-services3-components-nodex");
const pip_services3_components_nodex_5 = require("pip-services3-components-nodex");
const pip_services3_components_nodex_6 = require("pip-services3-components-nodex");
const pip_services3_components_nodex_7 = require("pip-services3-components-nodex");
const pip_services3_components_nodex_8 = require("pip-services3-components-nodex");
const pip_services3_components_nodex_9 = require("pip-services3-components-nodex");
/**
 * Creates default container components (loggers, counters, caches, locks, etc.) by their descriptors.
 *
 * @see [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/classes/build.factory.html Factory]] (in the PipServices "Components" package)
 * @see [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/classes/info.defaultinfofactory.html DefaultInfoFactory]] (in the PipServices "Components" package)
 * @see [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/classes/log.defaultloggerfactory.html DefaultLoggerFactory]] (in the PipServices "Components" package)
 * @see [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/classes/count.defaultcountersfactory.html DefaultCountersFactory]] (in the PipServices "Components" package)
 * @see [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/classes/config.defaultconfigreaderfactory.html DefaultConfigReaderFactory]] (in the PipServices "Components" package)
 * @see [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/classes/cache.defaultcachefactory.html DefaultCacheFactory]] (in the PipServices "Components" package)
 * @see [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/classes/auth.defaultcredentialstorefactory.html DefaultCredentialStoreFactory]] (in the PipServices "Components" package)
 * @see [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/classes/connect.defaultdiscoveryfactory.html DefaultDiscoveryFactory]] (in the PipServices "Components" package)
 * @see [[https://pip-services3-nodex.github.io/pip-services3-components-nodex/classes/test.defaulttestfactory.html DefaultTestFactory]] (in the PipServices "Components" package)
 */
class DefaultContainerFactory extends pip_services3_components_nodex_1.CompositeFactory {
    /**
     * Create a new instance of the factory and sets nested factories.
     *
     * @param factories     a list of nested factories
     */
    constructor(...factories) {
        super(...factories);
        this.add(new pip_services3_components_nodex_8.DefaultInfoFactory());
        this.add(new pip_services3_components_nodex_2.DefaultLoggerFactory());
        this.add(new pip_services3_components_nodex_3.DefaultCountersFactory());
        this.add(new pip_services3_components_nodex_4.DefaultConfigReaderFactory());
        this.add(new pip_services3_components_nodex_5.DefaultCacheFactory());
        this.add(new pip_services3_components_nodex_6.DefaultCredentialStoreFactory());
        this.add(new pip_services3_components_nodex_7.DefaultDiscoveryFactory());
        this.add(new pip_services3_components_nodex_9.DefaultTestFactory());
    }
}
exports.DefaultContainerFactory = DefaultContainerFactory;
//# sourceMappingURL=DefaultContainerFactory.js.map