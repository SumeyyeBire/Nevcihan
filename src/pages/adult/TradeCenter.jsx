import { Link } from 'react-router-dom'

function TradeCenter() {
  return (
    <div>
      <h1>Ticaret Merkezi</h1>
      <p>Bir alan seç.</p>

      <div>
        <Link to="/adult/trade/clothing">
          <button>Giyim Sektörü</button>
        </Link>

        <Link to="/adult/trade/hardware">
          <button>Hırdavat Sektörü</button>
        </Link>
      </div>

      <Link to="/membership">
        <button>Müdavim Olmak İstiyorum</button>
      </Link>
    </div>
  )
}

export default TradeCenter