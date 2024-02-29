import { OtherStringUtils, calculateComplexity, toUpperCaseWithCallback } from "../../app/doubles/OtherUtils"

describe('OtherUtils test suite', () => {

    describe.only('OtherStringUtils test with spies', () => {
        let sut: OtherStringUtils;

        beforeEach(() => {
            sut = new OtherStringUtils();
        });

        test('Use a spy to track calls', () => {
            const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('abc');
            expect(toUpperCaseSpy).toHaveBeenCalledWith('abc');
        });

        test('Use a spy to track calls to another module', () => {
            const consoleLogSpy = jest.spyOn(console, 'log');
            sut.logString('abc');
            expect(consoleLogSpy).toHaveBeenCalledWith('abc');
        });

        test.only('Use a spy to replace implementation of a method', () => {
            jest.spyOn(sut as any, 'callExternalService').mockImplementation(() => {
                console.log('calling mocked implementation!!')
            });
            (sut as any).callExternalService();
        })
    });

    describe('Tracking callbacks with Jest mocks', () => {

        const callbackMock = jest.fn();

        afterEach(() => {
            jest.clearAllMocks();
        })

        it('should test toUpperCaseWithCallback with invalid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('', callbackMock);
            expect(actual).toBeUndefined();
            expect(callbackMock).toHaveBeenCalledWith('Invalid argument!')
            expect(callbackMock).toHaveBeenCalledTimes(1);
        });

        it('should test toUpperCaseWithCallback with valid argument - track calls', () => {
            const actual = toUpperCaseWithCallback('abc', callbackMock);
            expect(actual).toBe('ABC');
            expect(callbackMock).toHaveBeenCalledWith('called function with abc')
            expect(callbackMock).toHaveBeenCalledTimes(1);
        });
    });

    describe('Tracking callbacks', () => {
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