import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "table{border-collapse:collapse}table th{border-top:1px solid var(--white)}table th,table tr:last-child td{border-bottom:1px solid var(--white)}table td,table th{padding:4px 16px;border-left:1px solid var(--white);border-right:1px solid var(--white)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
