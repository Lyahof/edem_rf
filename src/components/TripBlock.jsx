import { useDispatch, useSelector } from "react-redux";
import { useEffect, memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import TripItem from "./TripItem";
import {
  fetchInitialTrips,
  fetchMoreTrips,
  incrementOffset,
} from "./tripsSlice";
import Error from "./Error";

const TripBlock = memo(() => {
  const dispatch = useDispatch();
  const { items, status, hasMore, offset, error } = useSelector(
    (state) => state.trips
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchInitialTrips());
    }
  }, [dispatch, status]);

  const handleScroll = () => {
    dispatch(incrementOffset());
    dispatch(fetchMoreTrips(offset));
  };

  if (error) return <Error error={error} />;

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={handleScroll}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      scrollThreshold={0.95}
    >
      {items.map((trip) => (
        <div className="trip_block" key={trip.id}>
          <TripItem trip={trip} />
        </div>
      ))}
    </InfiniteScroll>
  );
});

export default TripBlock;
