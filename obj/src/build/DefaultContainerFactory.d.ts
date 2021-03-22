/** @module build */
import { IFactory } from 'pip-services3-components-nodex';
import { CompositeFactory } from 'pip-services3-components-nodex';
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
export declare class DefaultContainerFactory extends CompositeFactory {
    /**
     * Create a new instance of the factory and sets nested factories.
     *
     * @param factories     a list of nested factories
     */
    constructor(...factories: IFactory[]);
}
