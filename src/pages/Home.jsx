import { useMemo } from "react";
import List from "../components/List";

const listText = [
  "*магазин працює коли хоче",
  "*товари надсилає швидко",
  "*на запитання відповідає коли висинається",
  "* якщо не відморозив фразами, Ви найулюбленні покупці",
];
function Home() {
  const listHome = useMemo(() => {
    return <List list={listText} />;
  }, [listText]);
  return (
    <div className="sectionWrap">
      <h2>Home</h2>
      <p>Це магазин належить програмісту на фрілансі</p>
      <p>Тому:</p>
      {listHome}
    </div>
  );
}
export default Home;
