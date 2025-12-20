import { useEffect, useRef } from 'react';

export default function Education() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animation class with staggered delay
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, index * 200); // 200ms delay between each item
        }
      });
    }, observerOptions);

    // Observe all timeline items
    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education">
      <div className="container">
        <h2>Education</h2>

        <div className="timeline" ref={timelineRef}>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>PG-DAC – Sunbeam Pune</h3>
              <p>Aug 2025 – Feb 2026</p>
              <p>
                C++, DBT, Java, Advanced Java, Web Technologies, DSA  
                <br />
                Project: Online Electronic Shop Portal
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>B.E. Computer Engineering</h3>
              <p>Konkan Gyanpeeth College of Engineering <b>(University of Mumbai)</b></p>
              <p>June 2021 – May 2025</p>
              <p className="education-grade">
                <strong>CGPA: 7.65/10</strong> (First Class with Distinction)
              </p>
              <p>
                Project: College Placement Portal
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>XII (HSC)</h3>
              <p>B.K Birla College Of Arts , Science And Commerce</p>
              <p>June 2019 – March 2021</p>
              <p className="education-grade">
                <strong>Percentage: 78.50%</strong> (Science Stream)
              </p>
              <p>
                Subjects: Physics, Chemistry, Mathematics
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>X (SSC)</h3>
              <p>N.R.C School</p>
              <p>June 2018 – March 2019</p>
              <p className="education-grade">
                <strong>Percentage: 76.80%</strong>
              </p>
              <p>
                General Education with focus on foundational subjects
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
