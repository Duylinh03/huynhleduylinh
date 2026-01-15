import { products } from "../../data/products";

export default defineEventHandler((event) => {
  const { slug } = getRouterParams(event);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    throw createError({ statusCode: 404, statusMessage: "Product not found" });
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return { product, related };
});
