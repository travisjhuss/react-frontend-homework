export default function SortResultsService(arrayOfObjects, sortByValue) {
  console.log('araryOfObjects:', arrayOfObjects);
  console.log('sortByValue:', sortByValue);

  return arrayOfObjects.sort((a, b) => {
    if (sortByValue === 'ascending') {
      return a.lowestAveragePrice.amount >= b.lowestAveragePrice.amount
        ? 1
        : -1;
    } else if (sortByValue === 'descending') {
      return b.lowestAveragePrice.amount >= a.lowestAveragePrice.amount
        ? 1
        : -1;
    } else {
        return b.hotelStaticContent.rating >= a.hotelStaticContent.rating
        ? 1
        : -1;
    }
  });
}
