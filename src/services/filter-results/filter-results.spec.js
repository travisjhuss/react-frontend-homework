import testArrayOfHotels from '../testArrayOfHotels';
import FilterResultsService from './filter-results.service';

describe('FilterResultsService', () => {
  // given (a sample list of hotels matches hotel data)
  // when (given no filterQuery)
  it('will return same array if no filterQuery', () => {
    // then
    expect(FilterResultsService(testArrayOfHotels)).toEqual(testArrayOfHotels);
  });

  // given (a sample list of hotels matches hotel data)
  // when (given a single letter as filterQuery)
  it('will return array of objects matching letter b', () => {
    // then
    expect(FilterResultsService(testArrayOfHotels, 'b')).toEqual([
      {
        id: 2,
        hotelStaticContent: {
          name: 'AB Hotel Name',
          neighborhoodName: 'Ukrainian Village',
          mainImage: {
            url: 'https://www.website.com/photo.png',
          },
        },
        lowestAveragePrice: {
          symbol: '&#36;',
          amount: 200,
        },
        rewards: {
          miles: 3000,
        },
      },
      {
        id: 4,
        hotelStaticContent: {
          name: 'BC Hotel Name',
          neighborhoodName: 'Magnificent Mile',
          mainImage: {
            url: 'https://www.website.com/photo.png',
          },
        },
        lowestAveragePrice: {
          symbol: '&#36;',
          amount: 200,
        },
        rewards: {
          miles: 5000,
        },
      },
    ]);
  });

  // given (a sample list of hotels matches hotel data)
  // when (given two letters as filterQuery)
  it('will return array of objects matching letter ab', () => {
    // then
    expect(FilterResultsService(testArrayOfHotels, 'ab')).toEqual([
      {
        id: 2,
        hotelStaticContent: {
          name: 'AB Hotel Name',
          neighborhoodName: 'Ukrainian Village',
          mainImage: {
            url: 'https://www.website.com/photo.png',
          },
        },
        lowestAveragePrice: {
          symbol: '&#36;',
          amount: 200,
        },
        rewards: {
          miles: 3000,
        },
      },
    ]);
  });

  // given (a sample list of hotels matches hotel data)
  // when (given a number as filterQuery)
  it('will work when number is filterQuery', () => {
    // then
    expect(FilterResultsService(testArrayOfHotels, 3)).toEqual([
      {
        id: 3,
        hotelStaticContent: {
          name: 'CC3 Hotel Name',
          neighborhoodName: 'Magnificent Mile',
          mainImage: {
            url: 'https://www.website.com/photo.png',
          },
        },
        lowestAveragePrice: {
          symbol: '&#36;',
          amount: 300,
        },
        rewards: {
          miles: 4000,
        },
      },
    ]);
  });

  // given (a sample list of hotels matches hotel data)
  // when (given a filterQuery that has no matches)
  it('will empty array if no matches to filterQuery', () => {
    expect(FilterResultsService(testArrayOfHotels, 'z')).toEqual([]);
  });
});
