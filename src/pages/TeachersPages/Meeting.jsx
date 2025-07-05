import { useLocation } from "react-router";
import List from "../../components/List";

function Meeting() {
  const { state } = useLocation();
  let content;
  if (state?.teachers) content = <List list={state?.teachers} />;
  else content = <h2> No Teachers</h2>;
  return (
    <div className="sectionWrap">
      <h2>Meeting</h2>
      {content}
    </div>
  );
}
export default Meeting;
