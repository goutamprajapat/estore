import "./Header.scss";
import Hero from "./Herosection";
function Header() {
  const data = {
    Name: "YSO STORE",
  }
  return (
    <>
   <Hero  myData={data}/>
    </>
  );
}
export default Header;
