<template>
  <div class="container about-page">
    <h1>🚀 W-Store Tech Hakkında</h1>
    <p>Bu proje, Vue.js Composition API, Vue Router ve LocalStorage teknolojileri kullanılarak modern web standartlarında geliştirilmiş bir E-Ticaret SPA (Single Page Application) prototipidir.</p>
    <div class="tech-stack">
      <h3>Kullanılan Teknolojiler:</h3>
      <ul>
        <li>Vue 3 (Composition API)</li>
        <li>Vue Router 4</li>
        <li>Vite</li>
        <li>Modern CSS (CSS Variables, Flexbox, Grid)</li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.about-page { padding: 40px 20px; background: var(--card-bg); border-radius: 16px; margin-top: 40px; min-height: 60vh; }
h1 { color: var(--primary); margin-bottom: 20px;}
.tech-stack { margin-top: 30px; background: var(--bg-color); padding: 20px; border-radius: 12px; }
.tech-stack ul { line-height: 1.8; font-size: 1.1rem; }
</style>