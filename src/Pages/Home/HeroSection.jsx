export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            I am Omkumar Solanki
          </h1>
          <p className="hero--section-description">
            A hardworking, highly motivated and detail-oriented Software Engineer with a strong background in full stack development and cloud computing.
          </p>
        </div>
        <a 
          href={process.env.REACT_APP_RESUME}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary view-resume"
        >
          View Resume
        </a>
        
      </div>
      <div className="hero--section--img">
        <img class="profile-image" src="./img/hero_img1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
