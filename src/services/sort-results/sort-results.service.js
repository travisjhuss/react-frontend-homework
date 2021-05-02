export default function SortResultsService(arrayOfObjects, sortByValue) {
  const sortResults = arrayOfObjects.sort((a, b) => {
    // will check sortByValue and will sort array by amount accordingly
    // based on whether 'ascending' or 'descending'.
    // if no value given to sortByValue, will sort by rating
    if (sortByValue === 'ascending') {
      return a.lowestAveragePrice.amount > b.lowestAveragePrice.amount ? 1 : -1;
    } else if (sortByValue === 'descending') {
      return b.lowestAveragePrice.amount > a.lowestAveragePrice.amount ? 1 : -1;
    } else {
      return b.hotelStaticContent.rating > a.hotelStaticContent.rating ? 1 : -1;
    }
  });
  return sortResults;
}
