function countCargoTypes(types) {
	const typesArray = types.split(",");
	const slicedCargoTypes = typesArray.slice(0, 3).join(",");
	const restTypes = typesArray.slice(3);
	const restCount = restTypes.length;
	let typeName = "";
 
	if (restCount === 1) {
	  typeName = "тип";
	}
	if (restCount > 1 && restCount < 5) {
	  typeName = "типа";
	} else {
	  typeName = "типов";
	}
	return { slicedCargoTypes, restTypes, typeName, restCount };
 }

 export default countCargoTypes