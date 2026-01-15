<template>
  <div class="container">
    <div
      class="row"
      style="justify-content: space-between; margin-bottom: 12px"
    >
      <div>
        <h1 class="h2" style="font-size: 28px">Products</h1>
      </div>
      <NuxtLink to="/" class="btn">Home</NuxtLink>
    </div>

    <section class="card" style="padding: 12px; margin-bottom: 14px">
      <div class="grid" style="grid-template-columns: 2fr 1fr 1fr; gap: 12px">
        <input
          class="input"
          v-model="searchKeyword"
          placeholder="Search products..."
        />

        <select class="select" v-model="category">
          <option>All</option>
          <option>Mountain</option>
          <option>Beach</option>
          <option>City</option>
          <option>Cultural</option>
        </select>

        <select class="select" v-model="sort">
          <option value="featured">Featured</option>
          <option value="price_asc">Price ↑</option>
          <option value="price_desc">Price ↓</option>
          <option value="name_asc">Name A→Z</option>
        </select>
      </div>
    </section>

    <div class="muted" v-if="pending">Loading...</div>
    <div v-else>
      <p class="muted" style="margin: 0 0 10px">{{ total }} items</p>

      <div class="grid grid-4">
        <ProductCard v-for="p in items" :key="p.slug" :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "../../../server/data/products";

type ListResponse = { total: number; items: Product[] };

const searchKeyword = ref("");
const category = ref<"All" | "Mountain" | "Beach" | "City" | "Cultural">("All");

const sort = ref<"featured" | "price_asc" | "price_desc" | "name_asc">(
  "featured"
);

const debouncedSearchKeyword = ref("");
let debounceTimer: ReturnType<typeof setTimeout> | null = null;

watch(searchKeyword, (newKeyword) => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debouncedSearchKeyword.value = newKeyword;
  }, 250);
});

const fetchKey = computed(
  () =>
    `products:${debouncedSearchKeyword.value}:${category.value}:${sort.value}`
);

const { data, pending } = useFetch<ListResponse>("/api/products", {
  key: fetchKey,
  query: computed(() => ({
    q: debouncedSearchKeyword.value || "",
    category: category.value,
    sort: sort.value,
  })),
});

const items = computed(() => data.value?.items || []);
const total = computed(() => data.value?.total || 0);

useSeoMeta({
  title: "Products | Mini E-Commerce",
  description: "Browse products with search, filter and sort in Nuxt 4.",
});
</script>
