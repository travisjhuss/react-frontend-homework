import testArrayOfHotels from '../testArrayOfHotels';
import SortResultsService from './sort-results.service';

describe('SortResultsService', () => {
  // given (a sample list of hotels matches hotel data)
  // when (no sortByValue has been given and it is default value)
  it('will sort by id by default', () => {
    // then (it should equal the same array)
    expect(SortResultsService(testArrayOfHotels)).toEqual(testArrayOfHotels);
  });

  it('will sort by price ascending, followed by id ascending', () => {
    // given (a sample list of hotels matches hotel data)
    // when (sortByValue is equal to ascending)
    expect(SortResultsService(testArrayOfHotels, 'ascending'))
      // then (should equal the array ordered by hotelStaticContent.amount ascending)
      .toEqual([
        {
          id: 1,
          hotelStaticContent: {
            name: 'AA Hotel Name',
            neighborhoodName: 'Logan Square',
            mainImage: {
              url: 'https://www.website.com/photo.png',
            },
          },
          lowestAveragePrice: {
            symbol: '&#36;',
            amount: 100,
          },
          rewards: {
            miles: 5000,
          },
        },
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
  // when (sortByValue is equal to descending)
  it('will sort by price descending, followed by id descending', () => {
    // then (should equal the array ordered by hotelStaticContent.amount descending)
    expect(SortResultsService(testArrayOfHotels, 'descending')).toEqual([
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
        id: 1,
        hotelStaticContent: {
          name: 'AA Hotel Name',
          neighborhoodName: 'Logan Square',
          mainImage: {
            url: 'https://www.website.com/photo.png',
          },
        },
        lowestAveragePrice: {
          symbol: '&#36;',
          amount: 100,
        },
        rewards: {
          miles: 5000,
        },
      },
    ]);
  });
  // given (a sample list of hotels matches hotel data, plus one item that does not have a price)
  // when (sortByValue is equal to ascending and one hotel has no price)
  it('will do this if given no price when ascending', () => {
    // then (unpriced hotel will come first in array)
    expect(
      SortResultsService(
        [
          ...testArrayOfHotels,
          {
            id: 5,
            hotelStaticContent: {
              name: 'FF Hotel Name',
              neighborhoodName: 'Logan Square',
              mainImage: {
                url: 'https://www.website.com/photo.png',
              },
            },
            lowestAveragePrice: {
              symbol: '&#36;',
              amount: undefined,
            },
            rewards: {
              miles: 5000,
            },
          },
        ],
        'ascending'
      )
    ).toEqual([
      {
        id: 5,
        hotelStaticContent: {
          name: 'FF Hotel Name',
          neighborhoodName: 'Logan Square',
          mainImage: {
            url: 'https://www.website.com/photo.png',
          },
        },
        lowestAveragePrice: {
          symbol: '&#36;',
          amount: undefined,
        },
        rewards: {
          miles: 5000,
        },
      },
      {
        id: 1,
        hotelStaticContent: {
          name: 'AA Hotel Name',
          neighborhoodName: 'Logan Square',
          mainImage: {
            url: 'https://www.website.com/photo.png',
          },
        },
        lowestAveragePrice: {
          symbol: '&#36;',
          amount: 100,
        },
        rewards: {
          miles: 5000,
        },
      },
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
});
