export function generateCollectionJsonLd(
  title: string,
  items: { url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: title,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.url,
    })),
  };
}
