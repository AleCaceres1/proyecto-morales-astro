import { n as useTranslations, r as __exportAll, t as $$Header } from "./Header_DvFh9L0-.mjs";
import { g as addAttribute, h as renderHead, i as renderComponent, u as renderTemplate, x as createComponent } from "./server_BiIhXm14.mjs";
import { a as $$HomeCarousel, i as getHomeSlides, n as $$Footer, r as $$Services, t as $$Disclaimer } from "./Disclaimer_DXdBLCw4.mjs";
//#region src/pages/en/index.astro
var en_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => "/en"
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const lang = "en";
	const slides = await getHomeSlides(lang);
	console.log("Slides en index:", slides);
	useTranslations(lang);
	return renderTemplate`<html${addAttribute(lang, "lang")}><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Morales Auto Brokers</title>${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, { "lang": lang })}<main><section id="home" class="section"><div class="container">${renderComponent($$result, "HomeCarousel", $$HomeCarousel, { "slides": slides })}</div></section><section id="services" class="section"><div class="container">${renderComponent($$result, "Services", $$Services, { "lang": lang })}</div></section><section id="disclaimer" class="section"><div class="container">${renderComponent($$result, "Disclaimer", $$Disclaimer, { "lang": lang })}</div></section>${renderComponent($$result, "Footer", $$Footer, { "lang": lang })}</main></body></html>`;
}, "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/pages/en/index.astro", void 0);
var $$file = "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/pages/en/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/en/index@_@astro
var page = () => en_exports;
//#endregion
export { page };
