<template>
  <div class="app-wrapper">
    <nav class="navbar">
      <div class="nav-content">
        <div class="brand" @click="$router.push('/')" style="cursor: pointer;">
          <span class="logo-icon">⚡</span>
          <h1 class="logo-text">W-Store Tech</h1>
        </div>
        
        <div class="nav-links">
          <!-- Router-Link, sayfayı yenilemeden geçişleri sağlar -->
          <router-link to="/" active-class="active">Mağaza</router-link>
          <router-link to="/hakkimizda" active-class="active">Hakkımızda</router-link>
        </div>
        
        <div class="nav-user">
          <button class="theme-toggle" @click="toggleTheme">
            {{ isDarkMode ? '☀️ Gündüz' : '🌙 Gece' }}
          </button>
        </div>
      </div>
    </nav>

    <!-- SAYFALARIN İÇİNDE AÇILACAĞI ALAN BURASI -->
    <main class="container">
      <!-- Geçişlere animasyon ekledik (Opsiyonel ama şık durur) -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)    

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('wStoreTheme', isDarkMode.value ? 'dark' : 'light')
  updateBodyTheme()
}

const updateBodyTheme = () => {
  if (isDarkMode.value) { document.body.classList.add('dark-theme') } 
  else { document.body.classList.remove('dark-theme') }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('wStoreTheme')
  if (savedTheme === 'dark') isDarkMode.value = true
  updateBodyTheme()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* Global Değişkenler */
:root {
  --bg-color: #f9fafb; --nav-bg: #ffffff; --text-main: #111827; --text-muted: #4b5563;
  --border-color: #e5e7eb; --card-bg: #ffffff; --primary: #2563eb; --primary-hover: #1d4ed8;
  --btn-bg: #f3f4f6; --btn-hover: #e5e7eb;
}

body.dark-theme {
  --bg-color: #0f172a; --nav-bg: #1e293b; --text-main: #f8fafc; --text-muted: #94a3b8;
  --border-color: #334155; --card-bg: #1e293b; --btn-bg: #334155; --btn-hover: #475569;
}

body { margin: 0; background-color: var(--bg-color); font-family: 'Inter', sans-serif; color: var(--text-main); transition: 0.3s ease; }
.app-wrapper { min-height: 100vh; }

.navbar { background: var(--nav-bg); border-bottom: 1px solid var(--border-color); padding: 15px 0; position: sticky; top: 0; z-index: 100; transition: all 0.3s; }
.nav-content { max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 24px; }
.brand { display: flex; align-items: center; gap: 8px; }
.logo-icon { font-size: 1.8rem; }
.logo-text { margin: 0; font-size: 1.4rem; font-weight: 800; letter-spacing: -0.5px; }

.nav-links { display: flex; gap: 30px; }
.nav-links a { text-decoration: none; color: var(--text-muted); font-weight: 600; font-size: 1.05rem; padding: 5px 10px; transition: 0.2s; border-bottom: 2px solid transparent;}
.nav-links a:hover { color: var(--primary); }
.nav-links a.active { color: var(--primary); border-bottom-color: var(--primary); }

.theme-toggle { background: transparent; border: 1px solid var(--border-color); color: var(--text-main); padding: 8px 15px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: 0.2s; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }

/* Router Sayfa Geçiş Animasyonu */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>