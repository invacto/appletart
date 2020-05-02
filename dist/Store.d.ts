export declare type listenerCallback = (newValue: any, oldValue: any) => any;
export declare function createStore<State>(state: State): {
    state: {};
    listen: typeof addListener;
};
export declare function getState(): {};
export declare function addListener(path: string, callback: listenerCallback): void;
declare const _default: {
    createStore: typeof createStore;
    addListener: typeof addListener;
    getState: typeof getState;
};
export default _default;