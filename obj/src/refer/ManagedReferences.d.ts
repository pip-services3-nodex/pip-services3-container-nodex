/** @module refer */
import { IOpenable } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ReferencesDecorator } from './ReferencesDecorator';
import { BuildReferencesDecorator } from './BuildReferencesDecorator';
import { LinkReferencesDecorator } from './LinkReferencesDecorator';
import { RunReferencesDecorator } from './RunReferencesDecorator';
/**
 * Managed references that in addition to keeping and locating references can also
 * manage their lifecycle:
 * - Auto-creation of missing component using available factories
 * - Auto-linking newly added components
 * - Auto-opening newly added components
 * - Auto-closing removed components
 *
 * @see [[RunReferencesDecorator]]
 * @see [[LinkReferencesDecorator]]
 * @see [[BuildReferencesDecorator]]
 * @see [[https://pip-services3-nodex.github.io/pip-services3-commons-nodex/classes/refer.reference.html References]] (in the PipServices "Commons" package)
 */
export declare class ManagedReferences extends ReferencesDecorator implements IOpenable {
    protected _references: References;
    protected _builder: BuildReferencesDecorator;
    protected _linker: LinkReferencesDecorator;
    protected _runner: RunReferencesDecorator;
    /**
     * Creates a new instance of the references
     *
     * @param tuples    tuples where odd values are component locators (descriptors) and even values are component references
     */
    constructor(tuples?: any[]);
    /**
     * Checks if the component is opened.
     *
     * @returns true if the component has been opened and false otherwise.
     */
    isOpen(): boolean;
    /**
     * Opens the component.
     *
     * @param correlationId 	(optional) transaction id to trace execution through call chain.
     */
    open(correlationId: string): Promise<void>;
    /**
     * Closes component and frees used resources.
     *
     * @param correlationId 	(optional) transaction id to trace execution through call chain.
     */
    close(correlationId: string): Promise<void>;
    /**
     * Creates a new ManagedReferences object filled with provided key-value pairs called tuples.
     * Tuples parameters contain a sequence of locator1, component1, locator2, component2, ... pairs.
     *
     * @param tuples	the tuples to fill a new ManagedReferences object.
     * @returns			a new ManagedReferences object.
     */
    static fromTuples(...tuples: any[]): ManagedReferences;
}
