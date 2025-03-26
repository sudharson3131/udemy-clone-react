function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__s1">
        <h1 className="navbar__s1__title">udemy</h1>
      </div>
      <div className="navbar__s2">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="search for anything here tech buisness..."
        />
      </div>
      <div className="navbar__s3">
        <p>Courses</p>
        <p>My Learing</p>
        <i
          className="fa-solid fa-cart-shopping"
          style={{ color: "#050505" }}
        ></i>
        <i className="fa-solid fa-bell" style={{ color: "#000000" }}></i>
        <i className="fa-solid fa-user" style={{ color: "#050505" }}></i>
      </div>
    </div>
  );
}

export default Navbar