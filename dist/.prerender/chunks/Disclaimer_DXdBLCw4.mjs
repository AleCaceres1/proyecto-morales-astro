import "./Header_DvFh9L0-.mjs";
import { a as Fragment, b as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, t as renderScript, u as renderTemplate, x as createComponent } from "./server_BiIhXm14.mjs";
//#region src/components/HomeCarousel.astro
createAstro("https://astro.build");
var $$HomeCarousel = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$HomeCarousel;
	const { slides = [] } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section id="home" class="hero-carousel" data-astro-cid-a5gaoytn>${slides.length > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="hero-track" data-astro-cid-a5gaoytn>${slides.map((slide, index) => renderTemplate`<article${addAttribute(`hero-slide ${index === 0 ? "active" : ""}`, "class")} data-astro-cid-a5gaoytn><picture data-astro-cid-a5gaoytn>${slide.mobileImage && renderTemplate`<source media="(max-width: 768px)"${addAttribute(slide.mobileImage, "srcset")} data-astro-cid-a5gaoytn>`}<img${addAttribute(slide.image, "src")}${addAttribute(slide.title, "alt")} class="hero-image" data-astro-cid-a5gaoytn></picture><div class="hero-overlay" data-astro-cid-a5gaoytn></div><div class="hero-content" data-astro-cid-a5gaoytn><h1 data-astro-cid-a5gaoytn>${slide.title}</h1><p data-astro-cid-a5gaoytn>${slide.subtitle}</p><a${addAttribute(slide.buttonLink, "href")} class="hero-button" data-astro-cid-a5gaoytn>${slide.buttonText}</a></div></article>`)}</div><button class="hero-arrow hero-arrow-left" type="button" aria-label="Previous slide" data-astro-cid-a5gaoytn>&#10094;</button><button class="hero-arrow hero-arrow-right" type="button" aria-label="Next slide" data-astro-cid-a5gaoytn>&#10095;</button><div class="hero-dots" data-astro-cid-a5gaoytn>${slides.map((_, index) => renderTemplate`<button type="button"${addAttribute(`hero-dot ${index === 0 ? "active" : ""}`, "class")}${addAttribute(`Go to slide ${index + 1}`, "aria-label")} data-astro-cid-a5gaoytn></button>`)}</div>` })}` : renderTemplate`<div class="hero-empty" data-astro-cid-a5gaoytn><h1 data-astro-cid-a5gaoytn>Morales Auto Brokers</h1><p data-astro-cid-a5gaoytn>Hero carousel content is not available yet.</p></div>`}</section>${renderScript($$result, "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/components/HomeCarousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/components/HomeCarousel.astro", void 0);
//#endregion
//#region src/lib/strapi.ts
var STRAPI_URL = "http://localhost:1337";
async function getHomeSlides(lang) {
	const url = `${STRAPI_URL}/api/home-slides?populate=*&locale=${lang}&sort=Order:asc&filters[active][$eq]=true`;
	const response = await fetch(url);
	if (!response.ok) {
		console.error("Strapi URL:", url);
		console.error("Status:", response.status);
		console.error("Response:", await response.text());
		throw new Error("Error fetching home slides");
	}
	return (await response.json()).data.map((item) => {
		const desktopImage = item.desktopImage?.url;
		const mobileImage = item.mobileImage?.url;
		return {
			title: item.title,
			subtitle: item.subtitle,
			buttonText: item.buttonText,
			buttonLink: item.buttonLink,
			image: desktopImage ? `${STRAPI_URL}${desktopImage}` : "",
			mobileImage: mobileImage ? `${STRAPI_URL}${mobileImage}` : ""
		};
	});
}
//#endregion
//#region src/components/Services.astro
createAstro("https://astro.build");
var $$Services = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Services;
	const { lang = "en" } = Astro.props;
	const baseUrl = `/${lang}`;
	const services = [
		{
			title: lang === "es" ? "Subastas" : "Bids",
			description: lang === "es" ? "Encuentra el vehículo ideal para ti." : "Find the ideal vehicle for you.",
			href: `${baseUrl}/coming-soon`
		},
		{
			title: lang === "es" ? "Documentacion (Solo Massachusetts)" : "Documentation (Only Massachusetts)",
			description: lang === "es" ? "Documentación relevante el estado de Massachusetts." : "Relevant documentation from the state of Massachusetts.",
			href: `${baseUrl}/coming-soon`
		},
		{
			title: lang === "es" ? "Guías" : "Guides",
			description: lang === "es" ? "Documentación en forma de guías para procesos aduaneros." : "Documentation in the form of guides for customs procedures.",
			href: `${baseUrl}/coming-soon`
		},
		{
			title: lang === "es" ? "Tutoriales" : "Tutorials",
			description: lang === "es" ? "Tutorias Presenciales/Virtuales." : "In-Person/Online Tutoring.",
			href: `${baseUrl}/coming-soon`
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section id="services" class="services-section section" data-astro-cid-lesv7jgp><div class="container" data-astro-cid-lesv7jgp><div class="services-header" data-astro-cid-lesv7jgp><p data-astro-cid-lesv7jgp>${lang === "es" ? "Nuestros servicios" : "Our Services"}</p><h2 data-astro-cid-lesv7jgp>${lang === "es" ? "Soluciones para encontrar tu próximo vehículo" : "Solutions to find your next vehicle"}</h2></div><div class="services-grid" data-astro-cid-lesv7jgp>${services.map((service) => renderTemplate`<a${addAttribute(service.href, "href")} class="service-card" data-astro-cid-lesv7jgp><span class="service-icon" data-astro-cid-lesv7jgp>↗</span><h3 data-astro-cid-lesv7jgp>${service.title}</h3><p data-astro-cid-lesv7jgp>${service.description}</p></a>`)}</div></div></section>`;
}, "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/components/Services.astro", void 0);
//#endregion
//#region src/components/Footer.astro
createAstro("https://astro.build");
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Footer;
	const { lang = "en" } = Astro.props;
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="site-footer" data-astro-cid-jo6i4kqk><div class="container footer-content" data-astro-cid-jo6i4kqk><p data-astro-cid-jo6i4kqk>Morales Auto Brokers © ${currentYear}.${lang === "es" ? " Todos los derechos reservados." : " All Rights Reserved."}</p></div></footer>`;
}, "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/Disclaimer.astro
createAstro("https://astro.build");
var $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Disclaimer;
	const { lang = "en" } = Astro.props;
	const title = lang === "es" ? "Aviso legal" : "Disclaimer";
	const description = lang === "es" ? "Información importante sobre nuestros servicios y procesos." : "Important information about our services and processes.";
	const href = `/${lang}/coming-soon`;
	return renderTemplate`${maybeRenderHead($$result)}<section id="disclaimer" class="disclaimer-section section" data-astro-cid-u2lqorrs><div class="container" data-astro-cid-u2lqorrs><a${addAttribute(href, "href")} class="disclaimer-card" data-astro-cid-u2lqorrs><div class="disclaimer-image" data-astro-cid-u2lqorrs><img src="images/disclaimer/disclaimer.jpg"${addAttribute(title, "alt")} data-astro-cid-u2lqorrs></div><div class="disclaimer-content" data-astro-cid-u2lqorrs><span class="disclaimer-eyebrow" data-astro-cid-u2lqorrs>${lang === "es" ? "Información" : "Information"}</span><h2 data-astro-cid-u2lqorrs>${title}</h2><p data-astro-cid-u2lqorrs>${description}</p></div></a></div></section>`;
}, "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/components/Disclaimer.astro", void 0);
//#endregion
export { $$HomeCarousel as a, getHomeSlides as i, $$Footer as n, $$Services as r, $$Disclaimer as t };
