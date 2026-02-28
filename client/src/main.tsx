import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import GiftListPage from './pages/GiftListPage.tsx';
import GiftCreatePage from './pages/GiftCreatePage.tsx';
import GiftEditPage from './pages/GiftEditPage.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<GiftListPage/>} />
        <Route path="gifts/new" element={<GiftCreatePage />} />
        <Route path="gifts/:id/edit" element={<GiftEditPage />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
