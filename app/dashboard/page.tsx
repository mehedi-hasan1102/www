'use client';

import { useEffect, useState } from 'react';
import GitHubActivity from '../components/GitHubActivity';

// Dashboard Skeleton Component
const DashboardSkeleton = () => {
  const isDarkMode = typeof document !== 'undefined' ? !document.documentElement.classList.contains('light-mode') : true;
  const shimmerBg = isDarkMode ? '#2a2a2a' : '#d1d5db';

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Header Section Skeleton */}
      <section style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Title Skeleton */}
          <div
            style={{
              width: '280px',
              height: '48px',
              borderRadius: '8px',
              background: shimmerBg,
              marginBottom: '24px',
              animation: 'shimmer 2s infinite',
            }}
          />

          {/* Description Skeleton */}
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '500px',
                height: '20px',
                borderRadius: '4px',
                background: shimmerBg,
                animation: 'shimmer 2s infinite',
              }}
            />
          </div>
        </div>
      </section>

      {/* GitHub Activity Section Skeleton */}
      <section style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Section Header Skeleton */}
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div
              style={{
                width: '250px',
                height: '32px',
                borderRadius: '8px',
                background: shimmerBg,
                marginBottom: '16px',
                animation: 'shimmer 2s infinite',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                height: '20px',
                borderRadius: '4px',
                background: shimmerBg,
                animation: 'shimmer 2s infinite',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </div>

          {/* Graph Skeleton */}
          <div
            style={{
              width: '100%',
              height: '200px',
              borderRadius: '12px',
              background: shimmerBg,
              animation: 'shimmer 2s infinite',
              border: '1px solid rgba(6, 182, 212, 0.1)',
            }}
          />
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
          Dashboard
        </h1>
        <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
          Track my development activity and contributions.
        </p>
      </div>
      
      <GitHubActivity />
    </div>
  );
}
