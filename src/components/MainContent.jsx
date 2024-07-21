import Counter from "./Counter";
import TripBlock from "./TripBlock";

function MainContent() {
  return (
    <main className="main">
      <div className="trip_list">
        <Counter />
        <TripBlock />
      </div>
    </main>
  );
}

export default MainContent;
