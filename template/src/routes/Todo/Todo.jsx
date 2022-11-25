import PageTitle from "components/PageTitle";
import Create from "./Create";
import List from "./List";

function Todo() {
  return (
    <div>
      <PageTitle title="Todo List" />
      <Create />
      <List />
    </div>
  );
}

export default Todo;
