import Hero from "../Header/Herosection";
function About() {
  const data = {
    Name: "YSO About",
  };
  return (
    <div>
      <Hero myData={data} />
    </div>
  );
}
export default About;
