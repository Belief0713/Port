const Hero = () => {
  return (
    <>
      <section id='hero' class='d-flex align-items-center'>
        <div class='container'>
          <div class='row' style={{display:'flex',alignItems:'center'}}>
            <div class='col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center'>
              <h1 data-aos='fade-up' class=''>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'10px'}}>
                  <h1 className="">Leon Smith</h1>
                  <div id='contact' class='contact'>
                    <div class='container'>
                      <div class='row'>
                        <div
                          class='mt-md-0'
                          data-aos='fade-up'
                          data-aos-delay='200'

                        >
                          <div class='info' style={{display:'flex',justifyContent:'flex-start'}}>
                            <div style={{padding:'0px 5px'}} className="icon">
                              <a href="https://join.skype.com/invite/Eg4iT4KF49Ne"><i class='ri-mail-send-line'></i></a>
                            </div>
                            <div style={{padding:'0px 5px'}} className="icon">
                              <a href="https://join.skype.com/invite/Eg4iT4KF49Ne"><i class='bi bi-telegram'></i></a>
                            </div>
                            <div style={{padding:'0px 5px'}} className="icon">
                              <a href="https://join.skype.com/invite/Eg4iT4KF49Ne"><i class='bi bi-skype'></i></a>
                            </div>
                            <div style={{padding:'0px 5px'}} className="icon">
                              <a href="https://github.com/Belief0713"><i class='bi bi-github'></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
                <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                  <div>
                    <h4>Lodz, Poland</h4>
                    <h6 style={{color:'rgb(127,142,163)'}}>Location</h6>
                  </div>
                  <div>
                    <h4>7+ years</h4>
                    <h6 style={{color:'rgb(127,142,163)'}}>Experience</h6>
                  </div>
                  <div>
                    <h4>40+ projects done</h4>
                    <h6 style={{color:'rgb(127,142,163)'}}>Projects</h6>
                  </div>
                </div>
                <div style={{width:'100%' , backgroundColor:'rgb(127,142,163)',height:'1px', margin:'10px 0px'}}/>
                <h5 data-aos='fade-up' data-aos-delay='400' class='p-3'>
                <p className="typing_text">👋Hi, I'm a Full-Stack developer or Open-Source contributor</p>
                  <p className="typing_text"> If you wanna contact with me , Let's
                    <a href="#contact" title="Azik Samarkandiy" style={{margin:'0px 10px'}}>Contact</a> 
                  :)
                  </p>
                </h5>
              </h1>
            </div>
            <div class="page">
              <div>
                <div class="shadow-wrapper">
                  <div class="shadow">
                    <div>&nbsp;</div>
                  </div>
                </div>
                <div class="box-wrapper">
                  <div class="box-faces">
                    <div class="box-face box-face--is-front">
                      <img
                        src='assets/img/figma.png'
                        class='img-fluid'
                        alt=''
                      />
                    </div>
                    <div class="box-face box-face--is-back">
                      <img
                        src='assets/img/fullstack2.png'
                        class='img-fluid'
                        alt=''
                      />
                    </div>
                    <div class="box-face box-face--is-top">&nbsp;</div>
                    <div class="box-face box-face--is-bottom">&nbsp;</div>
                    <div class="box-face box-face--is-left">
                      <img
                        src='assets/img/blockchain.png'
                        class='img-fluid'
                        alt=''
                      />
                    </div>
                    <div class="box-face box-face--is-right">
                      <img
                        src='assets/img/frontend.jpg'
                        class='img-fluid'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
