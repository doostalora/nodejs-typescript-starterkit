import AsyncHooks from "async_hooks";

const context = new Map();

const init = function (asyncId: number, type: string, triggerAsyncId: number) {
    if (context.has(triggerAsyncId)) {
        context.set(asyncId, context.get(triggerAsyncId));
    }
};

const destroy = function (asyncId: number) {
    if (context.has(asyncId)) {
        context.delete(asyncId);
    }
};

const before = function (asyncId: number) {
    if (context.has(asyncId)) {

    }
};

const after = function (asyncId: number) {
    if (context.has(asyncId)) {

    }
};

const put = function (asyncId: number, data: any) {
    context.set(asyncId, data);
};

const get = function (asyncId: number) {
    return context.get(asyncId);
};

const hook = AsyncHooks.createHook({
    init: init,
    destroy: destroy,
    before: before,
    after: after
});

export class Context {
    static initialize() {
        hook.enable();
    }
    static shutdown() {
        hook.disable();
    }
    static get() {
        return get(AsyncHooks.executionAsyncId());
    }
    static put(data: any) {
        put(AsyncHooks.executionAsyncId(), data);
    }
}
