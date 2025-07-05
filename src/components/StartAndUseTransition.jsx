import { startTransition, useState, useTransition } from "react";
import bgImg from "../assets/img/start-use.jpg";
import List from "./List";
const arrFirst = Array.from(
  { length: 10000 },
  (_, index) => `елемент - ${index}`
);
const arrSecond = Array.from(
  { length: 10000 },
  (_, index) => `елемент - ${index}`
);

function StartAndUseTransition() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecond, setIsOpenSecond] = useState(false);
  const [isOpenCode, setIsOpenCode] = useState(false);
  const [isPending, startTransition] = useTransition();

  const [firstQuery, setFirstQuery] = useState("");
  const [secondQuery, setSecondQuery] = useState("");

  const [firstList, setFirstList] = useState(arrFirst);
  const [secondList, setSecondList] = useState(arrSecond);

  const [firstFilteredList, setFirstFilteredList] = useState(arrFirst);
  const [secondFilteredList, setSecondFilteredList] = useState(secondList);
  //--1 input -блок введення
  const handlerChangeFirst = (e) => {
    console.log(`----- handlerChangeFirst(1)`);
    const val = e.target.value;
    setFirstQuery(e.target.value);

    //---блок інтерфейс
    const filteredFirst = firstList.filter((el) =>
      el.toLowerCase().includes(val.toLowerCase())
    );
    setFirstFilteredList(filteredFirst);
  };
  //--2 input - startTansition
  const handlerChangeSecond = (e) => {
    const val = e.target.value;
    setSecondQuery(val);
    startTransition(() => {
      const filteredVal = secondList.filter((el) =>
        el.toLowerCase().includes(val.toLowerCase())
      );

      setSecondFilteredList(filteredVal);
    });
  };

  return (
    <div className="sectionWrap02" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">1</p>
        <h2>useTransition()/ startTransition()</h2>
        <div>
          <p>
            порівняти відображення данних з startTransition (коли треба
            фільтрувати багато даних)
          </p>
        </div>

        <div className="more" onClick={() => setIsOpenCode((v) => !v)}>
          code
        </div>
        {isOpenCode && (
          <div className="moreBody" style={{ wordWrap: "break-word" }}>
            const handlerChangeSecond = (e) =&gt; &#123;
            <br />
            const val = e.target.value;
            <br />
            setSecondQuery(val);
            <br />
            startTransition(() =&gt;&#123;
            <br />
            const filteredVal = secondList.filter((el) =&gt;
            <br />
            el.toLowerCase().includes(val.toLowerCase())
            <br />
            );
            <br />
            setSecondFilteredList(filteredVal);
            <br />
            &#125;);
            <br />
            &#125;;
            <br />
          </div>
        )}
      </div>

      {/*==================== рішення */}

      <div className="solution">
        <h2>блокує введення/ довго не відображає</h2>
        <label>
          фільтрація без startTransition
          <input
            type="text"
            onChange={(e) => handlerChangeFirst(e)}
            placeholder="введіть..."
          />
        </label>
        <button onClick={() => setIsOpen((v) => !v)}>відкрити список</button>
        {isOpen && firstFilteredList.length > 0 && (
          <List list={firstFilteredList} />
        )}
        <hr />
        <h2> не блокує введення / </h2>
        <label>
          фільтрація з startTransition
          <input
            type="text"
            onChange={(e) => handlerChangeSecond(e)}
            placeholder="startTransition"
          />
        </label>
        <button onClick={() => setIsOpenSecond((v) => !v)}>
          відкрити список
        </button>
        {isPending && <p>Завантаження...</p>}
        {isOpenSecond && secondFilteredList.length > 0 && (
          <List list={secondFilteredList} />
        )}
      </div>
    </div>
  );
}
export default StartAndUseTransition;
