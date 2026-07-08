const STRAPI_URL = import.meta.env.PUBLIC_STRAPI_URL;

export async function getHomeSlides(lang: string) {
  const url = `${STRAPI_URL}/api/home-slides?populate=*&locale=${lang}&sort=Order:asc&filters[active][$eq]=true`;

  const response = await fetch(url);

  if (!response.ok) {
    console.error('Strapi URL:', url);
    console.error('Status:', response.status);
    console.error('Response:', await response.text());
    throw new Error('Error fetching home slides');
  }

  const json = await response.json();

  return json.data.map((item: any) => {
    const desktopImage = item.desktopImage?.url;
    const mobileImage = item.mobileImage?.url;

    return {
      title: item.title,
      subtitle: item.subtitle,
      buttonText: item.buttonText,
      buttonLink: item.buttonLink,
      image: desktopImage ? `${STRAPI_URL}${desktopImage}` : '',
      mobileImage: mobileImage ? `${STRAPI_URL}${mobileImage}` : '',
    };
  });
}