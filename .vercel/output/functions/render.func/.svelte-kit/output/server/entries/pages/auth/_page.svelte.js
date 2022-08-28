import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { S as Spinner } from "../../../chunks/Spinner.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-ney13b{display:flex;align-items:center;justify-content:center;height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-ney13b"}">${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
