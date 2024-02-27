import { getStringInfo, toUpperCase } from "../app/Utils"

describe('Utils test suite', () => {
    it('should return uppercase of a valid string', ()=> {
        // arrange
        const sut = toUpperCase;
        const expected = 'ABC';

        // act
        const actual = sut('abc')

        // assert
        expect(actual).toBe(expected);
    });

    // to only run this test
    it.only('should return info for valid string', () => {
        const actual = getStringInfo('Test-String');

        expect(actual.lowerCase).toBe('test-string'); // for primitive types: toBe
        expect(actual.extraInfo).toEqual({}); // for objects: toEqual
        
        expect(actual.characters.length).toBe(11);
        expect(actual.characters).toHaveLength(11);
        expect(actual.characters).toEqual(['T','e','s','t','-','S','t','r','i','n','g']);
        expect(actual.characters).toContain<string>('T');
        expect(actual.characters).toEqual(
            expect.arrayContaining(['T','e','s','t'])
        );

        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.extraInfo).not.toBeUndefined();
        expect(actual.extraInfo).toBeDefined();
        expect(actual.extraInfo).toBeTruthy();


    })

})