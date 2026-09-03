import { Link } from 'react-router-dom'

function AdultEntertainmentCenter() {
  return (
    <div>
      <h1>Eğlence Merkezi</h1>
      <p>Bir alan seç.</p>

      <div>
        <Link to="/adult/entertainment/tespithane">
          <button>Tespithane</button>
        </Link>

        <Link to="/adult/entertainment/standup">
          <button>Standup Sahnesi</button>
        </Link>
      </div>

      <Link to="/membership">
        <button>Müdavim Olmak İstiyorum</button>
      </Link>
    </div>
  )
}

export default AdultEntertainmentCenter