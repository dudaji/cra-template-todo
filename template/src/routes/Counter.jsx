import { useCounter } from "modules/counter";
import PageTitle from "components/PageTitle";

function Counter() {
  const { count, onIncrement, onDecrement } = useCounter();

  return (
    <div>
      <PageTitle title="Counter" />
      <p>{count}</p>
      <button type="button" onClick={() => onIncrement()}>
        Increment
      </button>
      <button type="button" onClick={() => onDecrement()}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
