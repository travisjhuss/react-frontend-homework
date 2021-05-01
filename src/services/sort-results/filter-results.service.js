export default function FilterResultsService(arrayOfObjects, filterQuery) {
  // if no filterQuery is given, it will return the array argument
  if (!filterQuery) {
    return arrayOfObjects;
  } else {
    // else it will filter the name of the hotel and see it if includes the query, returning matches to a new array
    const filterResult = arrayOfObjects.filter((hotel) =>
      hotel.hotelStaticContent.name.toLowerCase().includes(filterQuery)
    );
    if (!filterResult[0]) {
      // if no results, return message to user
      return 'Sorry, that search has no matching hotels.';
    } else {
      // else return new array
      return filterResult;
    }
  }
}
