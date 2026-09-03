import { Link } from 'react-router-dom'

function ChildHome() {
  return (
    <div>
      <h1>Çocuk Modu</h1>
      <p>Gitmek istediğin merkezi seç.</p>

      <div>
        <Link to="/child/entertainment">
          <button>Eğlence Merkezi</button>
        </Link>

        <Link to="/child/discovery">
          <button>Keşifhane</button>
        </Link>

        <Link to="/child/learning">
          <button>Talim Köşesi</button>
        </Link>
      </div>
    </div>
  )
}

export default ChildHome