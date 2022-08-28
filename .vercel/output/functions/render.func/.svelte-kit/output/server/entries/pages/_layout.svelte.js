import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--white:#fff;--black:#232323;--red:#f36363;--border-color:var(--white);--color:var(--white);--background-color:var(--black);--danger:var(--red)}body{background-color:var(--background-color);color:var(--color)}main.svelte-f29imw{min-height:100vh;margin:0 auto;box-sizing:border-box;padding:8px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-f29imw"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
