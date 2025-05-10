import { inject } from '@vercel/analytics';
inject(); // <-- Initialize Vercel Analytics

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(<App />);
