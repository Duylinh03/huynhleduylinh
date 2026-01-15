<template>
  <NuxtLink
    :to="`/products/${product.slug}`"
    class="card"
    style="display: block"
  >
    <img
      :src="product.image"
      :alt="product.name"
      style="width: 100%; height: 190px; object-fit: cover"
    />
    <div style="padding: 12px">
      <div class="row" style="justify-content: space-between">
        <span class="badge">{{ product.category }}</span>
        <span class="muted" v-if="product.rating">⭐ {{ product.rating }}</span>
      </div>

      <h3 style="margin: 10px 0 6px">{{ product.name }}</h3>
      <p class="muted" style="margin: 0 0 10px">{{ product.shortDesc }}</p>

      <div class="row" style="justify-content: space-between">
        <strong>{{ formatPrice(product.price) }}</strong>
        <span class="muted">View →</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product } from "../../server/data/products";

defineProps<{ product: Product }>();

const formatPrice = (v: number) =>
  new Intl.NumberFormat("vi-VN").format(v) + " ₫";
</script>
