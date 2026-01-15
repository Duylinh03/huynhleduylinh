<template>
  <div class="container">
    <section class="card" style="padding: 18px; margin-bottom: 16px">
      <p class="badge">Shop Linh</p>

      <div class="row" style="margin-top: 12px">
        <NuxtLink to="/products" class="btn">Product</NuxtLink>
      </div>
    </section>

    <section style="margin: 18px 0 10px">
      <div class="row" style="justify-content: space-between">
        <h2 class="h2">Featured</h2>
        <NuxtLink to="/products" class="muted">See all →</NuxtLink>
      </div>
    </section>

    <div v-if="pending" class="muted">Loading...</div>
    <div v-else class="grid grid-4">
      <ProductCard v-for="p in data?.items" :key="p.slug" :product="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "../../server/data/products";

type ListResponse = { total: number; items: Product[] };

const { data, pending } = useFetch<ListResponse>("/api/products", {
  key: "home-featured",
});

useSeoMeta({
  title: "Home | Mini E-Commerce",
  description: "Nuxt 4 mini e-commerce demo: Home, Products, Product Detail.",
});
</script>
