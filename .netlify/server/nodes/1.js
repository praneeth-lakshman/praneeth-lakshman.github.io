

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2f4926ee.js","_app/immutable/chunks/scheduler.8d27d9d0.js","_app/immutable/chunks/index.52fc8ad2.js","_app/immutable/chunks/singletons.5c7427fe.js","_app/immutable/chunks/paths.b9b337d6.js"];
export const stylesheets = [];
export const fonts = [];
