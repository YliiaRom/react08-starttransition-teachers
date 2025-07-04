import { useMemo } from "react";
import List from "../components/List";

const listText = [
  "Потягом до Ужгорода",
  "Шукайте бабау Галю (вона дорогу покаже)",
];

function Contacts() {
  const listTxt = useMemo(() => <List list={listText} />, []);
  return (
    <div className="sectionWrap">
      <h2>Нас дуже легко знайти</h2>
      {listTxt}
      <p>До зустрічі !!!</p>
    </div>
  );
}
export default Contacts;
