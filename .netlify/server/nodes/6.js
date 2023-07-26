

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Politics/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.f88cbd62.js","_app/immutable/chunks/scheduler.8d27d9d0.js","_app/immutable/chunks/index.52fc8ad2.js","_app/immutable/chunks/Custombar.d34e7d81.js","_app/immutable/chunks/paths.b9b337d6.js","_app/immutable/chunks/Span.29954c91.js"];
export const stylesheets = ["_app/immutable/assets/Custombar.1d121e74.css"];
export const fonts = [];
