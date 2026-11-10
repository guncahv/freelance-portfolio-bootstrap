import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// 1. CSS-файл Bootstrap подключается один раз в точке входа (по официальной документации React Bootstrap)
import 'bootstrap/dist/css/bootstrap.min.css';
// 2. Небольшая тема: цвета и шрифты дизайн-системы ЛР №17 поверх переменных Bootstrap
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
