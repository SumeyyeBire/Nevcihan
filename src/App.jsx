import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ChildHome from './pages/child/ChildHome'
import EntertainmentCenter from './pages/child/EntertainmentCenter'
import DiscoveryCenter from './pages/child/DiscoveryCenter'
import LearningCenter from './pages/child/LearningCenter'
import GameIdeas from './pages/child/GameIdeas'
import OnlineGames from './pages/child/OnlineGames'
import TravelersClub from './pages/child/TravelersClub'
import HistoryTrain from './pages/child/HistoryTrain'
import NumbersClub from './pages/child/NumbersClub'
import LettersWorld from './pages/child/LettersWorld'

import AdultHome from './pages/adult/AdultHome'
import NewsCenter from './pages/adult/NewsCenter'
import TechnologyNews from './pages/adult/TechnologyNews'
import SportsNews from './pages/adult/SportsNews'
import AdultEntertainmentCenter from './pages/adult/AdultEntertainmentCenter'
import TradeCenter from './pages/adult/TradeCenter'

import Membership from './pages/Membership'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Çocuk Modu */}
        <Route path="/child" element={<ChildHome />} />

        <Route
          path="/child/entertainment"
          element={<EntertainmentCenter />}
        />

        <Route
          path="/child/discovery"
          element={<DiscoveryCenter />}
        />

        <Route
          path="/child/learning"
          element={<LearningCenter />}
        />

        <Route
          path="/child/entertainment/game-ideas"
          element={<GameIdeas />}
        />

        <Route
          path="/child/entertainment/online-games"
          element={<OnlineGames />}
        />

        <Route
          path="/child/discovery/travelers-club"
          element={<TravelersClub />}
        />

        <Route
          path="/child/discovery/history-train"
          element={<HistoryTrain />}
        />

        <Route
          path="/child/learning/numbers-club"
          element={<NumbersClub />}
        />

        <Route
          path="/child/learning/letters-world"
          element={<LettersWorld />}
        />

        {/* Yetişkin Modu */}
        <Route path="/adult" element={<AdultHome />} />

        <Route
          path="/adult/news"
          element={<NewsCenter />}
        />

        <Route
          path="/adult/news/technology"
          element={<TechnologyNews />}
        />

        <Route
          path="/adult/news/sports"
          element={<SportsNews />}
        />

        <Route
          path="/adult/entertainment"
          element={<AdultEntertainmentCenter />}
        />

        <Route
          path="/adult/trade"
          element={<TradeCenter />}
        />

        {/* Müdavim Paketi */}
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App