"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunReferencesDecorator = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const ReferencesDecorator_1 = require("./ReferencesDecorator");
/**
 * References decorator that automatically opens to newly added components
 * that implement [[https://pip-services3-nodex.github.io/pip-services3-commons-nodex/interfaces/run.iopenable.html IOpenable interface]] and closes removed components
 * that implement [[https://pip-services3-nodex.github.io/pip-services3-commons-nodex/interfaces/run.iclosable.html ICloseable interface]].
 */
class RunReferencesDecorator extends ReferencesDecorator_1.ReferencesDecorator {
    /**
     * Creates a new instance of the decorator.
     *
     * @param nextReferences 		the next references or decorator in the chain.
     * @param topReferences 		the decorator at the top of the chain.
     */
    constructor(nextReferences, topReferences) {
        super(nextReferences, topReferences);
        this._opened = false;
    }
    /**
     * Checks if the component is opened.
     *
     * @returns true if the component has been opened and false otherwise.
     */
    isOpen() {
        return this._opened;
    }
    /**
     * Opens the component.
     *
     * @param correlationId 	(optional) transaction id to trace execution through call chain.
     */
    open(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._opened) {
                let components = this.getAll();
                yield pip_services3_commons_nodex_1.Opener.open(correlationId, components);
                this._opened = true;
            }
        });
    }
    /**
     * Closes component and frees used resources.
     *
     * @param correlationId 	(optional) transaction id to trace execution through call chain.
     */
    close(correlationId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._opened) {
                let components = this.getAll();
                yield pip_services3_commons_nodex_2.Closer.close(correlationId, components);
                this._opened = false;
            }
        });
    }
    /**
     * Puts a new reference into this reference map.
     *
     * @param locator 	a locator to find the reference by.
     * @param component a component reference to be added.
     */
    put(locator, component) {
        super.put(locator, component);
        if (this._opened) {
            pip_services3_commons_nodex_1.Opener.openOne(null, component);
        }
    }
    /**
     * Removes a previously added reference that matches specified locator.
     * If many references match the locator, it removes only the first one.
     * When all references shall be removed, use [[removeAll]] method instead.
     *
     * @param locator 	a locator to remove reference
     * @returns the removed component reference.
     *
     * @see [[removeAll]]
     */
    remove(locator) {
        let component = super.remove(locator);
        if (this._opened) {
            pip_services3_commons_nodex_2.Closer.closeOne(null, component);
        }
        return component;
    }
    /**
     * Removes all component references that match the specified locator.
     *
     * @param locator 	the locator to remove references by.
     * @returns a list, containing all removed references.
     */
    removeAll(locator) {
        let components = super.removeAll(locator);
        if (this._opened) {
            pip_services3_commons_nodex_2.Closer.close(null, components);
        }
        return components;
    }
}
exports.RunReferencesDecorator = RunReferencesDecorator;
//# sourceMappingURL=RunReferencesDecorator.js.map