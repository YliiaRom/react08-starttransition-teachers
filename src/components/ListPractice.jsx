import ItemPractice from "./ItemPractice";

function ListPractice({ list }) {
  return (
    <ul className="list">
      <li key={123}>20 000 products</li>
      {list.map((item, index) => (
        <li key={index}>
          <ItemPractice item={item} />
        </li>
      ))}
    </ul>
  );
}
export default ListPractice;
