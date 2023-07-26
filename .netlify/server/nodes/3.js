

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/About/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.b25ce89c.js","_app/immutable/chunks/scheduler.8d27d9d0.js","_app/immutable/chunks/index.52fc8ad2.js","_app/immutable/chunks/Custombar.d34e7d81.js","_app/immutable/chunks/paths.b9b337d6.js","_app/immutable/chunks/Avatar.28ac9049.js"];
export const stylesheets = ["_app/immutable/assets/Custombar.1d121e74.css"];
export const fonts = [];
