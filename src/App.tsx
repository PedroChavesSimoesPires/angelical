import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { SmpHomePage } from '@/pages/smp/SmpHomePage';
import { SmpAboutPage } from '@/pages/smp/SmpAboutPage';
import { SmpRulesPage } from '@/pages/smp/SmpRulesPage';
import { SmpShopPage } from '@/pages/smp/SmpShopPage';
import { SmpRankingPage } from '@/pages/smp/SmpRankingPage';
import { SmpNewsPage } from '@/pages/smp/SmpNewsPage';
import { SmpFaqPage } from '@/pages/smp/SmpFaqPage';
import { AngelicalHomePage } from '@/pages/angelical/AngelicalHomePage';
import { AngelicalAboutPage } from '@/pages/angelical/AngelicalAboutPage';
import { AngelicalRulesPage } from '@/pages/angelical/AngelicalRulesPage';
import { AngelicalShopPage } from '@/pages/angelical/AngelicalShopPage';
import { AngelicalCommunityPage } from '@/pages/angelical/AngelicalCommunityPage';
import { AngelicalNewsPage } from '@/pages/angelical/AngelicalNewsPage';
import { AngelicalFaqPage } from '@/pages/angelical/AngelicalFaqPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Minecraft SMP */}
          <Route path="minecraft" element={<SmpHomePage />} />
          <Route path="minecraft/sobre" element={<SmpAboutPage />} />
          <Route path="minecraft/regras" element={<SmpRulesPage />} />
          <Route path="minecraft/loja" element={<SmpShopPage />} />
          <Route path="minecraft/ranking" element={<SmpRankingPage />} />
          <Route path="minecraft/noticias" element={<SmpNewsPage />} />
          <Route path="minecraft/faq" element={<SmpFaqPage />} />

          {/* Angelical X */}
          <Route path="angelical" element={<AngelicalHomePage />} />
          <Route path="angelical/sobre" element={<AngelicalAboutPage />} />
          <Route path="angelical/regras" element={<AngelicalRulesPage />} />
          <Route path="angelical/loja" element={<AngelicalShopPage />} />
          <Route path="angelical/comunidade" element={<AngelicalCommunityPage />} />
          <Route path="angelical/noticias" element={<AngelicalNewsPage />} />
          <Route path="angelical/faq" element={<AngelicalFaqPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
