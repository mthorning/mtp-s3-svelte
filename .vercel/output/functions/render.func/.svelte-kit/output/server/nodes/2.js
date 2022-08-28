import * as server from '../entries/pages/admin/_layout.server.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/admin/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/admin/_layout.svelte-8c287eba.js';
export { server };
export const imports = ["_app/immutable/components/pages/admin/_layout.svelte-8c287eba.js","_app/immutable/chunks/index-46cd8f91.js"];
export const stylesheets = ["_app/immutable/assets/+layout-9d62e9bb.css"];
