/** @module build */
import { IFactory } from 'pip-services3-components-nodex';
import { CompositeFactory } from 'pip-services3-components-nodex';
import { DefaultLoggerFactory } from 'pip-services3-components-nodex';
import { DefaultCountersFactory } from 'pip-services3-components-nodex';
import { DefaultConfigReaderFactory } from 'pip-services3-components-nodex';
import { DefaultCacheFactory } from 'pip-services3-components-nodex';
import { DefaultCredentialStoreFactory } from 'pip-services3-components-nodex';
import { DefaultDiscoveryFactory } from 'pip-services3-components-nodex';
import { DefaultInfoFactory } from 'pip-services3-components-nodex';
import { DefaultTestFactory } from 'pip-services3-components-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';

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
export class DefaultContainerFactory extends CompositeFactory {
    /**
	 * Create a new instance of the factory and sets nested factories.
     * 
     * @param factories     a list of nested factories
	 */
    public constructor(...factories: IFactory[]) {
        super(...factories);

        this.add(new DefaultInfoFactory());
        this.add(new DefaultLoggerFactory());
        this.add(new DefaultCountersFactory());
        this.add(new DefaultConfigReaderFactory());
        this.add(new DefaultCacheFactory());
        this.add(new DefaultCredentialStoreFactory());
        this.add(new DefaultDiscoveryFactory());
        this.add(new DefaultTestFactory());
    }

}
