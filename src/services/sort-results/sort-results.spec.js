import testArrayOfHotels from '../testArrayOfHotels';

console.log(testArrayOfHotels);

describe('SortResultsService', () => {
  it('will sort by id by default', () => {
    expect(SortResultsService(testArrayOfHotels)).toBe([
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
        id: 3,
        hotelStaticContent: {
          name: 'CC Hotel Name',
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
    ]);
  });

  it('will sort by price ascending, then by name if same price', () => {
    expect(SortResultsService(testArrayOfHotels)).toBe([
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
          name: 'CC Hotel Name',
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
  it('will sort by price descending, then by name if same price', () => {
    expect(SortResultsService(testArrayOfHotels)).toBe([
      {
        id: 3,
        hotelStaticContent: {
          name: 'CC Hotel Name',
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
  
  it('will do this if given no price', () => {
    expect(SortResultsService(testArrayOfHotels)).toBe();
  });
});
