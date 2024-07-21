import countCargoTypes from "../helpers/countCargoTypes";
import formatCurrency from "../helpers/formatCurrency";

function TripItem({ trip }) {
  const { car, city, date, cargoType, minPrice, image } = trip;
  const { slicedCargoTypes, restTypes, typeName, restCount } =
    countCargoTypes(cargoType);

  return (
    <div className="trip_item">
      <div className="trip_item-img">
        <img src={image} alt="car-image" />
      </div>
      <div className="trip_item-info">
        <p className="trip_item-info-title">{car}</p>
        <div className="trip_item-info-location">
          <img src="/icons/map-marker.svg" alt="map-marker" />
          <p className="trip_item-info-location-city">{city}</p>
          <p className="trip_item-info-location-date">{date}</p>
        </div>

        <div className="trip_item-info-cargo">
          <img src="/icons/box.svg" alt="box-icon" />
          <p className="trip_item-info-cargo-cargoType">Тип груза:</p>
          <p className="trip_item-info-cargo-cargoItem">
            {slicedCargoTypes}{" "}
            {restCount > 0 && <span>{`и ещё ${restCount} ${typeName}`}</span>}
          </p>
        </div>
      </div>
      <div className="trip_item-time">за 1 час</div>
      <div className="trip_item-price">от {formatCurrency(minPrice)}</div>
    </div>
  );
}

export default TripItem;
