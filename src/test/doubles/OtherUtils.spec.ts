import { calculateComplexity } from "../../app/doubles/OtherUtils"

describe('OtherUtils test suite', () => {
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