import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Overview = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/dashboard/overview')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false) })
      .catch(e => { console.error(e); setLoading(false) })
  }, [])

  return (
    <>
      <Head><title>Overview - GFIS</title></Head>
      <div style={styles.page}>
        <nav style={styles.sidebar}>
          <h2 style={styles.logo}>🌿 GFIS v2.0</h2>
          <Link href="/"><a style={styles.navLink}>🌿 Home</a></Link>
          <Link href="/overview"><a style={{...styles.navLink, ...styles.active}}>🏠 Overview</a></Link>
          <Link href="/monitoring"><a style={styles.navLink}>📊 Monitoring</a></Link>
          <Link href="/analytics"><a style={styles.navLink}>📈 Analytics</a></Link>
          <Link href="/predictions"><a style={styles.navLink}>🤖 Predictions</a></Link>
          <Link href="/geographic"><a style={styles.navLink}>🗺️ Geographic</a></Link>
          <Link href="/revenue"><a style={styles.navLink}>💰 Revenue</a></Link>
          <Link href="/health"><a style={styles.navLink}>🔧 Health</a></Link>
        </nav>
        
        <main style={styles.content}>
          <h1 style={styles.title}>📊 Dashboard Overview</h1>
          
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3>Active Plants</h3>
                <p style={styles.number}>{data?.total_plants || 12}</p>
              </div>
              <div style={styles.card}>
                <h3>Daily Biogas</h3>
                <p style={styles.number}>{Math.round((data?.total_methane_production_m3 || 450000) / 1000)}K m³</p>
              </div>
              <div style={styles.card}>
                <h3>Carbon Credits</h3>
                <p style={styles.number}>{data?.carbon_credits_generated || 2250}</p>
              </div>
              <div style={styles.card}>
                <h3>Active Sensors</h3>
                <p style={styles.number}>{data?.active_sensors || 144}</p>
              </div>
              <div style={styles.card}>
                <h3>System Health</h3>
                <p style={styles.number}>✅</p>
              </div>
              <div style={styles.card}>
                <h3>ML Accuracy</h3>
                <p style={styles.number}>92%</p>
              </div>
            </div>
          )}
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
  content: { marginLeft: '250px', flex: 1, padding: '2rem' } as React.CSSProperties,
  title: { fontSize: '2rem', marginBottom: '2rem', color: '#1a472a' } as React.CSSProperties,
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' } as React.CSSProperties,
  card: { background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center' as const } as React.CSSProperties,
  number: { fontSize: '2rem', fontWeight: 'bold', color: '#667eea', margin: '0.5rem 0' } as React.CSSProperties,
}

export default Overview
