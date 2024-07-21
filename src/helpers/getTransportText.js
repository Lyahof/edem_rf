function getTransportText(numOftrips) {
	if (numOftrips % 10 === 1 && numOftrips % 100 !== 11) {
	  return "грузоперевозка"; // 1 грузоперевозка
	} else if (
	  numOftrips % 10 >= 2 &&
	  numOftrips % 10 <= 4 &&
	  (numOftrips % 100 < 10 || numOftrips % 100 >= 20)
	) {
	  return "грузоперевозки"; // 2-4 грузоперевозки
	} else {
	  return "грузоперевозок"; // 0, 5-9, 11-14 грузоперевозок
	}
 }

 export default getTransportText