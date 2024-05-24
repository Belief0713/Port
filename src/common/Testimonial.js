const Testimonial = () => {
  return (
    <section id='testimonials' className='testimonials section-bg'>
      <div className='container'>
        <div className='section-title' data-aos='fade-up'>
          <h2>Testimonials</h2>
        </div>

        <div
          className='testimonials-slider swiper frame-0f1b28 p-4 rounded-4'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='testimonial-wrap'>
                <div className='testimonial-item'>
                  <img
                    src='assets/img/testimonials/testimonials-1.jpg'
                    className='testimonial-img'
                    alt='Testimonial Image 1'
                  />
                  <h3>Liam Benjamin Foster</h3>
                  <h4>CEO &amp; Founder</h4>
                  <p>
                    <i className='bx bxs-quote-alt-left quote-icon-left'></i>
                    We were fortunate to have Alaa volunteer his programming
                    expertise for our organization. His passion for our cause
                    translated into a robust and user-friendly system that
                    streamlined our operations. Grateful for his contribution.
                    <i className='bx bxs-quote-alt-right quote-icon-right'></i>
                  </p>
                </div>
              </div>
            </div>
            {/* Other testimonials follow with similar structure */}
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
