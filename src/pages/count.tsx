import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../store/slices/counterSlice";
import { RootState } from "../store/store";

export default function Count() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        Increment
      </button>

      <p>{count}</p>
    </div>
  );
}
