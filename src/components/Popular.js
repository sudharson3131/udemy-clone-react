import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";
import c5 from "../assets/images/c5.jpg";
import c6 from "../assets/images/c6.jpg";
import c7 from "../assets/images/c7.jpg";
import c8 from "../assets/images/c8.jpg";

function Popular() {
    return (
        <div className="popular">
      <h1 className="popular__title">Most Popular</h1>
      <p className="popular__subtitle">Pick the best pit</p>
      <div className="popular__container">
        <div className="course-card">
          <img src={c1} alt="C1" />
          <h3>2025 Python Master Programming</h3>
          <p>Colt Steele</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>449 <del>4999</del></p>
        </div>
        <div className="course-card">
          <img src={c2} alt="C2" />
          <h3>2025 Mastering SEO With ChatGPT</h3>
          <p>Rob Percival.</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>449 <del>2999</del></p>
        </div>
        <div className="course-card">
          <img src={c3} alt="C3" />
          <h3>Master Cyber Sequirty 2025</h3>
          <p>Angela Yu</p>
          <p>4.0 ⭐⭐⭐⭐</p>
          <p>449 <del>5999</del></p>
        </div>
        <div className="course-card">
          <img src={c4} alt="C4" />
          <h3>2025 Full Stack Developer Course</h3>
          <p>Ben Tristem</p>
          <p>3.0 ⭐⭐</p>
          <p>449 <del>3999</del></p>
        </div>
        <div className="course-card">
          <img src={c5} alt="C5" />
          <h3>Microsoft Power BI Desktop for Business Intelligence</h3>
          <p>Jose Portilla</p>
          <p>3.9 ⭐⭐⭐</p>
          <p>900 <del>6999</del></p>
        </div>
        <div className="course-card">
          <img src={c6} alt="C6" />
          <h3>The Complete Web Developer Course 3.0</h3>
          <p>Phil Ebiner</p>
          <p>5.0 ⭐⭐⭐⭐⭐</p>
          <p>550 <del>3999</del></p>
        </div>
        <div className="course-card">
          <img src={c7} alt="C7" />
          <h3>Java Masterclass 2025: 130+ Hours of Expert Lessons</h3>
          <p>Maximilian Schwarzmüller</p>
          <p>4.9 ⭐⭐⭐⭐</p>
          <p>700 <del>7999</del></p>
        </div>
        <div className="course-card">
          <img src={c8} alt="C8" />
          <h3>The Complete ReactJs Course - Basics to Advanced  </h3>
          <p>Stephane Maarek</p>
          <p>5.0 ⭐⭐⭐⭐⭐</p>
          <p>600 <del>33999</del></p>
        </div>
      </div>
    </div>
    );
}

export default Popular;
