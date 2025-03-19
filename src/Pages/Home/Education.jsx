import data from "../../data/index.json";

export default function Education() {
  return (
    <section className="Education--section" id="Education">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Education</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.Education?.map((item, index) => (
          <div key={index} className="Education--section--card">
            <div className="education--content">
              <img src={item.logo} alt={`${item.institution} Logo`} className="education--logo" />
              <div className="education--info">
                <h3 className="education--institution">{item.institution}</h3>
                <p className="education--degree">{item.degree}</p>
                <p className="education--duration">{item.duration}</p>
                <p className="education--gpa">GPA: {item.gpa}</p>
                <p className="education--coursework">Relevant Coursework: {item.coursework}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}