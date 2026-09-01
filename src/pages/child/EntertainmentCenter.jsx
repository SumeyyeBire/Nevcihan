import { Link } from 'react-router-dom'

function EntertainmentCenter() {
  return (
    <div>
      <h1>Eğlence Merkezi</h1>
      <p>Bir alan seç.</p>

      <div>
        <Link to="/child/entertainment/game-ideas">
          <button>Oyun Fikirleri</button>
        </Link>

        <Link to="/child/entertainment/online-games">
          <button>Online Oyunlar</button>
        </Link>
      </div>

      <Link to="/membership">
        <button>Müdavim Olmak İstiyorum</button>
      </Link>
    </div>
  )
}

export default EntertainmentCenter