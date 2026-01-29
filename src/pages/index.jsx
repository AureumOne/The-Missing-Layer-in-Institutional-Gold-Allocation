import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="AUREUM — STRUCTURAL STRESS TEST"
      description="Adversarial review for failure, governance and evidence integrity">
      <main>
        <div style={{
          backgroundColor: '#f5f5f5',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#e8e8e8',
              color: '#666',
              padding: '0.5rem 1.5rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '500',
              letterSpacing: '1px',
              marginBottom: '2rem',
              textTransform: 'uppercase'
            }}>
              STRUCTURAL STRESS TEST
            </div>
            
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '600', 
              marginBottom: '1.5rem',
              color: '#2C3E50',
              lineHeight: '1.2'
            }}>
              Aureum One
            </h1>
            
            <p style={{ 
              fontSize: '1.3rem', 
              marginBottom: '2.5rem',
              color: '#7a7a7a',
              fontWeight: '400'
            }}>
              Adversarial review for failure, governance and evidence integrity
            </p>
            
            <p style={{ 
              fontSize: '1rem', 
              maxWidth: '700px', 
              margin: '0 auto 2rem', 
              lineHeight: '1.8',
              color: '#5a6c7d'
            }}>
              Aureum One has been designed as a non-custodial patrimonial infrastructure, oriented to institutional profiles that require structural segregation, explicit governance and verifiable evidence in the coordination of physical gold custody with independent third parties.
            </p>
            
            <p style={{ 
              fontSize: '1rem', 
              maxWidth: '700px', 
              margin: '0 auto 3rem', 
              lineHeight: '1.8',
              color: '#5a6c7d'
            }}>
              It does not assume possession of assets, does not intermediate investments, nor makes economic promises. It operates as a control, coordination and evidence structure, designed to reduce fiduciary risk and regulatory ambiguity through architecture, not through opinion.
            </p>
            
            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                to="/docs/que-es-esto"
                style={{ 
                  backgroundColor: '#2C3E50',
                  color: 'white',
                  padding: '0.9rem 2rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: '500',
                  border: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1a252f'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2C3E50'}>
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
