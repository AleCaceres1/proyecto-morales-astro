import { b as createAstro, g as addAttribute, m as maybeRenderHead, t as renderScript, u as renderTemplate, x as createComponent } from "./server_BiIhXm14.mjs";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region src/i18n/ui.ts
var ui = {
	en: {
		"nav.home": "Home",
		"nav.services": "Services",
		"nav.contact": "Contact",
		"nav.language.en": "EN",
		"nav.language.es": "ES",
		"home.title": "Home",
		"services.title": "Services",
		"contact.title": "Contact"
	},
	es: {
		"nav.home": "Inicio",
		"nav.services": "Servicios",
		"nav.contact": "Contacto",
		"nav.language.en": "EN",
		"nav.language.es": "ES",
		"home.title": "Inicio",
		"services.title": "Servicios",
		"contact.title": "Contacto"
	}
};
//#endregion
//#region src/i18n/utils.ts
function useTranslations(lang) {
	return function t(key) {
		return ui[lang][key] || ui["en"][key];
	};
}
//#endregion
//#region src/components/Header.astro
createAstro("https://astro.build");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const { lang = "en" } = Astro.props;
	const t = useTranslations(lang);
	const navItems = [
		{
			label: t("nav.home"),
			href: `/${lang}/#home`
		},
		{
			label: t("nav.services"),
			href: `/${lang}/#services`
		},
		{
			label: t("nav.contact"),
			href: `/${lang}/#disclaimer`
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<header class="site-header" data-astro-cid-nen7h5rs><div class="header-container" data-astro-cid-nen7h5rs><a${addAttribute(`/${lang}`, "href")} class="logo-link" aria-label="Morales Auto Brokers Home" data-astro-cid-nen7h5rs><img src="/images/logo.png" alt="Morales Auto Brokers" class="logo" data-astro-cid-nen7h5rs></a><nav class="desktop-nav" aria-label="Main navigation" data-astro-cid-nen7h5rs>${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-nen7h5rs>${item.label}</a>`)}</nav><div class="desktop-language" data-astro-cid-nen7h5rs><a${addAttribute(`language ${lang === "en" ? "active" : ""}`, "class")} href="/en" data-astro-cid-nen7h5rs>EN</a><span data-astro-cid-nen7h5rs>|</span><a${addAttribute(`language ${lang === "es" ? "active" : ""}`, "class")} href="/es" data-astro-cid-nen7h5rs>ES</a></div><button class="menu-toggle" type="button" aria-label="Open menu" data-astro-cid-nen7h5rs><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span><span data-astro-cid-nen7h5rs></span></button></div><div class="mobile-menu" id="mobileMenu" data-astro-cid-nen7h5rs><nav aria-label="Mobile navigation" data-astro-cid-nen7h5rs>${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} data-astro-cid-nen7h5rs>${item.label}</a>`)}</nav><div class="mobile-language" data-astro-cid-nen7h5rs><a${addAttribute(`language ${lang === "en" ? "active" : ""}`, "class")} href="/en" data-astro-cid-nen7h5rs>EN</a><span data-astro-cid-nen7h5rs>|</span><a${addAttribute(`language ${lang === "es" ? "active" : ""}`, "class")} href="/es" data-astro-cid-nen7h5rs>ES</a></div></div></header>${renderScript($$result, "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/man20/Desktop/ProyectoWeb_MoralesAutoBrokers/proyecto-morales-astro/src/components/Header.astro", void 0);
//#endregion
export { useTranslations as n, __exportAll as r, $$Header as t };
