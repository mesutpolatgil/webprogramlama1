<template>
  <div class="product-card">
    <!-- Hızlı İncele için image-box'a tıklama olayı eklendi -->
    <div class="image-box" @click="$emit('quick-view', product)">
      <img :src="product.image" :alt="product.name" loading="lazy" />
      <span class="category-badge">{{ product.category }}</span>
      <div class="quick-view-overlay">
        <span>🔍 Hızlı İncele</span>
      </div>
    </div>
    
    <div class="info-box">
      <h3 class="title">{{ product.name }}</h3>
      <div class="rating">
        <span class="stars">★★★★★</span>
        <span class="review-count">({{ product.rating }})</span>
      </div>
      <p class="desc">{{ product.description }}</p>
      
      <div class="bottom-bar">
        <div class="price-box">
          <span class="currency">₺</span>
          <span class="price">{{ product.price.toLocaleString('tr-TR') }}</span>
        </div>
        <button class="add-btn" @click="$emit('add-to-cart', product)">
          Sepete Ekle
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true }
})
// quick-view emit'i eklendi
defineEmits(['add-to-cart', 'quick-view'])
</script>

<style scoped>
.product-card {
  background: var(--card-bg);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
}
.product-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1); border-color: var(--primary); }

.image-box { position: relative; height: 220px; overflow: hidden; background: #f8f9fa; cursor: pointer; }
.image-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.product-card:hover .image-box img { transform: scale(1.08); }

.category-badge { position: absolute; top: 12px; left: 12px; background: rgba(17, 24, 39, 0.85); color: #ffffff; padding: 5px 12px; border-radius: 8px; font-size: 0.75rem; font-weight: 600; z-index: 2; backdrop-filter: blur(4px); }

/* YENİ: Resim üzerine gelince çıkan Hızlı İncele yazısı */
.quick-view-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.4); display: flex; justify-content: center; align-items: center; opacity: 0; transition: opacity 0.3s; z-index: 1; backdrop-filter: blur(2px); }
.quick-view-overlay span { background: white; color: #111827; padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem; transform: translateY(15px); transition: all 0.3s; }
.image-box:hover .quick-view-overlay { opacity: 1; }
.image-box:hover .quick-view-overlay span { transform: translateY(0); }

.info-box { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; }
.title { margin: 0 0 8px 0; font-size: 1.15rem; color: var(--text-main); font-weight: 700; }
.rating { display: flex; align-items: center; gap: 5px; margin-bottom: 12px; }
.stars { color: #fbbf24; letter-spacing: 2px; font-size: 0.9rem; }
.review-count { color: var(--text-muted); font-size: 0.85rem; font-weight: 500; }
.desc { font-size: 0.9rem; color: var(--text-muted); margin-bottom: 25px; line-height: 1.5; flex-grow: 1; }

.bottom-bar { display: flex; justify-content: space-between; align-items: center; margin-top: auto; }
.price-box { display: flex; align-items: flex-start; gap: 2px; color: var(--text-main); }
.currency { font-size: 0.9rem; font-weight: 600; margin-top: 2px; }
.price { font-weight: 800; font-size: 1.4rem; letter-spacing: -0.5px; }
.add-btn { background-color: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; cursor: pointer; transition: 0.2s; }
.add-btn:hover { background-color: var(--primary-hover); }
</style>