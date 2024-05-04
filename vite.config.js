import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Troubleshoot } from '@mui/icons-material'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
server:{
  host:true,
  open:true
}
})