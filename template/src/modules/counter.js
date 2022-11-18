import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "stores/counterSlice";

// eslint-disable-next-line import/prefer-default-export
export function useCounter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return { count, onIncrement, onDecrement };
}
