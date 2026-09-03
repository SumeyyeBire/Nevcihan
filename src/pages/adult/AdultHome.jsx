import { Link } from 'react-router-dom'

function AdultHome() {
  return (
    <div>
      <h1>Yetişkin Modu</h1>
      <p>Gitmek istediğin merkezi seç.</p>

      <div>
        <Link to="/adult/news">
          <button>Haber Merkezi</button>
        </Link>

        <Link to="/adult/entertainment">
          <button>Eğlence Merkezi</button>
        </Link>

        <Link to="/adult/trade">
          <button>Ticaret Merkezi</button>
        </Link>
      </div>
    </div>
  )
}

export default AdultHome