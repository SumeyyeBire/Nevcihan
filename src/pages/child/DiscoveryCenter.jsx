import { Link } from 'react-router-dom'

function DiscoveryCenter() {
  return (
    <div>
      <h1>Keşifhane</h1>
      <p>Bir alan seç.</p>

      <div>
        <Link to="/child/discovery/travelers-club">
          <button>Gezginler Kulübü</button>
        </Link>

        <Link to="/child/discovery/history-train">
          <button>Mazi Treni</button>
        </Link>
      </div>

      <Link to="/membership">
        <button>Müdavim Olmak İstiyorum</button>
      </Link>
    </div>
  )
}

export default DiscoveryCenter