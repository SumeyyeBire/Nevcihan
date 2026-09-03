import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

// Çocuk Modu Sayfaları
import ChildHome from './pages/child/ChildHome';
import EntertainmentCenter from './pages/child/EntertainmentCenter';
import DiscoveryCenter from './pages/child/DiscoveryCenter';
import LearningCenter from './pages/child/LearningCenter';
import GameIdeas from './pages/child/GameIdeas';
import OnlineGames from './pages/child/OnlineGames';
import TravelersClub from './pages/child/TravelersClub';
import HistoryTrain from './pages/child/HistoryTrain';
import NumbersClub from './pages/child/NumbersClub';
import LettersWorld from './pages/child/LettersWorld';

// Yetişkin Modu Sayfaları
import AdultHome from './pages/adult/AdultHome';
import NewsCenter from './pages/adult/NewsCenter';
import TechnologyNews from './pages/adult/TechnologyNews';
import SportsNews from './pages/adult/SportsNews';
import AdultEntertainmentCenter from './pages/adult/AdultEntertainmentCenter';
import TradeCenter from './pages/adult/TradeCenter';

// Müdavim Paketi
import Membership from './pages/Membership';

// 3D Anasayfa Bileşeni
function Home3D() {
  const navigate = useNavigate();

  function onLoad(splineApp) {
    console.log('Spline sahnesi başarıyla yüklendi:', splineApp);
  }

  function onSplineMouseDown(e) {
    const objectName = e.target?.name || '';
    console.log('Tıklanan nesne adı:', objectName);

    // Binalara tıklandığında ilgili 2D sayfalara yönlendirme
    const nameLower = objectName.toLowerCase();
    if (nameLower.includes('child') || nameLower.includes('cocuk')) {
      navigate('/child');
    } else if (nameLower.includes('adult') || nameLower.includes('yetiskin')) {
      navigate('/adult');
    } else if (nameLower.includes('trade') || nameLower.includes('ticaret')) {
      navigate('/adult/trade');
    } else if (nameLower.includes('news') || nameLower.includes('haber')) {
      navigate('/adult/news');
    } else if (nameLower.includes('entertainment') || nameLower.includes('eglence')) {
      navigate('/child/entertainment');
    }
  }

  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
      {/* 3D Sahne Katmanı */}
      <div style={{ width: '100%', height: '100%' }}>
        <Spline
          scene="https://prod.spline.design/3lJ5jiti04aGhtWY/scene.splinecode"
          onLoad={onLoad}
          onSplineMouseDown={onSplineMouseDown}
        />
      </div>

      {/* Üst Bilgi Kartı */}
      <div style={{
        position: 'absolute',
        top: '24px',
        left: '24px',
        padding: '16px 20px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <h1 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>Nevcihan 3D Navigasyon</h1>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#cbd5e1' }}>
          Yapılara tıklayarak 2D merkez detaylarına geçiş yapabilirsiniz.
        </p>
      </div>

      {/* Hızlı Mod Geçiş Butonları */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        gap: '12px',
        zIndex: 10
      }}>
        <button
          onClick={() => navigate('/child')}
          style={{
            padding: '10px 18px',
            background: 'rgba(245, 158, 11, 0.85)',
            backdropFilter: 'blur(8px)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
          Çocuk Dünyası
        </button>
        <button
          onClick={() => navigate('/adult')}
          style={{
            padding: '10px 18px',
            background: 'rgba(59, 130, 246, 0.85)',
            backdropFilter: 'blur(8px)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
          Yetişkin Dünyası
        </button>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ana Sayfa: 3D Şehir */}
        <Route path="/" element={<Home3D />} />

        {/* Çocuk Modu */}
        <Route path="/child" element={<ChildHome />} />
        <Route path="/child/entertainment" element={<EntertainmentCenter />} />
        <Route path="/child/discovery" element={<DiscoveryCenter />} />
        <Route path="/child/learning" element={<LearningCenter />} />
        <Route path="/child/entertainment/game-ideas" element={<GameIdeas />} />
        <Route path="/child/entertainment/online-games" element={<OnlineGames />} />
        <Route path="/child/discovery/travelers-club" element={<TravelersClub />} />
        <Route path="/child/discovery/history-train" element={<HistoryTrain />} />
        <Route path="/child/learning/numbers-club" element={<NumbersClub />} />
        <Route path="/child/learning/letters-world" element={<LettersWorld />} />

        {/* Yetişkin Modu */}
        <Route path="/adult" element={<AdultHome />} />
        <Route path="/adult/news" element={<NewsCenter />} />
        <Route path="/adult/news/technology" element={<TechnologyNews />} />
        <Route path="/adult/news/sports" element={<SportsNews />} />
        <Route path="/adult/entertainment" element={<AdultEntertainmentCenter />} />
        <Route path="/adult/trade" element={<TradeCenter />} />

        {/* Müdavim Paketi */}
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  );
}