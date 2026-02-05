<template>
  <div class="glass tcard">
    <div class="tcard__head">
      <div>
        <div class="tcard__title">{{ title }}</div>
        <div class="tcard__sub">
          <span class="badge badge--accent">{{ company }}</span>
          <span class="soft">{{ location }}</span>
        </div>
      </div>

      <div class="tcard__time">
        <span class="soft">{{ time }}</span>
      </div>
    </div>

    <div class="tcard__body">
      <ul class="tcard__list">
        <li v-for="(b, i) in bullets" :key="i">
          <span class="tcard__dot"></span>
          <span class="tcard__text">{{ b }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  company: string;
  time: string;
  location: string;
  bullets: string[];
}>();
</script>

<style scoped>
.tcard {
  padding: 16px;
}
.tcard__head {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.tcard__title {
  font-size: 16px;
  font-weight: 750;
  letter-spacing: 0.2px;
  color: rgba(248, 250, 252, 0.92);
}
.tcard__sub {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}
.tcard__time {
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  font-size: 12px;
}
.tcard__body {
  margin-top: 12px;
}
.tcard__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}
.tcard__list li {
  display: grid;
  grid-template-columns: 12px 1fr;
  gap: 10px;
  align-items: flex-start;
}
.tcard__dot {
  width: 10px;
  height: 10px;
  margin-top: 6px;
  border-radius: 999px;
  background: rgba(85, 214, 255, 0.35);
  box-shadow: 0 0 0 4px rgba(85, 214, 255, 0.1);
}
.tcard__text {
  color: rgba(248, 250, 252, 0.74);
  line-height: 1.6;
}
</style>
