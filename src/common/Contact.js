const Contact = () => {
  return (
    <>
      <section id='contact' class='contact'>
        <div class='container'>
          <div class='section-title' data-aos='fade-up'>
            <h2>Contact by ...</h2>
          </div>

          <div class='row'>
            <div
              class='col-lg-8 mt-4 mt-md-0'
              data-aos='fade-up'
              data-aos-delay='200'
              style={{margin:'auto'}}
            >
              <div class='info' style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                  <i class='ri-mail-send-line'></i>
                  <p>true.dragon.p@gmail.com</p>
                </div>

                
                <div>
                  <i class='bi bi-skype'></i>
                  <p><a href="https://join.skype.com/invite/Eg4iT4KF49Ne">Eg4iT4KF49Ne</a></p>
                </div>

                <div>
                  <i class='bi bi-whatsapp'></i>
                  <p>+1 432 614 0315</p>
                </div>

                <div>
                  <i class='bi bi-github'></i>
                  <p><a href="https://github.com/Belief0713">Belief0713</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
