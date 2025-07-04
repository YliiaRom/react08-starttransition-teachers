import { memo } from "react";

function List({ list }) {
  return (
    <ul className="textList">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default memo(List);
