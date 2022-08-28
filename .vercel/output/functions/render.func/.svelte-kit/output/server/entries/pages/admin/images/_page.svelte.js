import { c as create_ssr_component, h as each, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index.js";
const Table_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "tr.svelte-a2obw6{height:63px}.danger.svelte-a2obw6{color:var(--color);background:var(--danger)}",
  map: null
};
function humanSize(size, unitIdx = 0) {
  const units = ["B", "KB", "MB"];
  if (size < 1024)
    return `${size.toFixed(1)} ${units[unitIdx]}`;
  return humanSize(size / 1024, unitIdx + 1);
}
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { photos } = $$props;
  let { idToken } = $$props;
  let forDeletion;
  if ($$props.photos === void 0 && $$bindings.photos && photos !== void 0)
    $$bindings.photos(photos);
  if ($$props.idToken === void 0 && $$bindings.idToken && idToken !== void 0)
    $$bindings.idToken(idToken);
  $$result.css.add(css$1);
  return `<table><thead><th></th>
    <th>Name</th>
    <th>Size</th>
    <th>Last modified</th>
    <th></th></thead>
  <tbody>${each(photos ?? [], (photo) => {
    return `<tr class="${"svelte-a2obw6"}">
        <td><img${add_attribute("src", photo.thumbUrl, 0)}></td>
        <td>${escape(photo.filename.replace("photos/", ""))}</td>
        <td>${escape(humanSize(photo.size || 0))}</td>
        <td>${escape(photo.lastModified)}</td>
        <td>${forDeletion == photo.filename ? `<button>Cancel</button>
            <button class="${"danger svelte-a2obw6"}">Ok</button>` : `<button>Delete</button>`}</td>
      </tr>`;
  })}</tbody>
</table>`;
});
const Form_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-4l45r9.svelte-4l45r9{color:var(--danger)}form.svelte-4l45r9.svelte-4l45r9{margin-bottom:16px;width:400px}form.svelte-4l45r9 div.svelte-4l45r9{margin-bottom:8px}",
  map: null
};
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasFileWithSameName;
  let { idToken } = $$props;
  let { photos } = $$props;
  let fileInput;
  let newFilename = "";
  if ($$props.idToken === void 0 && $$bindings.idToken && idToken !== void 0)
    $$bindings.idToken(idToken);
  if ($$props.photos === void 0 && $$bindings.photos && photos !== void 0)
    $$bindings.photos(photos);
  $$result.css.add(css);
  hasFileWithSameName = newFilename;
  return `<form class="${"svelte-4l45r9"}"><div class="${"svelte-4l45r9"}"><input id="${"file"}" accept="${"image/jpeg"}" type="${"file"}"></div>
  <div class="${"svelte-4l45r9"}"><input id="${"filename"}" type="${"text"}"${add_attribute("this", fileInput, 0)}></div>
  ${hasFileWithSameName ? `<p class="${"svelte-4l45r9"}">A file with this name already exists</p>` : ``}
  <div class="${"svelte-4l45r9"}"><input type="${"submit"}" value="${"Upload"}"></div>
</form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const photos = (data == null ? void 0 : data.photos) ?? [];
  const idToken = void 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Images</h1>
${validate_component(Form, "Form").$$render($$result, { idToken, photos }, {}, {})}
${validate_component(Table, "Table").$$render($$result, { idToken, photos }, {}, {})}`;
});
export {
  Page as default
};
