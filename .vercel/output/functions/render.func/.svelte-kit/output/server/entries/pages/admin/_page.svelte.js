import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-3f8dgl{width:50vw;height:80vh;margin:auto;display:flex;justify-content:space-evenly;align-items:center}a.svelte-3f8dgl{width:100px;height:80px;color:var(--black);text-decoration:none;background:var(--white);display:block;font-size:20px;text-align:center;line-height:75px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-3f8dgl"}"><a href="${"/admin/images"}" class="${"svelte-3f8dgl"}">Images</a>
  <a href="${"/admin/photos"}" class="${"svelte-3f8dgl"}">Photos</a>
</div>`;
});
export {
  Page as default
};
