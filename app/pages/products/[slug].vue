<template>
  <div class="container">
    <div v-if="pending" class="muted">Loading...</div>

    <div v-else-if="error" class="muted">
      Error: {{ error.statusMessage || error.message }}
    </div>

    <div v-else-if="data">
      <div
        class="row"
        style="justify-content: space-between; margin-bottom: 12px"
      >
        <NuxtLink to="/products" class="btn">← Back</NuxtLink>
        <span class="badge">{{ data.product.category }}</span>
      </div>

      <section class="grid" style="grid-template-columns: 1.2fr 1fr; gap: 14px">
        <div class="card">
          <img
            :src="data.product.image"
            :alt="data.product.name"
            style="width: 100%; height: 360px; object-fit: cover"
          />
        </div>

        <div class="card" style="padding: 14px">
          <h1 class="h2" style="font-size: 28px">{{ data.product.name }}</h1>
          <p class="muted" style="margin: 8px 0 12px">
            {{ data.product.shortDesc }}
          </p>

          <div
            class="row"
            style="justify-content: space-between; margin-bottom: 10px"
          >
            <strong style="font-size: 22px">{{
              formatPrice(data.product.price)
            }}</strong>
            <span class="muted" v-if="data.product.rating"
              >⭐ {{ data.product.rating }}</span
            >
          </div>

          <p style="line-height: 1.6; margin: 0 0 14px">
            {{ data.product.description }}
          </p>

          <button class="btn" style="width: 100%">Add to cart (demo)</button>
        </div>
      </section>

      <section style="margin-top: 18px">
        <div
          class="row"
          style="justify-content: space-between; margin-bottom: 10px"
        >
          <h2 class="h2">Related</h2>
          <NuxtLink to="/products" class="muted">See all →</NuxtLink>
        </div>

        <div class="grid grid-4">
          <ProductCard v-for="p in data.related" :key="p.slug" :product="p" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "../../../server/data/products";

type DetailResponse = {
  product: Product & { description: string };
  related: Product[];
};

const route = useRoute();
const slug = computed(() => String(route.params.slug || ""));

const { data, error, pending } = useFetch<DetailResponse>(
  `/api/products/${slug.value}`,
  { key: `product:${slug.value}` }
);

const formatPrice = (v: number) =>
  new Intl.NumberFormat("vi-VN").format(v) + " ₫";

useSeoMeta({
  title: computed(() =>
    data.value
      ? `${data.value.product.name} | Mini E-Commerce`
      : "Product | Mini E-Commerce"
  ),
  description: computed(
    () => data.value?.product.shortDesc || "Product detail"
  ),
});
</script>
