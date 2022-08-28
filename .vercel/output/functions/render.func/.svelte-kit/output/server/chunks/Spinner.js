import { c as create_ssr_component, d as add_attribute } from "./index.js";
const Spinner_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1cz4maj{background-image:url('/spinner.gif');background-repeat:no-repeat;background-size:contain;background-position:center;height:40px;width:40px}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  return `<div data-test="${"spinner"}"${add_attribute("style", style, 0)} class="${"svelte-1cz4maj"}"></div>`;
});
export {
  Spinner as S
};
