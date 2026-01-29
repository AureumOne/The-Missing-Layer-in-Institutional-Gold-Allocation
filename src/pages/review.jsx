import React from 'react';
import Layout from '@theme/Layout';

export default function Review() {
  return (
    <Layout
      title="Submit Review"
      description="Submit your technical review">
      <main>
        <div className="container" style={{ padding: '3rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <h1>Submit Review</h1>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              Please share your technical assessment of the Aureum One architecture.
              Focus on structural risks, control gaps, and concrete recommendations.
            </p>

            <form 
              action="https://formspree.io/f/YOUR_FORM_ID" 
              method="POST"
              style={{
                backgroundColor: '#f9f9f9',
                padding: '2rem',
                borderRadius: '8px',
                border: '1px solid #e0e0e0'
              }}>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="organization" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Organization (optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="review" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Technical Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  rows="12"
                  required
                  placeholder="Consider addressing:
• What design elements generate the most confidence and why?
• Where do you identify potential risks (structural or operational)?
• What controls are missing or should be reinforced?
• What improvements would you apply without altering the non-custodial model?
• Additional comments (exceptions, scalability, read-only audit)."
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  type="submit"
                  className="button button--primary"
                  style={{ flex: 1 }}>
                  Submit Review
                </button>
                <a
                  href="/aureum-structural-stress-test/home"
                  className="button button--secondary"
                  style={{ flex: 1, textAlign: 'center', textDecoration: 'none', display: 'inline-block', lineHeight: '1.5' }}>
                  Cancel
                </a>
              </div>
            </form>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: '#e3f2fd',
              borderRadius: '8px'
            }}>
              <h3 style={{ marginTop: 0 }}>Confidentiality</h3>
              <p style={{ marginBottom: 0 }}>
                Your review will be treated with discretion and will not be shared with third parties 
                without explicit authorization.
              </p>
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <p style={{ marginBottom: '0.5rem' }}>
                Alternatively, you can send your review directly to:
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>
                  <a href="mailto:ricardo.daher@aureumone.io">
                    ricardo.daher@aureumone.io
                  </a>
                </strong>
              </p>
            </div>

          </div>
        </div>
      </main>
    </Layout>
  );
}
