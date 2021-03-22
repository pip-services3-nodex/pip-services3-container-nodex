"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require('chai').assert;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const ManagedReferences_1 = require("../../src/refer/ManagedReferences");
suite('ManagedReferences', () => {
    test('Auto Create Component', () => {
        let refs = new ManagedReferences_1.ManagedReferences();
        let factory = new pip_services3_components_nodex_1.DefaultLoggerFactory();
        refs.put(null, factory);
        let logger = refs.getOneRequired(new pip_services3_commons_nodex_1.Descriptor("*", "logger", "*", "*", "*"));
        assert.isNotNull(logger);
    });
    test('String Locator', () => {
        let refs = new ManagedReferences_1.ManagedReferences();
        let factory = new pip_services3_components_nodex_1.DefaultLoggerFactory();
        refs.put(null, factory);
        let component = refs.getOneOptional("ABC");
        assert.isNull(component);
    });
    test('Null Locator', () => {
        let refs = new ManagedReferences_1.ManagedReferences();
        let factory = new pip_services3_components_nodex_1.DefaultLoggerFactory();
        refs.put(null, factory);
        let component = refs.getOneOptional(null);
        assert.isNull(component);
    });
});
//# sourceMappingURL=ManagedReferences.test.js.map