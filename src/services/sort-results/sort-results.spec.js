
describe('SortResultsService', () => {
    it('runs', () => {
        expect(1).toBe(1);
    });
});

describe('test multiply function', () => {
    it('returns right number', () => {
        expect(multiply(3, 3)).toBe(9);
    });
    it('returns right number', () => {
        expect(multiply(5, 73)).toBe(365);
    });
    it('will return NaN', () => {
        expect(multiply(3, '5')).toBe(NaN);
    }); 
});

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

