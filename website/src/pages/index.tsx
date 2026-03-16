import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GFIS v2.0 - Green Fuel Intelligence System</title>
        <meta name="description" content="AI-powered biogas optimization platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={styles.page}>
        <nav style={styles.sidebar}>
          <h2 style={styles.logo}>🌿 GFIS v2.0</h2>
          <Link href="/"><a style={{...styles.navLink, ...styles.active}}>🌿 Home</a></Link>
          <Link href="/overview"><a style={styles.navLink}>🏠 Overview</a></Link>
          <Link href="/monitoring"><a style={styles.navLink}>📊 Monitoring</a></Link>
          <Link href="/analytics"><a style={styles.navLink}>📈 Analytics</a></Link>
          <Link href="/predictions"><a style={styles.navLink}>🤖 Predictions</a></Link>
          <Link href="/geographic"><a style={styles.navLink}>🗺️ Geographic</a></Link>
          <Link href="/revenue"><a style={styles.navLink}>💰 Revenue</a></Link>
          <Link href="/health"><a style={styles.navLink}>🔧 Health</a></Link>
        </nav>

      <main style={styles.main}>
        <div style={styles.hero}>
          <h1 style={styles.title}>🌱 Green Fuel Intelligence System</h1>
          <p style={styles.subtitle}>AI-powered biogas production optimization</p>

          <div style={styles.features}>
            <div style={styles.feature}>
              <h3>📊 Real-time Monitoring</h3>
              <p>Live digester telemetry with 12 AI modules</p>
            </div>
            <div style={styles.feature}>
              <h3>🤖 ML Predictions</h3>
              <p>XGBoost + LSTM yield forecasting</p>
            </div>
            <div style={styles.feature}>
              <h3>💰 Carbon Credits</h3>
              <p>Automated MRV verification (Verra/Gold Standard)</p>
            </div>
            <div style={styles.feature}>
              <h3>🌍 SATAT Compliant</h3>
              <p>GOBARdhan portal integration ready</p>
            </div>
          </div>

          <div style={styles.cta}>
            <a href="/api/v1/dashboard/overview" style={styles.button}>
              View Dashboard API
            </a>
            <a href="http://localhost:8000/docs" style={styles.buttonSecondary}>
              API Documentation
            </a>
          </div>

          <div style={styles.stats}>
            <div style={styles.stat}>
              <h4>12</h4>
              <p>Production Plants</p>
            </div>
            <div style={styles.stat}>
              <h4>450K m³</h4>
              <p>Biogas Production</p>
            </div>
            <div style={styles.stat}>
              <h4>2,250</h4>
              <p>Carbon Credits</p>
            </div>
            <div style={styles.stat}>
              <h4>144</h4>
              <p>Active Sensors</p>
            </div>
          </div>
        </div>
      </main>
      </div>
    </>
  )
}

const styles = {
  page: { display: 'flex', minHeight: '100vh', background: '#f5f5f5', fontFamily: 'system-ui, sans-serif' } as React.CSSProperties,
  sidebar: { width: '250px', background: '#1a472a', color: 'white', padding: '2rem 1rem', position: 'fixed' as const, height: '100vh', overflow: 'auto' } as React.CSSProperties,
  logo: { marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 'bold' } as React.CSSProperties,
  navLink: { display: 'block', padding: '0.75rem 1rem', margin: '0.5rem 0', color: '#ccc', textDecoration: 'none', borderRadius: '4px', transition: 'all 0.3s' } as React.CSSProperties,
  active: { background: '#667eea', color: 'white', fontWeight: 'bold' } as React.CSSProperties,
  main: {
    marginLeft: '250px',
    flex: 1,
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 0 0 250px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  } as React.CSSProperties,
  
  hero: {
    textAlign: 'center' as const,
    paddingTop: '3rem',
  } as React.CSSProperties,
  
  title: {
    fontSize: '3.5rem',
    marginBottom: '1rem',
    color: '#1a472a',
  } as React.CSSProperties,
  
  subtitle: {
    fontSize: '1.5rem',
    color: '#5a7a5f',
    marginBottom: '3rem',
  } as React.CSSProperties,
  
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    margin: '3rem 0',
  } as React.CSSProperties,
  
  feature: {
    padding: '2rem',
    border: '2px solid #e0f0e0',
    borderRadius: '8px',
    background: '#f9fff9',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,
  
  cta: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '3rem',
    flexWrap: 'wrap' as const,
  } as React.CSSProperties,
  
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    background: '#1a472a',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background 0.3s ease',
  } as React.CSSProperties,
  
  buttonSecondary: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    background: 'white',
    color: '#1a472a',
    border: '2px solid #1a472a',
    textDecoration: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  } as React.CSSProperties,
  
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '4rem',
    paddingTop: '3rem',
    borderTop: '2px solid #e0f0e0',
  } as React.CSSProperties,
  
  stat: {
    textAlign: 'center' as const,
  } as React.CSSProperties,
}

export default Home
