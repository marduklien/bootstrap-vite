// main.js — 所有頁面共用邏輯
import 'bootstrap' // 引入 Bootstrap JS 元件
import '../scss/main.scss'  

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle')
themeToggle?.addEventListener('click', () => {
  const current = document.body.getAttribute('data-bs-theme')
  document.body.setAttribute('data-bs-theme', current === 'dark' ? 'light' : 'dark')
})


