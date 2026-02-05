<template>
  <div class="glass skill">
    <div class="soft skill__meta">{{ title }}</div>

    <div class="skill__head">
      <h3 class="skill__title">What I use</h3>
      <span class="skill__hint">{{ items.length }} items</span>
    </div>

    <div class="skill__grid">
      <div v-for="(it, i) in items" :key="i" class="chip">
        <!-- Devicon first -->
        <i
          v-if="getDeviconClass(it)"
          class="chip__icon"
          :class="getDeviconClass(it)"
        ></i>

        <!-- SimpleIcons fallback -->
        <span
          v-else-if="getSimpleIconSlug(it)"
          class="chip__svg"
          aria-hidden="true"
        >
          <img
            :src="`https://cdn.simpleicons.org/${getSimpleIconSlug(it)}/ffffff`"
            :alt="it"
            loading="lazy"
          />
        </span>

        <!-- Fallback -->
        <span v-else class="chip__dot" aria-hidden="true"></span>

        <span class="chip__text">{{ it }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; items: string[] }>();

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replaceAll(".", "")
    .replaceAll("/", " ")
    .replaceAll("-", " ")
    .trim();

/** Devicon map (when available) */
const DEVICON_MAP: Record<string, string> = {
  javascript: "devicon-javascript-plain colored",
  typescript: "devicon-typescript-plain colored",
  react: "devicon-react-original colored",
  nextjs: "devicon-nextjs-original",
  vue: "devicon-vuejs-plain colored",
  nuxt: "devicon-nuxtjs-plain colored",
  html: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  scss: "devicon-sass-original colored",
  sass: "devicon-sass-original colored",
  tailwind: "devicon-tailwindcss-plain colored",
  redux: "devicon-redux-original colored",
  nodejs: "devicon-nodejs-plain colored",
  mongodb: "devicon-mongodb-plain colored",
  supabase: "devicon-supabase-plain colored",
  git: "devicon-git-plain colored",
  figma: "devicon-figma-plain colored",
};

const getDeviconClass = (label: string) => {
  const n = normalize(label);

  if (n.includes("next")) return DEVICON_MAP.nextjs;
  if (n.includes("react")) return DEVICON_MAP.react;
  if (n.includes("tailwind")) return DEVICON_MAP.tailwind;
  if (n.includes("typescript")) return DEVICON_MAP.typescript;
  if (n.includes("javascript")) return DEVICON_MAP.javascript;
  if (n.includes("node")) return DEVICON_MAP.nodejs;
  if (n.includes("mongo")) return DEVICON_MAP.mongodb;
  if (n.includes("supabase")) return DEVICON_MAP.supabase;
  if (n.includes("figma")) return DEVICON_MAP.figma;
  if (n === "html5") return DEVICON_MAP.html;
  if (n === "css3") return DEVICON_MAP.css;

  return DEVICON_MAP[n] || "";
};

/**
 * SimpleIcons slug map (covers missing icons)
 * Uses https://cdn.simpleicons.org/<slug>/<color>
 */
const SIMPLEICON_MAP: Record<string, string> = {
  "tanstack query": "reactquery",
  "react query": "reactquery",
  swr: "swr",

  "shadcn/ui": "shadcnui",
  shadcn: "shadcnui",
  antd: "antdesign",
  "ant design": "antdesign",
  i18n: "i18next",
  i18next: "i18next",

  "vs code": "visualstudiocode",
  jira: "jira",
  trello: "trello",
  jwt: "jsonwebtokens",
  "json web token": "jsonwebtokens",
};

const getSimpleIconSlug = (label: string) => {
  const n = normalize(label);

  // quick heuristics
  if (n.includes("tanstack")) return SIMPLEICON_MAP["tanstack query"];
  if (n.includes("react query")) return SIMPLEICON_MAP["react query"];
  if (n === "swr") return SIMPLEICON_MAP.swr;
  if (n.includes("zustand")) return SIMPLEICON_MAP.zustand;
  if (n.includes("shadcn")) return SIMPLEICON_MAP["shadcn/ui"];
  if (n.includes("antd") || n.includes("ant design"))
    return SIMPLEICON_MAP.antd;
  if (n === "i18n" || n.includes("i18next")) return SIMPLEICON_MAP.i18n;
  if (n.includes("vscode") || n.includes("vs code"))
    return SIMPLEICON_MAP.vscode;
  if (n.includes("jira")) return SIMPLEICON_MAP.jira;
  if (n.includes("trello")) return SIMPLEICON_MAP.trello;
  if (n === "jwt") return SIMPLEICON_MAP.jwt;

  return SIMPLEICON_MAP[n] || "";
};
</script>

<style scoped>
.skill {
  padding: 14px;
}

.skill__meta {
  font-size: 12px;
}

.skill__head {
  margin-top: 8px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}

.skill__title {
  margin: 0;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: rgba(229, 244, 255, 0.92);
}

.skill__hint {
  font-size: 12px;
  color: rgba(248, 250, 252, 0.58);
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.skill__grid {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

/* WOW chips */
.chip {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);

  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;
}

.chip::after {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: 999px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.18s ease;
  background: radial-gradient(
    260px 120px at 30% 10%,
    rgba(85, 214, 255, 0.18),
    transparent 60%
  );
}

.chip:hover {
  transform: translateY(-1px);
  border-color: rgba(85, 214, 255, 0.22);
  background: rgba(85, 214, 255, 0.05);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
}
.chip:hover::after {
  opacity: 1;
}

.chip__icon {
  font-size: 18px;
  filter: drop-shadow(0 0 10px rgba(85, 214, 255, 0.12));
}

.chip__svg {
  width: 18px;
  height: 18px;
  display: inline-grid;
  place-items: center;
}
.chip__svg img {
  width: 18px;
  height: 18px;
  opacity: 0.92;
}

.chip__dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.35);
}

.chip__text {
  font-size: 13px;
  font-weight: 650;
  color: rgba(248, 250, 252, 0.84);
}
</style>
