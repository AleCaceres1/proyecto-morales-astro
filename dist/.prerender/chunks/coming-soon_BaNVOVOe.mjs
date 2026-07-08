import { r as __exportAll, t as $$Header } from "./Header_DvFh9L0-.mjs";
import { g as addAttribute, h as renderHead, i as renderComponent, u as renderTemplate, x as createComponent } from "./server_BiIhXm14.mjs";
//#region src/pages/en/coming-soon.astro
var coming_soon_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ComingSoon,
	file: () => $$file,
	url: () => $$url
});
var $$ComingSoon = createComponent(($$result, $$props, $$slots) => {
	const lang = "en";
	return renderTemplate`<html${addAttribute(lang, "lang")} data-astro-cid-zsisctr4><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Coming Soon | Morales Auto Brokers</title>${renderHead($$result)}</head><body data-astro-cid-zsisctr4>${renderComponent($$result, "Header", $$Header, {
		"lang": lang,
		"data-astro-cid-zsisctr4": true
	})}<main class="coming-soon-page" data-astro-cid-zsisctr4><section class="coming-soon" data-astro-cid-zsisctr4><div class="container coming-soon-content" data-astro-cid-zsisctr4><p class="eyebrow" data-astro-cid-zsisctr4>Future improvement</p><h1 data-astro-cid-zsisctr4>We are working on it</h1><p data-astro-cid-zsisctr4>This section is currently under development. Soon you will find more information here.</p><a href="/en" class="coming-soon-button" data-astro-cid-zsisctr4>Back to Home</a></div></section></main></body></html>`;
}, "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/pages/en/coming-soon.astro", void 0);
var $$file = "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/pages/en/coming-soon.astro";
var $$url = "/en/coming-soon";
//#endregion
//#region \0virtual:astro:page:src/pages/en/coming-soon@_@astro
var page = () => coming_soon_exports;
//#endregion
export { page };
