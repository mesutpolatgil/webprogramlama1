<template>
  <div class="cart-container">
    <div class="cart-header">
      <h2>Sepet Özeti</h2>
      <span class="item-count">{{ totalItems }} Ürün</span>
    </div>
    
    <div class="cart-body">
      <div v-if="cartItems.length === 0" class="empty-cart">
        <div class="empty-icon">🛍️</div>
        <p>Sepetiniz şu an boş.</p>
        <span>Ürün ekleyerek alışverişe başlayın.</span>
      </div>
      
      <ul v-else class="cart-list">
        <li v-for="item in cartItems" :key="item.id" class="cart-item">
          <div class="item-details">
            <span class="item-name">{{ item.name }}</span>
            <span class="item-price">{{ (item.price * item.quantity).toLocaleString('tr-TR') }} ₺</span>
          </div>
          <div class="item-actions">
            <div class="qty-controls">
              <button class="qty-btn" @click="$emit('decrease', item.id)">-</button>
              <span class="qty-number">{{ item.quantity }}</span>
              <button class="qty-btn" @click="$emit('increase', item.id)">+</button>
            </div>
            <button class="remove-btn" @click="$emit('remove-item', item.id)">Kaldır</button>
          </div>
        </li>
      </ul>
    </div>

    <div class="cart-footer" v-if="cartItems.length > 0">
      <!-- YENİ: Kupon Kodu Alanı -->
      <div class="coupon-box">
        <input type="text" v-model="couponInput" placeholder="Kupon (Örn: VUE20)" />
        <button @click="applyCoupon">Uygula</button>
      </div>
      <span v-if="couponError" class="coupon-error">{{ couponError }}</span>

      <div class="total-row subtotal">
        <span>Ara Toplam</span>
        <span>{{ subTotal.toLocaleString('tr-TR') }} ₺</span>
      </div>
      
      <!-- YENİ: İndirim Satırı -->
      <div class="total-row discount" v-if="discountAmount > 0">
        <span>İndirim (%20)</span>
        <span>-{{ discountAmount.toLocaleString('tr-TR') }} ₺</span>
      </div>

      <div class="total-row main-total">
        <span>Genel Toplam</span>
        <span class="total-price">{{ finalTotal.toLocaleString('tr-TR') }} ₺</span>
      </div>
      <button class="checkout-btn" @click="$emit('checkout')">
        Siparişi Tamamla
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ cartItems: { type: Array, required: true } })
defineEmits(['remove-item', 'checkout', 'increase', 'decrease'])

// Kupon State'leri
const couponInput = ref('')
const isCouponActive = ref(false)
const couponError = ref('')

const applyCoupon = () => {
  if (couponInput.value.toUpperCase() === 'VUE20') {
    isCouponActive.value = true
    couponError.value = ''
  } else {
    isCouponActive.value = false
    couponError.value = 'Geçersiz kupon kodu!'
    setTimeout(() => { couponError.value = '' }, 2000)
  }
}

const totalItems = computed(() => props.cartItems.reduce((total, item) => total + item.quantity, 0))
const subTotal = computed(() => props.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0))

// YENİ: İndirim ve Final Fiyat Hesaplaması
const discountAmount = computed(() => isCouponActive.value ? subTotal.value * 0.20 : 0)
const finalTotal = computed(() => subTotal.value - discountAmount.value)
</script>

<style scoped>
.cart-container { background: var(--card-bg); border-radius: 16px; border: 1px solid var(--border-color); box-shadow: 0 4px 25px rgba(0,0,0,0.04); position: sticky; top: 24px; display: flex; flex-direction: column; max-height: 85vh; }
.cart-header { padding: 24px; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center; }
.cart-header h2 { margin: 0; font-size: 1.25rem; color: var(--text-main); font-weight: 700; }
.item-count { background: rgba(37, 99, 235, 0.1); color: var(--primary); padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; }

.cart-body { padding: 24px; overflow-y: auto; flex-grow: 1; }
.empty-cart { text-align: center; padding: 30px 0; }
.empty-icon { font-size: 3rem; margin-bottom: 15px; opacity: 0.5; }
.empty-cart p { color: var(--text-main); font-weight: 600; font-size: 1.1rem; margin: 0 0 5px 0; }
.empty-cart span { color: var(--text-muted); font-size: 0.9rem; }

.cart-list { list-style: none; padding: 0; margin: 0; }
.cart-item { display: flex; flex-direction: column; padding-bottom: 20px; margin-bottom: 20px; border-bottom: 1px solid var(--border-color); }
.cart-item:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.item-details { display: flex; justify-content: space-between; margin-bottom: 12px; align-items: flex-start;}
.item-name { font-weight: 600; color: var(--text-main); font-size: 0.95rem; padding-right: 15px; }
.item-price { color: var(--text-main); font-weight: 700; white-space: nowrap; }

.item-actions { display: flex; justify-content: space-between; align-items: center; }
.qty-controls { display: flex; align-items: center; background: var(--btn-bg); border-radius: 8px; overflow: hidden; }
.qty-btn { background: none; border: none; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; cursor: pointer; color: var(--text-main); transition: background 0.2s; }
.qty-btn:hover { background: var(--btn-hover); }
.qty-number { width: 30px; text-align: center; font-weight: 600; font-size: 0.9rem; color: var(--text-main); }
.remove-btn { background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.85rem; font-weight: 600; padding: 5px 10px; border-radius: 6px; transition: 0.2s; }
.remove-btn:hover { background: rgba(239, 68, 68, 0.1); }

.cart-footer { padding: 24px; border-top: 1px solid var(--border-color); background: var(--card-bg); border-radius: 0 0 16px 16px; }

/* Kupon Stilleri */
.coupon-box { display: flex; gap: 8px; margin-bottom: 10px; }
.coupon-box input { flex: 1; padding: 10px 15px; border-radius: 8px; border: 1px dashed var(--border-color); background: transparent; color: var(--text-main); outline: none; font-family: 'Inter'; font-weight: 600; text-transform: uppercase; }
.coupon-box input:focus { border-color: var(--primary); }
.coupon-box button { background: var(--text-main); color: var(--card-bg); border: none; padding: 0 15px; border-radius: 8px; font-weight: 600; cursor: pointer; }
.coupon-error { color: #ef4444; font-size: 0.8rem; font-weight: bold; display: block; margin-bottom: 15px; }

.total-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.subtotal { color: var(--text-muted); font-size: 0.95rem; }
.discount { color: #10b981; font-weight: 600; font-size: 0.95rem; }
.main-total { margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--border-color); margin-bottom: 20px;}
.main-total span:first-child { color: var(--text-muted); font-weight: 600; }
.total-price { font-size: 1.5rem; font-weight: 800; color: var(--text-main); }

.checkout-btn { width: 100%; background: var(--primary); color: white; border: none; padding: 16px; border-radius: 12px; font-size: 1.05rem; font-weight: 700; cursor: pointer; transition: 0.2s; }
.checkout-btn:hover { background: var(--primary-hover); }
</style>