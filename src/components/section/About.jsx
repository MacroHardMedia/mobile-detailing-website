import "./about.scss";
import aboutImg from "../../assets/about-img.png";
import { useSEO } from "../../hooks/useSEO";

function About() {
  // SEO optimization for About section
  useSEO({
    title: "About Elite Mobile Detailing - Professional Car Care Experts",
    description:
      "Learn about Elite Mobile Detailing's professional team and commitment to exceptional car care services. Trusted by car owners for expert mobile detailing.",
    keywords:
      "mobile detailing experts, professional car care team, auto detailing professionals, car detailing experience",
  });

  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__image">
            <img src={aboutImg} alt="Elite Mobile Detailing Team" />
          </div>

          <div className="about__text">
            <h2 className="about__title">
              Why <span className="about__highlight">500+ Local Drivers </span>
              Trust Us With Their Vehicle's Care
            </h2>

            <p className="about__description">
              We're not just another detailing service. We're certified
              automotive care professionals with 10+ years of experience helping
              busy executives, luxury car owners, dealerships, and automotive
              enthusiasts maintain extraordinary vehicle condition without the
              hassle of traditional shops.
            </p>

            <div className="about__features">
              <div className="feature">
                <h4>Licensed and insured</h4>
                <p>
                  We are a professional business with licensing in the state of
                  California. We are trusted, and experienced.
                </p>
              </div>
              {/* <div className="feature">
                <h4>Interior & Exterior Specialist</h4>
                <p>Specializing in interior and exterior detailing</p>
              </div>
              <div className="feature">
                <h4>Mobile Service Pioneer</h4>
                <p>5+ years perfecting on-location detailing methodology</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
