import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 개발 서버 포트 변경
    allowedHosts: [
      'ad34-2406-5900-104d-98af-b836-e217-67e3-f668.ngrok-free.app' // ngrok 도메인
    ]
  },
})
