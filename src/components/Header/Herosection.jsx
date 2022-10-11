import "./Header.scss";
function Hero({myData}) {
  const {Name} = myData;
  return (
    <>
      <div className="Header-container">
        <div className="inner-img-container">
          <img src="./Images/Header.jpg" alt="Header" />
        </div>
        <div className="inner-text-container">
          <h1>{Name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            labore, nesciunt quaerat. Assumenda ut velit expedita, iste animi
            veritatis id. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Natus labore, nesciunt quaerat. Assumenda ut velit expedita,
            iste animi veritatis id.
          </p>
        </div>
      </div>
    </>
  );
}
export default Hero;
