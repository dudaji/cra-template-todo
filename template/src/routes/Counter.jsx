import { useCounter } from "modules/counter";

function Counter() {
  const { count, onIncrement, onDecrement } = useCounter();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          type="button"
          onClick={() => onIncrement()}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          type="button"
          onClick={() => onDecrement()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
