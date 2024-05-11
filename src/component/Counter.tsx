import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { increment } from "../Redux/Slice/counterSlice";
import { decrement } from "../Redux/Slice/counterSlice";
import { incrementByAmount } from "../Redux/Slice/counterSlice";

function Counter() {
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      Counter:{value}
      <div>
        <button
          onClick={() => dispatch(increment())}
          className="bg-brown-500 p-2"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="bg-brown-500 p-2"
        >
          Decrement
        </button>

        <button
          className="bg-brown-500 p-2"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          increment by amount
        </button>
      </div>
    </div>
  );
}

export default Counter;
