import { inject } from '@vercel/analytics';
inject(); // <-- Initialize Vercel Analytics

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n/config'; // Import i18n configuration

createRoot(document.getElementById("root")!).render(<App />);
