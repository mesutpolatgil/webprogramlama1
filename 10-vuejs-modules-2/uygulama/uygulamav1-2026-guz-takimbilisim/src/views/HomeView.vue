HTML
<template>
  <div class="home-view">
    <div class="hero-banner">
      <div class="hero-content">
        <h2>Teknolojide Sınırları Zorla</h2>
        <p>Sepette <b>VUE20</b> kodunu kullanarak anında %20 indirim kazan!</p>
      </div>
    </div>

    <div class="store-layout">
      <div class="catalog-section">
        <div class="filters-bar">
          <div class="filter-buttons">
            <button :class="{ active: selectedCategory === 'Tümü' }" @click="selectedCategory = 'Tümü'">🔥 Tümü</button>
            <button v-for="cat in categories" :key="cat" :class="{ active: selectedCategory === cat }" @click="selectedCategory = cat">{{ cat }}</button>
          </div>
          <div class="sort-box">
            <select v-model="sortOrder">
              <option value="default">Önerilen Sıralama</option>
              <option value="asc">Fiyat: Düşükten Yükseğe</option>
              <option value="desc">Fiyat: Yüksekten Düşüğe</option>
            </select>
          </div>
        </div>

        <div class="search-box-mobile">
          <input type="text" v-model="searchQuery" placeholder="Katalogda ara..." />
        </div>

        <div v-if="filteredProducts.length === 0" class="no-results">
          <div class="no-results-icon">🔍</div>
          <h3>Aradığınız kriterlere uygun ürün bulunamadı</h3>
          <button @click="clearFilters">Filtreleri Sıfırla</button>
        </div>

        <div class="product-grid" v-else>
          <ProductCard 
            v-for="product in filteredProducts" 
            :key="product.id" 
            :product="product"
            @add-to-cart="handleAddToCart"
            @quick-view="openQuickView"
          />
        </div>
      </div>

      <div class="sidebar-section">
        <!-- YENİ: @checkout olduğunda Vue Router ile /odeme sayfasına gidiyoruz -->
        <Cart 
          :cart-items="cart" 
          @remove-item="handleRemoveFromCart"
          @increase="increaseQuantity"
          @decrease="decreaseQuantity"
          @checkout="goToCheckout"
        />
      </div>
    </div>

    <div v-if="toast.show" class="toast">
      <div class="toast-icon">✓</div>
      <div class="toast-text">{{ toast.message }}</div>
    </div>

    <div v-if="quickViewProduct" class="modal-overlay" @click.self="quickViewProduct = null">
      <div class="modal-content quick-view-content">
        <button class="close-btn" @click="quickViewProduct = null">✖</button>
        <div class="quick-view-grid">
          <div class="quick-view-img">
            <img :src="quickViewProduct.image" :alt="quickViewProduct.name" />
          </div>
          <div class="quick-view-info">
            <span class="qv-category">{{ quickViewProduct.category }}</span>
            <h2>{{ quickViewProduct.name }}</h2>
            <div class="qv-rating">★★★★★ <span>({{ quickViewProduct.rating }})</span></div>
            <p class="qv-desc">{{ quickViewProduct.description }}</p>
            <div class="qv-price">{{ quickViewProduct.price.toLocaleString('tr-TR') }} ₺</div>
            <button class="primary-btn w-100" @click="handleAddToCart(quickViewProduct); quickViewProduct = null">
              Hemen Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// Component yollarında '../components/' kullandık çünkü artık views klasöründeyiz
import ProductCard from '../components/ProductCard.vue'
import Cart from '../components/Cart.vue'

const router = useRouter()

const products = ref([
  { id: 1, name: 'Mekanik Oyuncu Klavyesi', price: 2450, category: 'Oyuncu Ekipmanları', rating: '4.8', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=80', description: 'Cherry MX Red switch, %100 Anti-Ghosting.' },
  { id: 2, name: 'Kablosuz Pro Mouse', price: 1650, category: 'Oyuncu Ekipmanları', rating: '4.9', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80', description: '25K Sensör, 63 gram hafif yapı, gecikmesiz teknoloji.' },
  { id: 15, name: 'Kablosuz Gamepad', price: 1850, category: 'Oyuncu Ekipmanları', rating: '4.7', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=500&q=80', description: 'Haptik geri bildirim, 20 saat pil ömrü ve ergonomik tutuş.' },
  { id: 3, name: '27" 165Hz Oyuncu Monitörü', price: 7800, category: 'Bilgisayar Bileşenleri', rating: '4.7', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=500&q=80', description: '2K IPS Panel, 1ms tepkime süresi.' },
  { id: 11, name: 'Premium Akıllı Telefon', price: 34500, category: 'Mobil & Tablet', rating: '4.9', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80', description: 'OLED ekran, profesyonel 3 lensli kamera sistemi.' },
  { id: 12, name: 'Pro Tablet 11"', price: 18900, category: 'Mobil & Tablet', rating: '4.8', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=80', description: '120Hz ekran, kalem desteği.' },
  { id: 13, name: 'Aynasız Fotoğraf Makinesi', price: 42000, category: 'Görüntü Sistemleri', rating: '4.9', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80', description: '24MP Full Frame sensör, 4K 60fps video kaydı.' },
  { id: 6, name: 'Bluetooth Kulak Üstü Kulaklık', price: 3500, category: 'Ses Sistemleri', rating: '4.8', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80', description: 'Aktif gürültü engelleme (ANC), 40 saat çalma süresi.' },
  { id: 4, name: 'Pro Akıllı Saat', price: 4200, category: 'Giyilebilir Teknoloji', rating: '4.6', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=500&q=80', description: 'EKG, 14 gün pil ömrü ve safir cam.' }
])

const cart = ref([])
const selectedCategory = ref('Tümü')
const searchQuery = ref('')      
const sortOrder = ref('default') 
const quickViewProduct = ref(null)
const toast = ref({ show: false, message: '' })

onMounted(() => {
  const savedCart = localStorage.getItem('wStoreCart')
  if (savedCart) cart.value = JSON.parse(savedCart)
})

watch(cart, (newCart) => {
  localStorage.setItem('wStoreCart', JSON.stringify(newCart))
}, { deep: true })

const categories = computed(() => [...new Set(products.value.map(p => p.category))])

const filteredProducts = computed(() => {
  let result = [...products.value] 
  if (selectedCategory.value !== 'Tümü') result = result.filter(p => p.category === selectedCategory.value)
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query))
  }
  if (sortOrder.value === 'asc') result.sort((a, b) => a.price - b.price) 
  else if (sortOrder.value === 'desc') result.sort((a, b) => b.price - a.price) 
  return result
})

const clearFilters = () => { searchQuery.value = ''; selectedCategory.value = 'Tümü'; sortOrder.value = 'default' }

const showToastMessage = (msg) => {
  toast.value = { show: true, message: msg }
  setTimeout(() => { toast.value.show = false }, 2500)
}

const openQuickView = (product) => { quickViewProduct.value = product }

const handleAddToCart = (product) => {
  const existingItem = cart.value.find(item => item.id === product.id)
  if (existingItem) existingItem.quantity++
  else cart.value.push({ ...product, quantity: 1 })
  showToastMessage(`${product.name} sepete eklendi!`)
}

const increaseQuantity = (productId) => {
  const item = cart.value.find(item => item.id === productId)
  if (item) item.quantity++
}

const decreaseQuantity = (productId) => {
  const item = cart.value.find(item => item.id === productId)
  if (item && item.quantity > 1) item.quantity--
  else handleRemoveFromCart(productId)
}

const handleRemoveFromCart = (productId) => {
  cart.value = cart.value.filter(item => item.id !== productId)
  showToastMessage('Ürün sepetten çıkarıldı.')
}

// YENİ YÖNLENDİRME (Router ile)
const goToCheckout = () => {
  router.push('/odeme')
}
</script>

<style scoped>
.home-view { padding-bottom: 50px; }
.hero-banner { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border-radius: 16px; padding: 40px; margin: 30px 0; color: white; display: flex; align-items: center; }
.hero-content h2 { margin: 0 0 10px 0; font-size: 2rem; font-weight: 800; }
.hero-content p { margin: 0; font-size: 1.1rem; color: #cbd5e1; }
.hero-content b { color: #fbbf24; }

.store-layout { display: flex; gap: 32px; align-items: flex-start; }
.catalog-section { flex: 3; }
.sidebar-section { flex: 1; min-width: 340px; }

.filters-bar { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; margin-bottom: 24px; }
.filter-buttons { display: flex; gap: 10px; flex-wrap: wrap; }
.filter-buttons button { background: var(--card-bg); border: 1px solid var(--border-color); padding: 10px 18px; border-radius: 100px; cursor: pointer; color: var(--text-muted); font-weight: 500; transition: all 0.2s; }
.filter-buttons button:hover, .filter-buttons button.active { border-color: var(--primary); color: var(--primary); }
.filter-buttons button.active { background: var(--primary); color: white; }

.sort-box select { padding: 10px 15px; border-radius: 8px; border: 1px solid var(--border-color); background: var(--card-bg); color: var(--text-main); font-family: 'Inter'; outline: none; cursor: pointer; }

.search-box-mobile { margin-bottom: 20px; display: none; }
.search-box-mobile input { width: 100%; padding: 12px 20px; border-radius: 100px; border: 1px solid var(--border-color); background: var(--bg-color); color: var(--text-main); outline: none; font-family: 'Inter'; }
.search-box-mobile input:focus { border-color: var(--primary); }

.no-results { text-align: center; padding: 60px 0; background: var(--card-bg); border-radius: 16px; border: 1px dashed var(--border-color); }
.no-results h3 { margin-bottom: 20px; color: var(--text-muted); }
.no-results button { background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; }
.no-results-icon { font-size: 3rem; opacity: 0.5; margin-bottom: 10px; }

.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; }

.toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: #111827; color: white; padding: 14px 24px; border-radius: 100px; z-index: 1000; font-weight: 500; display: flex; align-items: center; gap: 10px; }
.toast-icon { background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: bold; }

.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); display: flex; justify-content: center; align-items: center; z-index: 1001; }
.modal-content { background: var(--card-bg); color: var(--text-main); padding: 40px; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); position: relative; }

.quick-view-content { width: 90%; max-width: 800px; padding: 0; overflow: hidden; }
.close-btn { position: absolute; top: 15px; right: 15px; background: rgba(0,0,0,0.1); border: none; width: 35px; height: 35px; border-radius: 50%; cursor: pointer; font-size: 1rem; color: var(--text-main); display: flex; align-items: center; justify-content: center; z-index: 10; transition: 0.2s; }
.close-btn:hover { background: rgba(0,0,0,0.2); }

.quick-view-grid { display: flex; height: 450px; }
.quick-view-img { flex: 1; background: #f8f9fa; }
.quick-view-img img { width: 100%; height: 100%; object-fit: cover; }
.quick-view-info { flex: 1; padding: 40px; display: flex; flex-direction: column; justify-content: center; text-align: left; }
.qv-category { color: var(--primary); font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; display: block; }
.quick-view-info h2 { margin: 0 0 15px 0; font-size: 2rem; letter-spacing: -0.5px; }
.qv-rating { color: #fbbf24; font-size: 1.1rem; margin-bottom: 20px; }
.qv-rating span { color: var(--text-muted); font-size: 0.9rem; margin-left: 5px; }
.qv-desc { color: var(--text-muted); line-height: 1.6; font-size: 1.05rem; margin-bottom: 30px; }
.qv-price { font-size: 2.2rem; font-weight: 800; color: var(--text-main); margin-bottom: 20px; }
.w-100 { width: 100%; margin-top: auto; }
.primary-btn { background: var(--primary); color: white; border: none; padding: 14px 28px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: 0.2s; font-size: 1.05rem;}
.primary-btn:hover { background: var(--primary-hover); }

@media (max-width: 1024px) {
  .store-layout { flex-direction: column; }
  .sidebar-section { width: 100%; }
  .quick-view-grid { flex-direction: column; height: auto; }
  .quick-view-img { height: 300px; }
  .search-box-mobile { display: block; }
}
</style>