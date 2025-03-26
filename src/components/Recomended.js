


import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.jpg";
import c3 from "../assets/images/c3.jpg";
import c4 from "../assets/images/c4.jpg";



function Recomended(){
    return (
        <div className="recomended">
      <h1 className="recomended__title">Recommended for you</h1>
      <p>pick the best fit</p>
      <div className="recomended_container">
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
      </div>
    </div>
    )
}

export default Recomended