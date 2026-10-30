<template>
  <div class="container checkout-page">
    <h2 class="page-title">Güvenli Ödeme Adımı</h2>
    
    <div v-if="isSuccess" class="success-box">
      <div class="success-icon">🎉</div>
      <h3>Siparişiniz Başarıyla Alındı!</h3>
      <p>Sipariş Numaranız: <b>#WS{{ Math.floor(Math.random() * 100000) }}</b></p>
      <button @click="$router.push('/')" class="btn">Mağazaya Dön</button>
    </div>

    <div v-else class="checkout-grid">
      <form class="checkout-form" @submit.prevent="completeOrder">
        <h3>📍 Teslimat Bilgileri</h3>
        <input type="text" placeholder="Ad Soyad" required />
        <textarea placeholder="Açık Adres" required rows="3"></textarea>
        
        <h3 class="mt-4">💳 Ödeme Bilgileri</h3>
        <input type="text" placeholder="Kart Numarası" maxlength="16" required />
        <div class="row">
          <input type="text" placeholder="SKT (AA/YY)" required />
          <input type="text" placeholder="CVV" maxlength="3" required />
        </div>
        
        <button type="submit" class="btn checkout-btn">
          Siparişi Onayla ({{ total.toLocaleString('tr-TR') }} ₺)
        </button>
      </form>
      
      <div class="order-summary">
        <h3>Sipariş Özeti</h3>
        <div v-if="cart.length === 0" class="empty">Sepetiniz boş.</div>
        <ul v-else>
          <li v-for="item in cart" :key="item.id">
            <span class="item-name">{{ item.name }} (x{{ item.quantity }})</span>
            <span class="item-price">{{ (item.price * item.quantity).toLocaleString('tr-TR') }} ₺</span>
          </li>
        </ul>
        <div class="summary-total" v-if="cart.length > 0">
          <span>Ödenecek Tutar:</span>
          <span class="total-val">{{ total.toLocaleString('tr-TR') }} ₺</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cart = ref([])
const total = ref(0)
const isSuccess = ref(false)

// Sepeti LocalStorage'dan çeker (Veri taşıma mantığı)
onMounted(() => {
  const savedCart = localStorage.getItem('wStoreCart')
  if (savedCart) {
    cart.value = JSON.parse(savedCart)
    total.value = cart.value.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  }
})

const completeOrder = () => {
  isSuccess.value = true
  localStorage.removeItem('wStoreCart') // Sipariş bitince sepeti temizle
}
</script>

<style scoped>
.checkout-page { margin-top: 40px; min-height: 70vh; }
.page-title { color: var(--text-main); margin-bottom: 30px; font-size: 2rem; letter-spacing: -1px; }
.checkout-grid { display: flex; gap: 40px; }
.checkout-form { flex: 2; background: var(--card-bg); padding: 40px; border-radius: 16px; display: flex; flex-direction: column; gap: 15px; border: 1px solid var(--border-color); }
.checkout-form h3 { margin: 0 0 10px 0; color: var(--text-main); }
.mt-4 { margin-top: 20px; }
.order-summary { flex: 1; background: var(--card-bg); padding: 40px; border-radius: 16px; height: fit-content; border: 1px solid var(--border-color); }
.order-summary h3 { margin-top: 0; color: var(--text-main); border-bottom: 1px solid var(--border-color); padding-bottom: 15px; }

input, textarea { width: 100%; padding: 15px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-color); color: var(--text-main); font-family: 'Inter'; font-size: 1rem; outline: none; }
input:focus, textarea:focus { border-color: var(--primary); }
.row { display: flex; gap: 15px; }

.btn { background: var(--primary); color: white; border: none; padding: 18px; border-radius: 12px; cursor: pointer; font-weight: bold; font-size: 1.1rem; margin-top: 20px; transition: 0.2s; width: 100%; }
.btn:hover { background: var(--primary-hover); }

.success-box { text-align: center; padding: 60px; background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border-color); }
.success-icon { font-size: 5rem; margin-bottom: 20px; }
.success-box h3 { font-size: 2rem; color: var(--text-main); margin-bottom: 10px; }

ul { list-style: none; padding: 0; margin: 0; }
li { display: flex; justify-content: space-between; margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px dashed var(--border-color); color: var(--text-muted); }
.item-name { font-weight: 500; }
.item-price { font-weight: 700; color: var(--text-main); }
.summary-total { display: flex; justify-content: space-between; margin-top: 20px; font-size: 1.2rem; font-weight: 800; color: var(--text-main); }
.empty { color: var(--text-muted); font-style: italic; }

@media (max-width: 900px) { .checkout-grid { flex-direction: column; } }
</style>