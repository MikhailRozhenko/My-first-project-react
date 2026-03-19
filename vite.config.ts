import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/My-first-project-react/',
  plugins: [react()],
});
