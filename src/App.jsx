import Spline from '@splinetool/react-spline';

export default function App() {
  function onLoad(splineApp) {
    console.log('Spline sahnesi başarıyla yüklendi:', splineApp);
  }

  function onSplineMouseDown(e) {
    console.log('Tıklanan nesne adı:', e.target.name);
  }

  return (
    <main style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
      {/* 3D Sahne Katmanı */}
      <div style={{ width: '100%', height: '100%' }}>
        <Spline
          scene="https://prod.spline.design/3IJ5jiti04aGhtWY/scene.splinecode" 
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
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#cbd5e1' }}>Yapılara tıklayarak detayları görüntüleyebilirsiniz.</p>
      </div>
    </main>
  );
}