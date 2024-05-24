const Count = () => {
  return (
    <section id='counts' className='counts'>
      <div className='container'>
        <div className='row'>
          <div className='image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start' data-aos='fade-right' data-aos-delay='150'>
            <img src='assets/img/counts-img.svg' alt='' className='img-fluid' />
          </div>

          <div className='col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0' data-aos='fade-left' data-aos-delay='300'>
            <div className='content d-flex flex-column justify-content-center'>
              <div className='row'>
                {/** Count boxes */}
                {countData.map((item, index) => (
                  <div key={index} className='col-md-6 d-md-flex align-items-md-stretch'>
                    <div className='count-box'>
                      <i className={item.icon}></i>
                      <span data-purecounter-start={item.start} data-purecounter-end={item.end} data-purecounter-duration='1' className='purecounter'></span>
                      <p><strong>{item.label}</strong></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const countData = [
  {
    icon: 'bi bi-emoji-smile',
    start: 0,
    end: 50,
    label: 'Happy Clients > 100'
  },
  {
    icon: 'bi bi-journal-richtext',
    start: 0,
    end: 43,
    label: 'Projects > 150'
  },
  {
    icon: 'bi bi-clock',
    start: 0,
    end: 6,
    label: 'Years of experience > 8 years'
  },
  {
    icon: 'bi bi-award',
    start: 0,
    end: 3,
    label: 'Awards > 2'
  }
];

export default Count;
