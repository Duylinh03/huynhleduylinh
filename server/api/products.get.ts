import { products } from "../data/products";

export default defineEventHandler((event) => {
  const query = getQuery(event);

  const q = (query.q as string | undefined)?.toLowerCase().trim() || "";
  const category = (query.category as string | undefined)?.trim() || "";
  const sort = (query.sort as string | undefined)?.trim() || "featured";

  let result = [...products];

  if (q) {
    result = result.filter((p) =>
      `${p.name} ${p.shortDesc} ${p.category}`.toLowerCase().includes(q)
    );
  }

  if (category && category !== "All") {
    result = result.filter((p) => p.category === category);
  }

  if (sort === "price_asc") result.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") result.sort((a, b) => b.price - a.price);
  if (sort === "name_asc") result.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "featured") {
    result.sort(
      (a, b) => Number(Boolean(b.isFeatured)) - Number(Boolean(a.isFeatured))
    );
  }

  return { total: result.length, items: result };
});
