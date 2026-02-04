'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiDownload } from 'react-icons/fi';
import styles from './projectDetails.module.css';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  frontendUrl: string;
  backendUrl: string;
  year: string;
  challenges?: string[];
  futurePlans?: string[];
}

// Skeleton Loading Component
const ProjectSkeleton = () => {
  const isDarkMode = typeof document !== 'undefined' ? !document.documentElement.classList.contains('light-mode') : true;
  const shimmerBg = isDarkMode ? '#2a2a2a' : '#e0e0e0';

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      {/* Back Button Skeleton */}
      <div style={{ padding: '24px', marginBottom: '16px' }}>
        <div
          style={{
            width: '120px',
            height: '24px',
            borderRadius: '4px',
            background: shimmerBg,
            animation: 'shimmer 2s infinite',
          }}
        />
      </div>

      {/* Hero Section Skeleton */}
      <section style={{ padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            {/* Title Skeleton */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  width: '80%',
                  height: '48px',
                  borderRadius: '8px',
                  background: shimmerBg,
                  marginBottom: '16px',
                  animation: 'shimmer 2s infinite',
                }}
              />
              <div
                style={{
                  width: '60%',
                  height: '48px',
                  borderRadius: '8px',
                  background: shimmerBg,
                  animation: 'shimmer 2s infinite',
                }}
              />
            </div>

            {/* Category Skeleton */}
            <div
              style={{
                width: '100px',
                height: '20px',
                borderRadius: '4px',
                background: shimmerBg,
                marginBottom: '16px',
                animation: 'shimmer 2s infinite',
              }}
            />

            {/* Description Skeleton */}
            <div style={{ marginBottom: '24px' }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: i === 3 ? '70%' : '100%',
                    height: '16px',
                    borderRadius: '4px',
                    background: shimmerBg,
                    marginBottom: '12px',
                    animation: 'shimmer 2s infinite',
                  }}
                />
              ))}
            </div>

            {/* Buttons Skeleton */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <div
                style={{
                  width: '140px',
                  height: '44px',
                  borderRadius: '8px',
                  background: shimmerBg,
                  animation: 'shimmer 2s infinite',
                }}
              />
              <div
                style={{
                  width: '140px',
                  height: '44px',
                  borderRadius: '8px',
                  background: shimmerBg,
                  animation: 'shimmer 2s infinite',
                }}
              />
            </div>
          </div>

          {/* Image Skeleton */}
          <div>
            <div
              style={{
                width: '100%',
                height: '400px',
                borderRadius: '12px',
                background: shimmerBg,
                animation: 'shimmer 2s infinite',
              }}
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Skeleton */}
      <section style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              width: '200px',
              height: '32px',
              borderRadius: '8px',
              background: shimmerBg,
              marginBottom: '24px',
              animation: 'shimmer 2s infinite',
            }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '8px',
                  background: shimmerBg,
                  animation: 'shimmer 2s infinite',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Skeleton */}
      <section style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              width: '200px',
              height: '32px',
              borderRadius: '8px',
              background: shimmerBg,
              marginBottom: '24px',
              animation: 'shimmer 2s infinite',
            }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: '100%',
                  height: '300px',
                  borderRadius: '8px',
                  background: shimmerBg,
                  animation: 'shimmer 2s infinite',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Cards Skeleton */}
      <section style={{ padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '1200px', margin: '0 auto' }}>
          {[1, 2].map((i) => (
            <div key={i} style={{ padding: '24px', borderRadius: '12px', background: isDarkMode ? '#1a1a1a' : '#f9f9f9' }}>
              <div
                style={{
                  fontSize: '32px',
                  marginBottom: '16px',
                  height: '32px',
                }}
              >
                {'   '}
              </div>
              <div
                style={{
                  width: '120px',
                  height: '24px',
                  borderRadius: '4px',
                  background: shimmerBg,
                  marginBottom: '16px',
                  animation: 'shimmer 2s infinite',
                }}
              />
              <div>
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} style={{ marginBottom: '12px' }}>
                    <div
                      style={{
                        width: '100%',
                        height: '16px',
                        borderRadius: '4px',
                        background: shimmerBg,
                        animation: 'shimmer 2s infinite',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
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

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const pageRef = useRef<HTMLDivElement>(null);
  
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch('/data/projects.json');
        const projects: Project[] = await response.json();
        const foundProject = projects.find((p) => p.slug === params.slug);
        
        if (foundProject) {
          setProject(foundProject);
        } else {
          setIsNotFound(true);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        setIsNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchProject();
    }
  }, [params.slug]);

  // GSAP animations
  useEffect(() => {
    if (!project || !pageRef.current) return;

    const ctx = gsap.context(() => {
      // Hero title split animation
      const titleChars = gsap.utils.toArray('.hero-title-char') as Element[];
      gsap.from(titleChars, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: 'power4.out',
      });

      // Simple image reveal animation - matching screenshot style
      gsap.from('[data-parallax-image]', {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      });

      // Reveal sections with scale
      const sections = gsap.utils.toArray('[data-reveal-section]') as Element[];
      if (sections.length > 0) {
        sections.forEach((section) => {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 60,
            scale: 0.95,
            duration: 1,
            ease: 'power3.out',
          });
        });
      }

      // Challenge items reveal
      const challengeItems = gsap.utils.toArray('[data-challenge-item]') as Element[];
      if (challengeItems.length > 0) {
        challengeItems.forEach((item) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
            },
            opacity: 0,
            x: -30,
            duration: 0.6,
            ease: 'power2.out',
          });
        });
      }

    }, pageRef);

    return () => ctx.revert();
  }, [project]);

  // Card glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(`.${styles.bottomCard}`);
      cards.forEach((card) => {
        const glow = card.querySelector(`.${styles.bottomGlow}`) as HTMLElement;
        if (!glow) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check if mouse is within card bounds
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          gsap.to(glow, {
            left: x - 60,
            top: y - 60,
            duration: 0.3,
            ease: 'power2.out',
          });
          glow.style.opacity = '0.8';
        } else {
          glow.style.opacity = '0';
        }
      });
    };

    const handleMouseLeave = () => {
      const cards = document.querySelectorAll(`.${styles.bottomCard}`);
      cards.forEach((card) => {
        const glow = card.querySelector(`.${styles.bottomGlow}`) as HTMLElement;
        if (glow) {
          glow.style.opacity = '0';
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (loading) {
    return <ProjectSkeleton />;
  }

  if (isNotFound || !project) {
    notFound();
  }

  return (
    <div ref={pageRef} className={styles.page}>
      {/* Back Button */}
      <div className={styles.backSection}>
        <button onClick={() => router.back()} className={styles.backLink} data-hero-animate>
          ← Back to Portfolio
        </button>
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              {project.title.split('').map((char, i) => (
                <span key={i} className="hero-title-char" style={{ display: 'inline-block' }}>
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            <p className={styles.categoryLabel} data-hero-animate>
              {project.category}
            </p>
            <p className={styles.heroDescription} data-hero-animate>
              {project.description}
            </p>

            <div className={styles.heroButtons}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>LIVE DEMO</span>
                <FiDownload size={18} aria-hidden="true" />
              </a>
              {project.frontendUrl && (
                <a
                  href={project.frontendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View Code
                </a>
              )}
            </div>
          </div>

          <div className={styles.heroRight} data-hero-animate>
            <div className={styles.projectPreview}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.previewImage}
                data-parallax-image
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.techSection} data-reveal-section>
        <h2 className={styles.techTitle}>TECH STACK</h2>
        <div className={styles.techGrid}>
          {project.tech.map((tech) => (
            <div key={tech} className={styles.techBadge}>
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className={styles.screenshotsSection} data-reveal-section>
        <h2 className={styles.sectionTitle}>SCREENSHOTS</h2>
        <div className={styles.screenshotsGrid}>
          <div className={styles.screenshot}>
            <img src={project.image} alt={`${project.title} screenshot 1`} />
          </div>
          <div className={styles.screenshot}>
            <img src={project.image} alt={`${project.title} screenshot 2`} />
          </div>
          <div className={styles.screenshot}>
            <img src={project.image} alt={`${project.title} screenshot 3`} />
          </div>
        </div>
      </section>

      {/* Challenges & Key Learnings */}
      <section className={styles.bottomSection} data-reveal-section>
        <div className={styles.bottomGrid}>
          <div className={styles.bottomCard}>
            <div className={styles.bottomGlow}></div>
            <div className={styles.cardIcon}>💡</div>
            <h3 className={styles.cardTitle}>Challenges</h3>
            <ul className={styles.cardList}>
              {(project.challenges && project.challenges.length > 0
                ? project.challenges
                : [
                    'Implementing real-time inventory sync across multiple sessions without race conditions',
                    'Optimizing database queries for large product catalogs with complex filtering',
                    'Building a flexible cart system that handles promotions, discounts, and tax calculations',
                    'Ensuring PCI compliance while maintaining a smooth checkout experience',
                  ]
              ).map((challenge, index) => (
                <li key={index} data-challenge-item>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.bottomCard}>
            <div className={styles.bottomGlow}></div>
            <div className={styles.cardIcon}>🎯</div>
            <h3 className={styles.cardTitle}>Key Learnings</h3>
            <ul className={styles.cardList}>
              {(project.futurePlans && project.futurePlans.length > 0
                ? project.futurePlans
                : [
                    'Mastered optimistic UI updates with proper rollback strategies',
                    'Learned advanced PostgreSQL indexing and query optimization techniques',
                    'Gained deep understanding of payment processing workflows and security',
                    'Improved skills in building accessible, responsive e-commerce interfaces',
                  ]
              ).map((learning, index) => (
                <li key={index}>
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
