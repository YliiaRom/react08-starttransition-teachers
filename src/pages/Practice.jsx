import StartAndUseTransition from "../components/StartAndUseTransition";
import UseOptimisticChat from "../components/Task/UseOptimisticChat";

function Practice() {
  return (
    <div className="sectionWrap">
      <StartAndUseTransition />
      <h2>
        useOptimistic() - видобразити результат(карту) + повідомлення
        (відправляється ...)
      </h2>
      <UseOptimisticChat />
    </div>
  );
}
export default Practice;
