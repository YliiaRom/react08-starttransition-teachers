import bgImg from "../assets/img/grid.jpg";
function x() {
  return (
    <div className="sectionWrap02" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum"></p>
      </div>

      <div className="solution"></div>
    </div>
  );
}
export default x;
