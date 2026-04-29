import './main.js'
import '../scss/contact.scss'

// 首頁專屬邏輯
console.log('Index page loaded')

// 範例：初始化 Bootstrap Carousel
const carousel = document.getElementById('heroCarousel')
if (carousel) {
  new bootstrap.Carousel(carousel, { interval: 3000 })
}