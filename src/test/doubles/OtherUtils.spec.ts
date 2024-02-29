import { calculateComplexity, toUpperCaseWithCallback } from "../../app/doubles/OtherUtils"

describe('OtherUtils test suite', () => {

    describe.only('Tracking callbacks', () => {
        let callbackArgs = [];
        let timesCalled = 0;

        function callbackMock(arg: string) {
            callbackArgs.push(arg);
            timesCalled++;
        }

        afterEach(() => {
            callbackArgs = [];
            timesCalled = 0;
        })

        it('should test toUpperCaseWithCallback with invalid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('', callbackMock);
            expect(actual).toBeUndefined();
            expect(callbackArgs).toContain('Invalid argument!')
            expect(timesCalled).toBe(1);
        });

        it('should test toUpperCaseWithCallback with valid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('abc', callbackMock);
            expect(actual).toBe('ABC');
            expect(callbackArgs).toContain('called function with abc')
            expect(timesCalled).toBe(1);
        });

    })

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