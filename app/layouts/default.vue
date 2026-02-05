<template>
  <div>
    <header class="nav">
      <div class="container nav__inner">
        <NuxtLink to="/" class="brand">
          <span class="brand__dot"></span>
          <span class="brand__name">Duy Linh</span>
          <span class="brand__tag">Portfolio</span>
        </NuxtLink>

        <nav class="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </nav>

        <div class="nav__cta">
          <a class="btn btn--gold" href="#contact">Hire me</a>
        </div>
      </div>
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
useSpotlight();
</script>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  background: linear-gradient(180deg, rgba(7, 7, 8, 0.72), rgba(7, 7, 8, 0.35));
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.brand__dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: rgba(241, 210, 138, 0.92);
  box-shadow: 0 0 0 4px rgba(215, 179, 106, 0.12);
}
.brand__name {
  font-weight: 750;
  letter-spacing: 0.2px;
}
.brand__tag {
  font-size: 12px;
  color: rgba(246, 246, 247, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 4px 8px;
  border-radius: 999px;
  background: rgba(10, 10, 12, 0.35);
}
.nav__links {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.nav__links a {
  color: rgba(246, 246, 247, 0.74);
  font-size: 13px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid transparent;
}
.nav__links a:hover {
  border-color: rgba(215, 179, 106, 0.22);
  background: rgba(215, 179, 106, 0.08);
  color: rgba(241, 210, 138, 0.92);
}
@media (max-width: 920px) {
  .nav__links {
    display: none;
  }
}
</style>
