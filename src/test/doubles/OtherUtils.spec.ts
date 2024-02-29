import { calculateComplexity, toUpperCaseWithCallback } from "../../app/doubles/OtherUtils"

describe('OtherUtils test suite', () => {

    it('should test toUpperCaseWithCallback with invalid argument', () => {
        const actual = toUpperCaseWithCallback('', ()=> {});
        expect(actual).toBeUndefined();
    });

    it('should test toUpperCaseWithCallback with valid argument', () => {
        const actual = toUpperCaseWithCallback('abc', ()=> {});
        expect(actual).toBe('ABC')
    });

    it('should calculate the complexity', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'some info',
                field2: 'another info'
            }
        }
        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(10);
    })
})