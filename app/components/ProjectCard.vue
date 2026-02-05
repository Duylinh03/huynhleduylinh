<template>
  <article class="glass pcard">
    <div class="pcard__top">
      <div>
        <h3 class="pcard__title">{{ project.name || project.title }}</h3>
        <p class="pcard__desc">
          {{
            project.description ||
            project.shortDesc ||
            "Production web project."
          }}
        </p>
      </div>

      <div class="pcard__cta">
        <a
          v-if="project.deploy || project.live"
          class="btn btn--primary"
          :href="project.deploy || project.live"
          target="_blank"
        >
          <span class="uiIcon">↗</span> Live
        </a>

        <a
          v-if="project.github"
          class="btn btn--ghost"
          :href="project.github"
          target="_blank"
        >
          <span class="uiIcon">↗</span> GitHub
        </a>
      </div>
    </div>

    <!-- meta row -->
    <div class="pcard__meta">
      <span v-if="project.teamSize" class="badge"
        >Team: {{ project.teamSize }}</span
      >
      <span v-if="project.role" class="badge badge--accent">{{
        project.role
      }}</span>
      <span v-if="project.year" class="badge">{{ project.year }}</span>
    </div>

    <!-- stack icons -->
    <div v-if="stackItems.length" class="pcard__stack">
      <div class="soft" style="font-size: 12px">Tech</div>
      <div class="pcard__stackRow">
        <span v-for="(s, i) in stackItems" :key="i" class="stackPill">
          <i
            v-if="getDeviconClass(s)"
            :class="getDeviconClass(s)"
            class="stackIcon"
          ></i>
          <span class="stackText">{{ s }}</span>
        </span>
      </div>
    </div>

    <!-- highlights -->
    <ul v-if="highlights.length" class="pcard__list">
      <li v-for="(h, i) in highlights" :key="i">
        <span class="check"></span>
        <span>{{ h }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ project: any }>();

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replaceAll(".", "")
    .replaceAll("/", " ")
    .replaceAll("-", " ")
    .trim();

const ICON_MAP: Record<string, string> = {
  react: "devicon-react-original colored",
  nextjs: "devicon-nextjs-original",
  typescript: "devicon-typescript-plain colored",
  javascript: "devicon-javascript-plain colored",
  tailwind: "devicon-tailwindcss-plain colored",
  nodejs: "devicon-nodejs-plain colored",
  mongodb: "devicon-mongodb-plain colored",
  supabase: "devicon-supabase-plain colored",
  git: "devicon-git-plain colored",
};

const getDeviconClass = (label: string) => {
  const n = normalize(label);
  if (n.includes("next")) return ICON_MAP.nextjs;
  if (n.includes("react")) return ICON_MAP.react;
  if (n.includes("typescript")) return ICON_MAP.typescript;
  if (n.includes("javascript")) return ICON_MAP.javascript;
  if (n.includes("tailwind")) return ICON_MAP.tailwind;
  if (n.includes("node")) return ICON_MAP.nodejs;
  if (n.includes("mongo")) return ICON_MAP.mongodb;
  if (n.includes("supabase")) return ICON_MAP.supabase;
  if (n.includes("git")) return ICON_MAP.git;
  return ICON_MAP[n] || "";
};

const stackItems = computed<string[]>(() => {
  const s =
    props.project?.stack ||
    props.project?.techStack ||
    props.project?.tech ||
    [];
  if (Array.isArray(s)) return s;
  if (typeof s === "string")
    return s
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
  return [];
});

const highlights = computed<string[]>(() => {
  const h =
    props.project?.highlights ||
    props.project?.bullets ||
    props.project?.responsibilities ||
    [];
  return Array.isArray(h) ? h.slice(0, 5) : [];
});
</script>

<style scoped>
.pcard {
  padding: 16px;
}
.pcard__top {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.pcard__title {
  margin: 0;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.2px;
  color: rgba(248, 250, 252, 0.92);
}
.pcard__desc {
  margin-top: 8px;
  color: rgba(248, 250, 252, 0.7);
  line-height: 1.6;
  max-width: 70ch;
}
.pcard__cta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.pcard__meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.pcard__stack {
  margin-top: 14px;
}
.pcard__stackRow {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.stackPill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}
.stackIcon {
  font-size: 16px;
}
.stackText {
  font-size: 12.5px;
  font-weight: 650;
  color: rgba(248, 250, 252, 0.82);
}

.pcard__list {
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 10px;
}
.pcard__list li {
  display: grid;
  grid-template-columns: 16px 1fr;
  gap: 10px;
  align-items: start;
  color: rgba(248, 250, 252, 0.74);
  line-height: 1.6;
}
.check {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  border-radius: 3px;
  background: rgba(34, 197, 94, 0.9);
  box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.14);
}
</style>
