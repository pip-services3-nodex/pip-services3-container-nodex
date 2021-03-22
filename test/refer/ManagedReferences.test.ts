const assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-nodex';
import { ILogger } from 'pip-services3-components-nodex';
import { DefaultLoggerFactory } from 'pip-services3-components-nodex';

import { ManagedReferences } from '../../src/refer/ManagedReferences';

suite('ManagedReferences', ()=> {
    
    test('Auto Create Component', () => {
        let refs = new ManagedReferences();

        let factory = new DefaultLoggerFactory();
        refs.put(null, factory);

        let logger = refs.getOneRequired<ILogger>(new Descriptor("*", "logger", "*", "*", "*"));
        assert.isNotNull(logger);
    });    

    test('String Locator', () => {
        let refs = new ManagedReferences();

        let factory = new DefaultLoggerFactory();
        refs.put(null, factory);

        let component = refs.getOneOptional("ABC");
        assert.isNull(component);
    });

    test('Null Locator', () => {
        let refs = new ManagedReferences();

        let factory = new DefaultLoggerFactory();
        refs.put(null, factory);

        let component = refs.getOneOptional(null);
        assert.isNull(component);
    });    

});