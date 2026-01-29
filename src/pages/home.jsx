import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Adversarial review for failure, governance and evidence integrity">
      <main>
        <div className="hero" style={{
          backgroundColor: '#1a1a1a',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center'
        }}>
          <div className="container">
            <h1 className="hero__title" style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              AUREUM — STRUCTURAL STRESS TEST
            </h1>
            <p className="hero__subtitle" style={{
              fontSize: '1.5rem',
              marginTop: '1rem',
              fontWeight: '300'
            }}>
              Adversarial review for failure, governance and evidence integrity
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <section style={{ marginBottom: '3rem' }}>
              <h2>This document exists to be attacked.</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                It is not a pitch, not a proposal, not an endorsement request and not a validation exercise.
                It does not seek agreement, approval or comfort.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                The sole purpose of this material is to expose the architectural structure of Aureum One 
                to adversarial scrutiny, with emphasis on:
              </p>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li><strong>failure modes</strong></li>
                <li><strong>governance boundaries</strong></li>
                <li><strong>evidence integrity</strong></li>
                <li><strong>responsibility limits</strong></li>
              </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2>What to Review</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                This documentation evaluates architecture, not operations. It focuses on:
              </p>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Segregation of roles and authority boundaries</li>
                <li>Evidence generation and reconciliation logic</li>
                <li>Failure containment and stress scenarios</li>
                <li>Non-custodial infrastructure design</li>
              </ul>
            </section>

            <section style={{ marginBottom: '3rem' }}>
              <h2>Expected Feedback</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                No formal report is expected. A brief technical comment is sufficient if it identifies:
              </p>
              <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                <li>Relevant risks</li>
                <li>Critical controls</li>
                <li>Concrete recommendations</li>
              </ul>
            </section>

            <div style={{ 
              textAlign: 'center', 
              marginTop: '3rem',
              padding: '2rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px'
            }}>
              <Link
                className="button button--primary button--lg"
                to="/docs/purpose"
                style={{ marginRight: '1rem', marginBottom: '1rem' }}>
                Read Documentation
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/review"
                style={{ marginBottom: '1rem' }}>
                Submit Review
              </Link>
            </div>

            <section style={{ 
              marginTop: '3rem',
              padding: '1.5rem',
              backgroundColor: '#fff3cd',
              borderLeft: '4px solid #ffc107',
              borderRadius: '4px'
            }}>
              <h3 style={{ marginTop: 0 }}>Confidentiality</h3>
              <p style={{ marginBottom: 0 }}>
                This material is shared exclusively for technical review. 
                Its content is confidential and will not be redistributed without authorization.
              </p>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
