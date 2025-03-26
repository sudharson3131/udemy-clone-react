import saleImage from "../assets/images/sale-image.jpg"


function Catgory(){
    return(
    <>
    <div className="categories">
      <p>Developement</p>
      <p>Buisness</p>
      <p>It & Software</p>
      <p>Personal Developement</p>
      <p>Design</p>
      <p>Marketting</p>
    </div>
    <div className="sale-image">
      <img src={saleImage} alt="saleimage" />
      <div class="sale-image__offer">
        <h1>Learning that gets you</h1>
        <p>Skills for your present (and your future). Get started with us.</p>
      </div>
    </div>
    </>
       
    )
}

export default Catgory