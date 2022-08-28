import * as server from '../entries/pages/_page.server.ts.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-d1cefa64.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-d1cefa64.js","_app/immutable/chunks/index-46cd8f91.js","_app/immutable/chunks/Spinner-d468d9cd.js"];
export const stylesheets = ["_app/immutable/assets/+page-3e66e23d.css","_app/immutable/assets/Spinner-d42269c0.css"];
