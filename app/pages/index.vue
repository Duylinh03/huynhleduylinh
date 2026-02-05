<template>
  <!-- Topbar -->
  <div class="topbar">
    <div class="topbar__inner">
      <div class="row" style="gap: 10px">
        <span class="badge badge--accent">{{ p.name }}</span>
        <span class="soft">{{ p.role }}</span>
      </div>

      <nav class="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </div>

  <div class="container">
    <!-- HERO -->
    <section class="hero">
      <div class="hero__grid">
        <div class="glass heroCard">
          <div class="heroHead">
            <span class="kicker">✦ Frontend Developer</span>
            <div class="status">
              <span class="dot"></span>
              Open for roles
            </div>
          </div>

          <h1 class="h1">
            {{ p.name }}
            <span class="title-accent">{{ p.role }}</span>
          </h1>

          <p class="lead">{{ p.summary }}</p>

          <div class="heroMeta">
            <span class="badge">{{ p.location }}</span>
            <span class="soft">{{ p.dob }}</span>
          </div>

          <div class="cta">
            <a class="btn btn--primary" href="#projects">View Projects</a>
            <a class="btn btn--ghost" href="#contact">Contact</a>
          </div>

          <div class="brandbar">
            <span class="brandchip">React / Next.js</span>
            <span class="brandchip">Nuxt 4</span>
            <span class="brandchip">Performance</span>
            <span class="brandchip">SEO</span>
          </div>
        </div>

        <div class="glass sideCard">
          <div class="sideTop">
            <span class="badge badge--accent">Snapshot</span>
            <span class="soft">Now</span>
          </div>

          <div class="stats">
            <div class="stat"><b>2</b><span>Companies</span></div>
            <div class="stat"><b>2</b><span>Production projects</span></div>
            <div class="stat"><b>SEO</b><span>SSR / SSG / ISR</span></div>
          </div>

          <div class="glass coreCard">
            <div class="soft coreLabel">Core strengths</div>
            <div class="row coreBadges">
              <span class="badge">Clean UI</span>
              <span class="badge">Reusable components</span>
              <span class="badge">API integration</span>
              <span class="badge">Optimization</span>
            </div>
          </div>

          <div class="codebox">
            <code>
              const dev = { name: "Huynh Le Duy Linh", role: "Frontend
              Developer", stack: ["React", "Next.js", "TypeScript"], focus:
              "Performance + Clean UI" }
            </code>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section">
      <div class="section__head">
        <div>
          <h2 class="section__title">About</h2>
          <p class="section__sub">Short, clear, straight to the point.</p>
        </div>
      </div>

      <div class="glass aboutCard">
        <p class="muted">{{ p.summary }}</p>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section">
      <div class="section__head">
        <div>
          <h2 class="section__title">Skills</h2>
          <p class="section__sub">Stack I use to ship real products.</p>
        </div>
      </div>

      <!-- Featured Tech Stack -->
      <div class="glass techWrap">
        <div class="soft techLabel">Tech Stack</div>
        <div class="tech-grid">
          <div class="tech-item">
            <i class="devicon-react-original colored"></i><span>React</span>
          </div>
          <div class="tech-item">
            <i class="devicon-nextjs-original"></i><span>Next.js</span>
          </div>
          <div class="tech-item">
            <i class="devicon-typescript-plain colored"></i
            ><span>TypeScript</span>
          </div>
          <div class="tech-item">
            <i class="devicon-tailwindcss-plain colored"></i
            ><span>Tailwind</span>
          </div>
          <div class="tech-item">
            <i class="devicon-nodejs-plain colored"></i><span>Node.js</span>
          </div>
          <div class="tech-item">
            <i class="devicon-mongodb-plain colored"></i><span>MongoDB</span>
          </div>
          <div class="tech-item">
            <i class="devicon-git-plain colored"></i><span>Git</span>
          </div>
          <div class="tech-item">
            <i class="devicon-figma-plain colored"></i><span>Figma</span>
          </div>
        </div>
      </div>

      <div class="grid grid-3" style="margin-top: 16px">
        <SkillCard
          title="Programming Languages"
          :items="p.skills.programming"
        />
        <SkillCard title="Frontend" :items="p.skills.frontend" />
        <SkillCard title="Data Fetching & State" :items="p.skills.data" />
        <SkillCard title="Backend Basics" :items="p.skills.backend" />
        <SkillCard title="Tools" :items="p.skills.tools" />

        <div class="glass targetCard">
          <div class="soft" style="font-size: 12px">Target</div>
          <h3 class="cardTitle">Career goals</h3>
          <p class="muted">{{ p.target.shortTerm }}</p>
          <div style="height: 10px"></div>
          <p class="muted">{{ p.target.longTerm }}</p>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="section">
      <div class="section__head">
        <div>
          <h2 class="section__title">Experience</h2>
          <p class="section__sub">What I did, what I improved.</p>
        </div>
      </div>

      <div class="grid" style="gap: 16px">
        <TimelineCard
          v-for="(e, i) in p.experience"
          :key="i"
          :title="e.title"
          :company="e.company"
          :time="e.time"
          :location="e.location"
          :bullets="e.bullets"
        />
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section">
      <div class="section__head">
        <div>
          <h2 class="section__title">Projects</h2>
          <p class="section__sub">Selected works (production).</p>
        </div>
      </div>

      <div class="grid grid-2">
        <ProjectCard v-for="(pr, i) in p.projects" :key="i" :project="pr" />
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education" class="section">
      <div class="section__head">
        <div>
          <h2 class="section__title">Education</h2>
          <p class="section__sub">Background & training.</p>
        </div>
      </div>

      <div class="grid grid-3">
        <div v-for="(ed, i) in p.education" :key="i" class="glass eduCard">
          <div class="badge badge--accent">{{ ed.program }}</div>
          <h3 class="cardTitle">{{ ed.school }}</h3>
          <p class="muted">{{ ed.time }}</p>
          <p class="muted">{{ ed.location }}</p>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section">
      <div class="glass ctaBanner">
        <div>
          <h3 style="margin: 0; font-size: 18px">Let’s work together</h3>
          <p class="muted" style="margin-top: 6px">
            Open for Fresher Frontend roles & freelance web projects.
          </p>
        </div>

        <div class="row">
          <a class="btn btn--primary" :href="`mailto:${p.email}`">
            <span class="uiIcon">✉</span> Email
          </a>
          <a class="btn btn--ghost" :href="`tel:${p.phone}`">
            <span class="uiIcon">☎</span> Call
          </a>
          <a
            v-if="p.github"
            class="btn btn--ghost"
            :href="p.github"
            target="_blank"
          >
            <span class="uiIcon">↗</span> GitHub
          </a>
        </div>
      </div>

      <div class="glass footer">
        <div>{{ p.name }} — {{ p.role }}</div>
        <div class="row" style="gap: 10px">
          <span class="soft">{{ p.phone }}</span>
          <span class="soft">{{ p.email }}</span>
          <span class="soft">{{ p.linkedin }}</span>
          <span class="soft">{{ p.github }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { profile as p } from "../../server/data/profile";

useSeoMeta({
  title: `${p.name} | Portfolio`,
  description: p.summary,
});
</script>

<style scoped>
.heroCard {
  padding: 18px;
}
.sideCard {
  padding: 14px;
}
.heroHead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.heroMeta {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
}
.brandbar {
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.brandchip {
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
  color: rgba(248, 250, 252, 0.7);
  font-size: 12px;
}
.sideTop {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.coreCard {
  margin-top: 12px;
  padding: 14px;
  border-radius: 16px;
}
.coreLabel {
  font-size: 12px;
  margin-bottom: 8px;
}
.coreBadges {
  gap: 8px;
}
.aboutCard {
  padding: 16px;
  line-height: 1.75;
}
.techWrap {
  padding: 14px;
}
.techLabel {
  font-size: 12px;
}
.targetCard {
  padding: 14px;
}
.eduCard {
  padding: 14px;
}
.cardTitle {
  margin: 10px 0 6px;
  font-size: 16px;
  letter-spacing: 0.2px;
}
.uiIcon {
  opacity: 0.9;
}
</style>
