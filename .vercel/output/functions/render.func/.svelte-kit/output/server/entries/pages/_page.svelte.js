import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty, v as validate_component, h as each } from "../../chunks/index.js";
import { S as Spinner } from "../../chunks/Spinner.js";
const Img_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "img.svelte-es9wde{width:100%;height:100%;opacity:0;transition:all 1s ease}.loaded.svelte-es9wde{opacity:1}",
  map: null
};
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { style = "" } = $$props;
  let { afterLoaded = () => {
  } } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.afterLoaded === void 0 && $$bindings.afterLoaded && afterLoaded !== void 0)
    $$bindings.afterLoaded(afterLoaded);
  $$result.css.add(css$4);
  return `<img${add_attribute("src", src, 0)}${add_attribute("style", style, 0)} class="${["svelte-es9wde", ""].join(" ").trim()}">`;
});
const IntersectionObserver_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-1kuj9kb{width:100%;height:100%}",
  map: null
};
const IntersectionObserver_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { once = false } = $$props;
  let { top = 0 } = $$props;
  let { bottom = 0 } = $$props;
  let { left = 0 } = $$props;
  let { right = 0 } = $$props;
  let intersecting = false;
  let container;
  if ($$props.once === void 0 && $$bindings.once && once !== void 0)
    $$bindings.once(once);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.left === void 0 && $$bindings.left && left !== void 0)
    $$bindings.left(left);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  $$result.css.add(css$3);
  return `<div class="${"svelte-1kuj9kb"}"${add_attribute("this", container, 0)}>${slots.default ? slots.default({ intersecting }) : ``}
</div>`;
});
const Thumbnail_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-1w4dko7{cursor:pointer;position:relative;width:140px;height:140px;overflow:hidden;border:2px solid var(--border-color);user-select:none}@media(min-width: 600px){div.svelte-1w4dko7{width:250px;height:250px}}",
  map: null
};
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url, style = "" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$2);
  return `<div data-test="${"thumbnail"}" class="${escape(null_to_empty(`thumbnail `), true) + " svelte-1w4dko7"}"${add_attribute("style", style, 0)}>${validate_component(IntersectionObserver_1, "IntersectionObserver").$$render($$result, { once: true }, {}, {
    default: ({ intersecting }) => {
      return `${intersecting ? `${validate_component(Img, "Img").$$render($$result, { src: url }, {}, {})}` : ``}`;
    }
  })}
</div>`;
});
const Lightbox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".overlay.svelte-1ha5rvk{position:fixed;display:flex;justify-content:center;right:0;left:0;z-index:9999;align-items:center;background-color:rgba(0, 0, 0, 0.9)}@media(min-width: 400px) and (min-height: 400px){.radial.svelte-1ha5rvk{background:no-repeat center center radial-gradient(#9fa0ae -74%, rgba(0, 0, 0, 0.9) 67%);background-size:cover !important}}.top.svelte-1ha5rvk{background-image:url('/spinner.gif') no-repeat center;background-size:75px;top:0;bottom:50px;padding:16px 16px 0 16px}.bottom.svelte-1ha5rvk{top:calc(100% - 50px);align-items:center;bottom:0}span.svelte-1ha5rvk{display:flex;justify-content:space-between}.control.svelte-1ha5rvk{border-radius:2px;cursor:pointer;margin:0 4px;user-select:none}.icon.svelte-1ha5rvk{font-size:16px;height:34px;width:34px;display:flex;align-items:center}.details.svelte-1ha5rvk{padding:3px 8px;line-height:28px;white-space:nowrap;text-align:center;width:150px}",
  map: null
};
const Lightbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url, close, click, radial } = $$props;
  let { previous = () => {
  } } = $$props;
  let { next = () => {
  } } = $$props;
  let controls = false;
  let showSpinner = true;
  const onImageLoad = () => {
    controls = true;
    showSpinner = false;
  };
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.close === void 0 && $$bindings.close && close !== void 0)
    $$bindings.close(close);
  if ($$props.click === void 0 && $$bindings.click && click !== void 0)
    $$bindings.click(click);
  if ($$props.radial === void 0 && $$bindings.radial && radial !== void 0)
    $$bindings.radial(radial);
  if ($$props.previous === void 0 && $$bindings.previous && previous !== void 0)
    $$bindings.previous(previous);
  if ($$props.next === void 0 && $$bindings.next && next !== void 0)
    $$bindings.next(next);
  $$result.css.add(css$1);
  return `

<div class="${["overlay top svelte-1ha5rvk", radial ? "radial" : ""].join(" ").trim()}" data-test="${"lightbox"}">${showSpinner ? `${validate_component(Spinner, "Spinner").$$render(
    $$result,
    {
      style: `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
  `
    },
    {},
    {}
  )}` : ``}
  ${validate_component(Img, "Img").$$render(
    $$result,
    {
      style: `
      max-width: 100%;
      max-height: 100%;
      width: auto;
      height: auto;
      border: 8px solid var(--border-color);
      ${click ? "cursor: pointer;" : ""} 
    `,
      afterLoaded: onImageLoad,
      src: url
    },
    {},
    {}
  )}</div>
<div class="${"overlay bottom svelte-1ha5rvk"}">${click ? `<span class="${["svelte-1ha5rvk", controls ? "controls" : ""].join(" ").trim()}"><div class="${"icon control svelte-1ha5rvk"}"><ion-icon name="${"caret-back-outline"}"></ion-icon></div>
      <div class="${"control details svelte-1ha5rvk"}"></div>
      <div class="${"icon control svelte-1ha5rvk"}"><ion-icon name="${"caret-forward-outline"}"></ion-icon></div></span>` : ``}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page.svelte-p327c5{margin:0 auto;background:var(--primary-bg-color)}.gallery.svelte-p327c5{display:grid;grid-template-columns:repeat(auto-fit, minmax(140px, max-content));grid-gap:16px;justify-content:center;padding:initial}@media(min-width: 600px){.gallery.svelte-p327c5{grid-template-columns:repeat(auto-fit, minmax(250px, max-content));grid-gap:24px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedImage;
  let { data } = $$props;
  const photos = data == null ? void 0 : data.photos;
  let selectedIdx;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  selectedImage = photos == null ? void 0 : photos[selectedIdx];
  return `${$$result.head += `${$$result.title = `<title>MTP:Gallery</title>`, ""}<meta name="${"description"}" content="${"A selection of my favourite images."}" data-svelte="svelte-1inhs9v">`, ""}

<div class="${"page svelte-p327c5"}"><div class="${"gallery svelte-p327c5"}" data-test="${"gallery"}">${!photos || !photos.length ? `<h5>I thought I had more photos than this...</h5>` : `${each(photos, (photo, index) => {
    return `${validate_component(Thumbnail, "Thumbnail").$$render($$result, { url: photo == null ? void 0 : photo.thumbUrl }, {}, {})}`;
  })}`}
    ${selectedImage ? `${validate_component(Lightbox, "Lightbox").$$render(
    $$result,
    {
      click: true,
      radial: true,
      url: selectedImage.fullsizeUrl,
      close: () => selectedIdx = -1,
      next: () => selectedIdx = selectedIdx === (photos == null ? void 0 : photos.length) ? 0 : selectedIdx + 1,
      previous: () => selectedIdx = selectedIdx === 0 ? (photos == null ? void 0 : photos.length) ?? 0 - 1 : selectedIdx - 1
    },
    {},
    {}
  )}` : ``}</div>
</div>`;
});
export {
  Page as default
};
