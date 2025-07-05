import { startTransition, useOptimistic, useState } from "react";
import bgImg from "../../assets/img/user.jpg";
import styles from "./StylesTask.module.css";

const fakeApi = {
  //--створюємо метод add для імітації api
  add: async (text) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.2) {
          reject(new Error(`Помілка сервера при додаванні завдання!`));
        } else {
          const newTodo = { id: Date.now(), text };
          console.log(`на сервері: успішно додано`, newTodo);
          resolve(newTodo);
        }
      }, 2000);
    });
  },
};

function UseOptimisticChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [valueMessage, setValueMessage] = useState("");
  const [messages, setMessage] = useState(() => []);

  const [optimisticMessage, addOptimisticMessage] = useOptimistic(
    messages,
    (currentMessages, optMessageObj) => [...currentMessages, optMessageObj]
  );

  //-- sendMessageToServer
  const sendMessageToServer = async (tempId, valueMessage) => {
    try {
      const savedMessage = await fakeApi.add(valueMessage);
      setMessage((prev) => [
        ...prev.filter((msg) => msg.id !== tempId),
        savedMessage,
      ]);
    } catch (err) {
      console.error(err.message);
      alert('"Помилка надсилання"- повідомлення сервера');
      setMessage((prev) => prev.filter((msg) => msg.id !== tempId));
    }
  };

  //-----працює кнопка
  const handleSend = (valueMessage) => {
    const tempId = Date.now();

    //---optimisticMessage /робить {}
    const optimisticMessage = { id: tempId, valueMessage, pending: true };

    startTransition(async () => {
      //---addOptimisticMessage /  в f передає значення
      addOptimisticMessage(optimisticMessage);
      await sendMessageToServer(tempId, valueMessage);
    });
  };
  return (
    <div className="sectionWrap02" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <h2>useOptimistic()</h2>

        <p className="decorNum">2</p>
        <div>
          <p>
            Створити f - якщо смс додається &lt; 0.2s -сервер не додасть до
            інших смс (створюється &#123;id: Date.now(), text&#125;)
          </p>
          <p>Відобразити обіцянку наче все ок- поки загружає</p>
        </div>
        <div onClick={() => setIsVisible((v) => !v)} className="more">
          CODE
        </div>
        {isVisible && (
          <div className="moreBody">
            <h2>Заміна обіцянки на відповідь з сервера</h2>
            <p>
              const savedMessage = await fakeApi.add(valueMessage);
              <br />
              setMessage((prev) =&gt; [<br /> ...prev.filter((msg) =&gt; msg.id
              !== tempId),
              <br />
              savedMessage, ]);
            </p>
          </div>
        )}
      </div>

      {/* =====================rez */}
      <div className="solution">
        <h2>
          <span style={{ fontSize: "60px" }}>💬</span>чат <br />
          результат дивитись во вкладці інструментів розробника (Components)
        </h2>

        <label>
          введіть текст
          <input
            type="text"
            placeholder="sms..."
            onChange={(e) => setValueMessage(e.target.value)}
          />
        </label>
        <button onClick={() => handleSend(valueMessage)}>Надіслати</button>

        <ul className={styles.messageBox}>
          <li key="first-item">💬 Hello...</li>
          {optimisticMessage.map((msg) => (
            <li key={msg.id}>
              {msg.text}
              {msg.pending && <p>{valueMessage}(відправляється ...)</p>}
            </li>
          ))}
        </ul>
        <h2>
          значення виводить хук useOptimistic()/ коли є результат з сервера
          значення замінюється
        </h2>
        <hr />
        <div className="more" onClick={() => setIsOpen((v) => !v)}>
          Server
        </div>
        {isOpen && (
          <div className="moreBody">
            <p>
              const fakeApi = &#123; <br />
              add: async (text) =&gt; &#123;
              <br />
              return new Promise((resolve, reject) =&gt; &#123;
              <br />
              setTimeout(() =&gt; &#123;
              <br />
              if (Math.random() &lt; 0.2) &#123;
              <br />
              reject(new Error(`Помілка сервера при додаванні завдання!`));
              <br />
              &#125; else &#123;
              <br />
              const newTodo = &#123; id: Date.now(), text &#125;;
              <br />
              console.log(`на сервері: успішно додано`, newTodo);
              <br />
              resolve(newTodo);
              <br />
              &#125;
              <br />
              &#125;, 2000);
              <br />
              &#125;);
              <br />
              &#125;,
              <br />
              &#125;;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default UseOptimisticChat;
