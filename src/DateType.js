import Type from './Type';

class DateType extends Type {
    static from(n) {
        return n;
    }

    constructor(errorMessage = 'no error message') {
        super('date');
        super.addValidator(value => !/Invalid|NaN/.test(new Date(value)), errorMessage);
    }

    range(min, max, errorMessage) {
        super.addValidator(value => new Date(value) >= new Date(min) && new Date(value) <= new Date(max), errorMessage);
        return this;
    }

    min(min, errorMessage) {
        super.addValidator(value => new Date(value) >= new Date(min), errorMessage);
        return this;
    }

    max(max, errorMessage) {
        super.addValidator(value => new Date(value) <= new Date(max), errorMessage);
        return this;
    }
}

export default (errorMessage) => new DateType(errorMessage);