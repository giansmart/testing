import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/PassChecker"

describe('PasswordChecker test suite', () => {
    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    });

    it('should check if password with less than 8 chars is invalid', () => {
        const actual = sut.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.SHORT);
    });

    it('should check if password with more than 8 chars is ok', () => {
        const actual = sut.checkPassword('1234567890');
        //expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT);
    });

    it('should check if password with no upper case letter is invalid', () => {
        const actual = sut.checkPassword('abc');
        //expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('should check if password with upper case letter is valid', () => {
        const actual = sut.checkPassword('ABC');
        //expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE);
    });

    it('should check if password with no lower case letter is invalid', () => {
        const actual = sut.checkPassword('ABCD');
        //expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('should check if password with lower case letter is valid', () => {
        const actual = sut.checkPassword('ABCabc');
        //expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE);
    });

    it('should check if complex password is valid', () => {
        const actual = sut.checkPassword('123ABCabc');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toHaveLength(0)
    });

    it('should check if Admin password with no number is invalid', () => {
        const actual = sut.checkAdminPassword('ABCDabcd');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER)
    });

    it('should check if Admin password with number is valid', () => {
        const actual = sut.checkAdminPassword('ABCDabcd12');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER)
    });
})