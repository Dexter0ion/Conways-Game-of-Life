import { expect } from 'chai';
import  { countAlive } from '../src/js/gameLogic';

const mockOneNeightborZero = [
    0, 0, 0,
    0, 1, 0,
    0, 0, 0
];
const mockOneNeightborTwo = [
    0, 1, 0,
    0, 1, 1,
    0, 0, 0
];
const mockOneNeightborThree = [
    0, 1, 0,
    0, 1, 0,
    1, 0, 1
];
const mockOneNeightborFour = [
    1, 0, 0,
    1, 1, 0,
    1, 1, 0
];
const mockZeroNeightborThree = [
    0, 0, 0,
    1, 0, 0,
    1, 1, 0
];
const mockZeroNeightborFour = [
    1, 0, 0,
    1, 0, 0,
    1, 1, 0
];

describe('Test game logic', () => {
    it('should return number 0 of mockOneNeightborZero', () => {
        expect(countAlive([1, 1], mockOneNeightborZero)).equal(0);
    });

    it('should return number 2 of mockOneNeightborTwo', () => {
        expect(countAlive([1, 1], mockOneNeightborTwo)).equal(2);
    });

    it('should return number 3 of mockOneNeightborThree', () => {
        expect(countAlive([1, 1], mockOneNeightborThree)).equal(3);
    });

    it('should return number 4 of mockOneNeightborFour', () => {
        expect(countAlive([1, 1], mockOneNeightborFour)).equal(4);
    });

    it('should return number 3 of mockZeroNeightborThree', () => {
        expect(countAlive([1, 1], mockZeroNeightborThree)).equal(3);
    });

    it('should return number 3 of mockZeroNeightborFour', () => {
        expect(countAlive([1, 1], mockZeroNeightborFour)).equal(4);
    });
});
