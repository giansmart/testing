import { PasswordChecker } from "../../app/pass_checker/PassChecker"

describe('PasswordChecker test suite', () => {
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    });

    it('should check if password with less than 8 chars is invalid', () => {
        const actual = sut.checkPassword('1234567');
        expect(actual).toBe(false);
    });

    it('should check if password with more than 8 chars is ok', () => {
        const actual = sut.checkPassword('1234567890Aa');
        expect(actual).toBe(true);
    });

    it('should check if password with no upper case letter is invalid', () => {
        const actual = sut.checkPassword('1234abcde');
        expect(actual).toBe(false);
    });

    it('should check if password with upper case letter is valid', () => {
        const actual = sut.checkPassword('1234ABCabc');
        expect(actual).toBe(true);
    });



    it('should check if password with no lower case letter is invalid', () => {
        const actual = sut.checkPassword('1234ABCD');
        expect(actual).toBe(false);
    });

    it('should check if password with lower case letter is valid', () => {
        const actual = sut.checkPassword('1234ABCabc');
        expect(actual).toBe(true);
    });
})