import { Link } from 'react-router-dom'

function LearningCenter() {
  return (
    <div>
      <h1>Talim Köşesi</h1>
      <p>Bir alan seç.</p>

      <div>
        <Link to="/child/learning/numbers-club">
          <button>Sayılar Kulübü</button>
        </Link>

        <Link to="/child/learning/letters-world">
          <button>Harfler Diyarı</button>
        </Link>
      </div>

      <Link to="/membership">
        <button>Müdavim Olmak İstiyorum</button>
      </Link>
    </div>
  )
}

export default LearningCenter