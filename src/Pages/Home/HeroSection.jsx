export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          {/* <p className="section--title">Hey, I'm OM</p> */}
          <h1 className="hero--section--title">
            {/* <span className="hero--section-title--color">Hey</span>{" "}
            <br /> */}
            I am Omkumar Solanki
          </h1>
          <p className="hero--section-description">
            Hardworking, highly motivated and detail-oriented Software Engineer with a strong background in full stack development and cloud computing.
          </p>
        </div>
        {/* <button className="btn btn-primary">View Resume</button> */}
        <a 
          href="https://drive.google.com/file/d/12gUiuGNCWF185F9U5IQ_7wCNsxgt7qxM/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
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
