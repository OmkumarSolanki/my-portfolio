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
            hardworking, highly motivated and detail-oriented Software Engineer with a strong background in full stack development and cloud computing.
          </p>
        </div>
        <button className="btn btn-primary">View Resume</button>
      </div>
      <div className="hero--section--img">
        <img class="profile-image" src="./img/hero_img1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
