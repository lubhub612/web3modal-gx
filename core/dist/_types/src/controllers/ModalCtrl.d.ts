import type { ModalCtrlState } from '../types/controllerTypes';
export interface OpenOptions {
    route?: 'Account' | 'ConnectWallet' | 'Help' | 'SelectNetwork';
}
export declare const ModalCtrl: {
    state: ModalCtrlState;
    subscribe(callback: (newState: ModalCtrlState) => void): () => void;
    open(options?: OpenOptions): Promise<void>;
    close(): void;
};
