import { LitElement } from 'lit';
export declare class W3mWcConnectionContext extends LitElement {
    constructor();
    disconnectedCallback(): void;
    private readonly unwatchOptions?;
    private readonly unwatchAccount?;
    private readonly unwatchWcConnection?;
    private timeout?;
    private isGenerated;
    private selectedChainId;
    private isAccountConnected;
    private lastRetry;
    private connectAndWait;
}
declare global {
    interface HTMLElementTagNameMap {
        'w3m-wc-connection-context': W3mWcConnectionContext;
    }
}
