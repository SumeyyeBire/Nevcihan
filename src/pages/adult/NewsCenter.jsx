import { Link } from 'react-router-dom'

function NewsCenter() {
  return (
    <div>
      <h1>Haber Merkezi</h1>
      <p>Bir haber alanı seç.</p>

      <div>
        <Link to="/adult/news/technology">
          <button>Teknoloji Haberleri</button>
        </Link>

        <Link to="/adult/news/sports">
          <button>Spor Haberleri</button>
        </Link>
      </div>

      <Link to="/membership">
        <button>Müdavim Olmak İstiyorum</button>
      </Link>
    </div>
  )
}

export default NewsCenter