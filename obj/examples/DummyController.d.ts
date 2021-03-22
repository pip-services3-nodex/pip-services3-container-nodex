import { IReferenceable } from 'pip-services3-commons-nodex';
import { IReferences } from 'pip-services3-commons-nodex';
import { IReconfigurable } from 'pip-services3-commons-nodex';
import { IOpenable } from 'pip-services3-commons-nodex';
import { INotifiable } from 'pip-services3-commons-nodex';
import { Parameters } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
export declare class DummyController implements IReferenceable, IReconfigurable, IOpenable, INotifiable {
    private readonly _timer;
    private readonly _logger;
    private _message;
    private _counter;
    constructor();
    get message(): string;
    set message(value: string);
    get counter(): number;
    set counter(value: number);
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    isOpen(): boolean;
    open(correlationId: string): Promise<void>;
    close(correlationId: string): Promise<void>;
    notify(correlationId: string, args: Parameters): void;
}
