import Head from 'next/head'
import Link from 'next/link'

const Revenue = () => (
  <>
    <Head><title>Revenue - GFIS</title></Head>
    <div style={styles.page}>
      <nav style={styles.sidebar}>
        <h2 style={styles.logo}>🌿 GFIS v2.0</h2>
        <Link href="/"><a style={styles.navLink}>🌿 Home</a></Link>
        <Link href="/overview"><a style={styles.navLink}>🏠 Overview</a></Link>
        <Link href="/monitoring"><a style={styles.navLink}>📊 Monitoring</a></Link>
        <Link href="/analytics"><a style={styles.navLink}>📈 Analytics</a></Link>
        <Link href="/predictions"><a style={styles.navLink}>🤖 Predictions</a></Link>
        <Link href="/geographic"><a style={styles.navLink}>🗺️ Geographic</a></Link>
        <Link href="/revenue"><a style={{...styles.navLink, ...styles.active}}>💰 Revenue</a></Link>
        <Link href="/health"><a style={styles.navLink}>🔧 Health</a></Link>
      </nav>
      <main style={styles.content}>
        <h1 style={styles.title}>💰 Revenue Tracking</h1>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Annual Revenue</h3>
            <p style={styles.number}>₹24.8B</p>
            <small>Potential</small>
          </div>
          <div style={styles.card}>
            <h3>Monthly Avg</h3>
            <p style={styles.number}>₹2.07B</p>
            <small>Income</small>
          </div>
          <div style={styles.card}>
            <h3>Growth Rate</h3>
            <p style={styles.number}>+12%</p>
            <small>Year-over-Year</small>
          </div>
        </div>
      </main>
    </div>
  </>
)

const styles = {
  page: { display: 'flex', minHeight: '100vh', background: '#f5f5f5', fontFamily: 'system-ui, sans-serif' } as React.CSSProperties,
  sidebar: { width: '250px', background: '#1a472a', color: 'white', padding: '2rem 1rem', position: 'fixed' as const, height: '100vh', overflow: 'auto' } as React.CSSProperties,
  logo: { marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 'bold' } as React.CSSProperties,
  navLink: { display: 'block', padding: '0.75rem 1rem', margin: '0.5rem 0', color: '#ccc', textDecoration: 'none', borderRadius: '4px' } as React.CSSProperties,
  active: { background: '#667eea', color: 'white', fontWeight: 'bold' } as React.CSSProperties,
  content: { marginLeft: '250px', flex: 1, padding: '2rem' } as React.CSSProperties,
  title: { fontSize: '2rem', marginBottom: '2rem', color: '#1a472a' } as React.CSSProperties,
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' } as React.CSSProperties,
  card: { background: 'linear-gradient(135deg, #667eea, #764ba2)', color: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' as const } as React.CSSProperties,
  number: { fontSize: '2rem', fontWeight: 'bold', margin: '0.5rem 0' } as React.CSSProperties,
}

export default Revenue
