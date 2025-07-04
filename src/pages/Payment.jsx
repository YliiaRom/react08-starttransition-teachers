import { memo, useMemo } from "react";
import List from "../components/List";

const listPaymentType = [
  "При отриманні",
  "Переказ на картку",
  "Записати у зошит",
];
function Payment() {
  const listText = useMemo(() => <List list={listPaymentType} />, []);
  return (
    <div className="sectionWrap">
      <h2>Оплата:</h2>
      {listText}
    </div>
  );
}
export default memo(Payment);
