import { defineConfig } from 'vite'
import { createMpaPlugin } from 'vite-plugin-virtual-mpa'
import path from 'path'
import { fileURLToPath } from 'url'

// ✅ 這兩行必須在最頂部，所有變數使用之前
const __dirname = fileURLToPath(new URL('.', import.meta.url))
const partialsDir = path.resolve(__dirname, 'src/partials').replace(/\\/g, '/')

export default defineConfig(({ command }) => {
  return {
    base: command === 'build'
      ? '/bootstrap-vite/'   // GitHub Pages
      : '/',                // 本地開發

    server: {
      port: 5173,
      open: '/index.html',
    },

    plugins: [
      createMpaPlugin({
        ejs: {
          views: [path.resolve(__dirname, 'src')],
        },
        pages: [
          {
            name: 'index',
            filename: 'index.html',
            template: 'src/pages/index.html',
            entry: '/src/js/index.js',
            data: { title: '首頁', activePage: 'index', partialsDir }
          },
          {
            name: 'about',
            filename: 'about.html',
            template: 'src/pages/about.html',
            entry: '/src/js/about.js',
            data: { title: '關於我們', activePage: 'about', partialsDir }
          },
          {
            name: 'product',
            filename: 'product.html',
            template: 'src/pages/product.html',
            entry: '/src/js/product.js',
            data: { title: '產品介紹', activePage: 'product', partialsDir }
          },
          {
            name: 'contact',
            filename: 'contact.html',
            template: 'src/pages/contact.html',
            entry: '/src/js/contact.js',
            data: { title: '聯絡我們', activePage: 'contact', partialsDir }
          }
        ],
        rewrites: [
          { from: /^\/$/, to: '/index.html' }
        ]
      })
    ],

    resolve: {
      alias: {
        '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        '@': path.resolve(__dirname, 'src')
      }
    },

    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['color-functions', 'global-builtin', 'import'],
        }
      }
    }
  }
})