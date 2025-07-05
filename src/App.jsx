import ApiRoutes from "./components/routes/ApiRoutes.jsx";
import "./App.css";
import Practice from "./pages/Practice";

function App() {
  return (
    <>
      <h1>
        useTransition(), startTransition(), useOptimistic()- "результат +
        повідомлення" <br />
      </h1>
      <ApiRoutes />
    </>
  );
}

export default App;
