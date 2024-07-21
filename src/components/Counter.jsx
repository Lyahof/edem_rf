import { useSelector } from "react-redux";
import { memo } from "react";
import getTransportText from "../helpers/getTransportText";

const Counter = memo(() => {
  const { totalCount, error } = useSelector((state) => state.trips);
  const transportText = getTransportText(totalCount);

  return (
    !error && (
      <h1 className="title">
        {totalCount > 0 && `Найдено: ${totalCount} ${transportText}`}
      </h1>
    )
  );
});

export default Counter;
