
// export default ExportBanner;


import React, { useState } from 'react';

const ExportBanner = () => {
  const [isHoveredPrimary, setIsHoveredPrimary] = useState(false);
  const [isHoveredSecondary, setIsHoveredSecondary] = useState(false);
  
  // رابط الصورة من Cloudinary - حط الرابط بتاعك هنا
  const cloudinaryImageUrl = "https://res.cloudinary.com/dybnfsaxq/image/upload/v1767913520/beodrctyrysss93nuxas.png";

  // تأثيرات hover باستخدام state
  const primaryButtonStyle = {
    ...styles.primaryButton,
    backgroundColor: isHoveredPrimary ? '#FFEA03' : '#FFEA03',
    transform: isHoveredPrimary ? 'translateY(-2px)' : 'translateY(0)',
    boxShadow: isHoveredPrimary ? '0 6px 8px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)'
  };

  const secondaryButtonStyle = {
    ...styles.secondaryButton,
    backgroundColor: isHoveredSecondary ? 'white' : 'transparent',
    color: isHoveredSecondary ? 'black' : 'white'
  };

  return (
    <section style={styles.banner}>
      {/* الخلفية */}
      <div style={styles.imageContainer}>
        <img
          src={cloudinaryImageUrl}
          alt="خدمات الاستيراد"
          style={styles.image}
          onError={(e) => {
            // fallback لو الصورة مش ظاهرة
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
          }}
        />
        <div style={styles.overlay} />
      </div>

      {/* المحتوى */}
      <div style={styles.content}>
        <h1 style={styles.title}>
          خدمات الاستيراد <span style={styles.highlight}>المتميزة</span>
        </h1>
        
        <p style={styles.description}>
       نوفر حلول الاستيراد شاملة تساعد عملك على التوسع . 
          بداية من المستندات حتى وصول البضاعة بأمان.
        </p>

        <div style={styles.featuresContainer}>
          <div style={styles.featureItem}>
            <span style={styles.featureIcon}>📄</span>
            <span style={styles.featureText}>إعداد المستندات</span>
           
          </div>
          <div style={styles.featureItem}>
            <span style={styles.featureIcon}>🚚</span>
            <span style={styles.featureText}>خدمات الشحن</span>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.featureIcon}>🌍</span>
            <span style={styles.featureText}>تغطية عالمية</span>
          </div>
        </div>

        <div style={styles.buttonsContainer}>
          <button 
            style={primaryButtonStyle}
            onMouseEnter={() => setIsHoveredPrimary(true)}
            onMouseLeave={() => setIsHoveredPrimary(false)}
            onClick={() => window.location.href = '/export-request'}
          >
            ابدأ الاستيراد الان
          </button>
          <button 
            style={secondaryButtonStyle}
            onMouseEnter={() => setIsHoveredSecondary(true)}
            onMouseLeave={() => setIsHoveredSecondary(false)}
            onClick={() => window.location.href = '/services'}
          >
            تعرف على الخدمات
          </button>
        </div>
      </div>

      {/* Media Queries */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section h1 {
            font-size: 2.8rem !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            min-height: 80vh !important;
          }
          section h1 {
            font-size: 2.2rem !important;
          }
          .buttons-container {
            flex-direction: column;
          }
             button  {
            padding: 0.5rem 0.5rem !important;
            }
        }
        
        @media (max-width: 480px) {
          section h1 {
            font-size: 1.8rem !important;
          }
          .features-container {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  banner: {
    position: 'relative',
    width: '100%',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)',
    zIndex: 2
  },
  content: {
    position: 'relative',
    zIndex: 3,
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: 1.2,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  },
  highlight: {
    color: '#FFEA03',
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
  },
  description: {
    fontSize: '1.25rem',
    marginBottom: '3rem',
    maxWidth: '700px',
    margin: '20px auto',
    lineHeight: 1.6,
    textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
    marginBottom:"20px"

  },
  featuresContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    marginBottom: '3rem',
    flexWrap: 'wrap'
  },
  featureItem: {
    display: 'flex',
    // flexDirection: 'column',
    // justifyContent:"center",
    alignItems: 'center',
    gap: '0.5rem',
    // padding: '1rem',
    padding: '2px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '2px',
    backdropFilter: 'blur(5px)',
    minWidth: '200px',
    transition: 'transform 0.3s ease'
  },
  featureIcon: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem'
  },
  featureText: {
    fontSize: '1.1rem',
    fontWeight: '500'
  },
  buttonsContainer: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  primaryButton: {
    backgroundColor: '#FFEA03',
    color: 'black',
    padding: '1rem 2.5rem',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.125rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '1rem 2.5rem',
    border: '2px solid white',
    borderRadius: '8px',
    fontSize: '1.125rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
};

export default ExportBanner;