import "./letter.css"

const About = () => {
  return (
    <div id='about' className='about'>
      <div class="wrapper">
        <label for="target-modal" class="btn">To Client</label>
      </div>

      <input type="checkbox" id="target-modal"></input>
      <div class="modal">
        <div class="modal-inner">
          <label for="target-modal" class="close-modal"></label>
          <h2>Hi!</h2>
          <h3>This is my working principle and this is how I have done it so far.
I have long since realized that the best technology will bring the best results not only to client but also to my life.


But I have a passion for making our projects successful.
Trust your dream and let's make our vision true together !</h3>
        </div>
        <label for="target-modal" class="overlay-modal"></label>
      </div>
    </div>
    
  );
};
export default About;
