




import { HERO_SECTION_CLOUDINARY_URL } from '/lib/constants';

const HeroSection = () => {
  // CSS كامل في متغير واحد
  const cssStyles = `
    /* Hero Section Container */
    .hero-container {
      position: relative;
      width: 100%;
      overflow: hidden;
       height: 100vh;
    }

  
    /* للشاشات الكبيرة (Desktop) */
    @media (min-width: 1025px) {
      .hero-container {
        height: 95vh;
        
      }
      
      .hero-content {
        padding: 0 2rem;
        justify-content: center;
        align-items: self-start;
        justify-content: center !important;
      }
      
      .hero-title {
        font-size: 3.5rem;
        margin-bottom: 1.5rem;
      }
      
      .hero-description {
       text-align: start;
        font-size: 1.5rem;
        margin-bottom: 2.5rem;
        max-width: 800px;
      }
      
      .hero-buttons {
        flex-direction: row;
        gap: 1rem;
      }
        .hero-button-primary {
      padding: 0.8rem 1rem;
      }
      .hero-button-secondary{
      padding: 0.8rem 1rem;
      }
        .hero-stats {
        display: flex;
        margin-top: 4rem;
      }

      .scroll-indicator {
        display: block;
      }
    }
    
    /* للتابلت (Tablet) */
    @media (max-width: 1025px) and (min-width: 768px) {
      .hero-container {
        height: 70vh;
        min-height: 350px;
      }
      
      .hero-content {
        padding: 2rem 1.5rem 0;
        // justify-content: flex-start !important;
        align-items: self-start;
      }
      
      .hero-title {
        font-size: 2rem;
        margin-bottom: 1rem;
        line-height: 1.3;
      }
      
      .hero-description {
      text-align: start;
        font-size: 1rem;
        margin-bottom: 1.5rem;
        line-height: 1.4;
        // display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-width: 600px;

      }
      
      .hero-buttons {
        flex-direction: row;
        gap: 0.75rem;
      }
      
      .hero-button {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
      }
      
       .hero-stats {
 display: none !important;
       }
      
      .scroll-indicator {
        display:  none;
      }
    }
    
    /* للموبايل (Mobile) */
    @media (max-width: 767px) {
      .hero-container {
        height: 50vh;
        min-height: 280px;
      }
      
      .hero-content {
        padding: 1.5rem 1rem 0;
        justify-content: flex-start;
        align-items: center;
      }
      
      .hero-title {
        font-size: 1.5rem;
        margin-bottom: 0.75rem;
        line-height: 1.2;
      }
      
      .hero-description {
        font-size: 0.875rem;
        margin-bottom: 1rem;
        line-height: 1.3;
        // display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        max-width: 400px;
      }
      
      .hero-buttons {
        flex-direction: row;
        gap: 0.5rem;
        width: 100%;
        // max-width: 150px;
      }
      
      // .hero-button {
      //   // padding: 0.625rem 1.25rem;
      //   font-size: 0.875rem;
      //   width: 75%;
      // }

      .hero-buttons {
        flex-direction: row;
        gap: 1rem;
      }
      .hero-button-primary {
      padding: 0.3rem 0.5rem;
      }
      .hero-button-secondary{
      // display:none;
      padding: 0.3rem 0.5rem;
      }

   .hero-stats{
    display: none !important;
   }
    
      .scroll-indicator {
        display: none;
      }
    }
    
    /* العناصر المشتركة */
    .hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('${HERO_SECTION_CLOUDINARY_URL}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    
    .hero-content {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    
      text-align: center;
      color: white;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .hero-title {
      font-weight: 800;
      color: white;
    }
    
    .hero-title span {
      color: #FFEA03;
    }
    
    .hero-description {
      color: rgba(255, 255, 255, 0.95);
      font-weight: 400;
    }
    
    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
   
    }
    
    .hero-button-primary {
      background-color: #FFEA03;
      color: black;
      border: none;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s;
   
    }
    
    .hero-button-primary:hover {
      background-color: #2563EB;
    }
    
    .hero-button-secondary {
      background-color: transparent;
      color: white;
      border: 2px solid white;
      border-radius: 0.5rem;
      font-weight: 600;
      cursor: pointer;
      backdrop-filter: blur(5px);
      transition: background-color 0.2s;
      
    }
    
    .hero-button-secondary:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
   .hero-stats {
        display: flex;
          gap: 3rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
        }
   
    
    .stat-label {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.9);
      margin-top: 0.25rem;
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(-50%) translateY(0);
      }
      40% {
        transform: translateX(-50%) translateY(-10px);
      }
      60% {
        transform: translateX(-50%) translateY(-5px);
      }
    }
  `;

  return (
    <>
      {/* إضافة CSS إلى head */}
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      
      {/* Hero Section */}
      <section className="hero-container">
        {/* الخلفية */}
        <div className="hero-bg">
          <div className="hero-overlay"></div>
        </div>
        
        {/* المحتوى */}
        <div className="hero-content">
          <h1 className="hero-title">
             قطع غيار سيارات  <span>Pressure</span>
          </h1>
          
          <p className="hero-description">
نوفر قطع غيار سيارات أصلية وبديلة لجميع الموديلات في مصر، بأسعار جملة وقطاعي مع توريد سريع ومخزون متوفر دائمًا. اطلب القطعة المناسبة الآن واستلم جودة مضمونة تدعم شغلك وتزيد أرباحك.        </p>
          
          <div className="hero-buttons">
            <button className="hero-button hero-button-primary">
             تواصل معنا الآن
            </button>
            <button className="hero-button hero-button-secondary">
              شاهد أعمالنا
            </button>
          </div>
          
          {/* الإحصائيات - تظهر فقط على Desktop */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">250+</div>
              <div className="stat-label">مشروع مكتمل</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">رضا العملاء</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">سنوات خبرة</div>
            </div>
          </div>
        </div>
        
        {/* سهم التمرير - يظهر فقط على Desktop */}
        <div className="scroll-indicator">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HeroSection;