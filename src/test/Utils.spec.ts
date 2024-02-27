import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils"

describe('Utils test suite', () => {

    describe.only('StringUtils tests', () => {

        let sut: StringUtils;

        beforeEach(() => {
            sut = new StringUtils();
            console.log('setup');

        });

        // beforeAll and afterAll hooks are commonly used for integration tests

        afterEach(() => {
            // clearing mocks
            console.log('teardown');
        })
        it('should return correct upperCase', () => {
            const actual = sut.toUpperCase('abc');

            expect(actual).toBe('ABC');
        })
    })

    it('should return uppercase of a valid string', ()=> {
        // arrange
        const sut = toUpperCase;
        const expected = 'ABC';

        // act
        const actual = sut('abc')

        // assert
        expect(actual).toBe(expected);
    });

    describe('toUpperCase examples', () => {
        it.each([
            { input: 'abc', expected: 'ABC'},
            { input: 'my-string', expected: 'MY-STRING'},
            { input: 'heLLO', expected: 'HELLO'},

        ])('$input toUpperCase should be $expected', ({input, expected})=> {
            const actual = toUpperCase(input);
            expect(actual).toBe(expected);
        })
    })

    describe('getStringInfo for arg Test-String should', () => {
        test('return right length', ()=> {
            const actual = getStringInfo('Test-String');
            expect(actual.characters).toHaveLength(11);
        });

        test('return right lower case', ()=> {
            const actual = getStringInfo('Test-String');
            expect(actual.lowerCase).toBe('test-string'); // for primitive types: toBe
        });

        test('return right upper case', ()=> {
            const actual = getStringInfo('Test-String');
            expect(actual.upperCase).toBe('TEST-STRING'); 
        });

        test('return right character', ()=> {
            const actual = getStringInfo('Test-String');
            expect(actual.characters.length).toBe(11);
        
            expect(actual.characters).toEqual(['T','e','s','t','-','S','t','r','i','n','g']);
            expect(actual.characters).toContain<string>('T');
            expect(actual.characters).toEqual(
                expect.arrayContaining(['T','e','s','t'])
            );
        });

        test('return defined extra info', ()=> {
            const actual = getStringInfo('Test-String');
            expect(actual.extraInfo).not.toBe(undefined);
            expect(actual.extraInfo).not.toBeUndefined();
            expect(actual.extraInfo).toBeDefined();
            expect(actual.extraInfo).toBeTruthy();
    
        });
    })

})