import Item from "./Item";

function List({ list, onSelect, isSelect }) {
  return (
    <ul className="cardTeacherList">
      {list.map((item, index) => (
        <li key={index}>
          <Item item={item} onSelect={onSelect} isSelect={isSelect} />
        </li>
      ))}
    </ul>
  );
}
export default List;
