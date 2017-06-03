import { expect } from 'chai';
import  { countAlive, getNextStateWhenAlive, getNextStateWhenDead } from '../src/js/gameLogic';

describe('Test function: countAlive', () => {
    const mockOneNeighbourZero = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ];
    const mockOneNeighbourTwo = [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ];
    const mockOneNeighbourThree = [
        [0, 1, 0],
        [0, 1, 0],
        [1, 0, 1]
    ];
    const mockOneNeighbourFour = [
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ];
    const mockZeroNeighbourThree = [
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 0]
    ];
    const mockZeroNeighbourFour = [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0]
    ];
    it('should return number 0 of mockOneNeighbourZero', () => {
        expect(countAlive([1, 1], mockOneNeighbourZero)).equal(0);
    });

    it('should return number 2 of mockOneNeighbourTwo', () => {
        expect(countAlive([1, 1], mockOneNeighbourTwo)).equal(2);
    });

    it('should return number 3 of mockOneNeighbourThree', () => {
        expect(countAlive([1, 1], mockOneNeighbourThree)).equal(3);
    });

    it('should return number 4 of mockOneNeighbourFour', () => {
        expect(countAlive([1, 1], mockOneNeighbourFour)).equal(4);
    });

    it('should return number 3 of mockZeroNeighbourThree', () => {
        expect(countAlive([1, 1], mockZeroNeighbourThree)).equal(3);
    });

    it('should return number 3 of mockZeroNeighbourFour', () => {
        expect(countAlive([1, 1], mockZeroNeighbourFour)).equal(4);
    });
});

describe('Test function: getNextStateWhenAlive', () => {
    it('should return number 0(dead) when with 0 alive neighbours', () => {
        expect(getNextStateWhenAlive(0)).equal(0);
    });

    it('should return number 0(dead) when with 1 alive neighbours', () => {
        expect(getNextStateWhenAlive(1)).equal(0);
    });

    it('should return number 1(alive) when with 2 alive neighbours', () => {
        expect(getNextStateWhenAlive(2)).equal(1);
    });

    it('should return number 1(alive) when with 3 alive neighbours', () => {
        expect(getNextStateWhenAlive(3)).equal(1);
    });

    it('should return number 0(dead) when with 4 alive neighbours', () => {
        expect(getNextStateWhenAlive(4)).equal(0);
    });
});

describe('Test function: getNextStateWhenDead', () => {
    it('should return number 0(dead) when with 0 alive neighbours', () => {
        expect(getNextStateWhenDead(0)).equal(0);
    });

    it('should return number 0(dead) when with 1 alive neighbours', () => {
        expect(getNextStateWhenDead(1)).equal(0);
    });

    it('should return number 0(dead) when with 2 alive neighbours', () => {
        expect(getNextStateWhenDead(2)).equal(0);
    });

    it('should return number 1(alive) when with 3 alive neighbours', () => {
        expect(getNextStateWhenDead(3)).equal(1);
    });

    it('should return number 0(dead) when with 4 alive neighbours', () => {
        expect(getNextStateWhenDead(4)).equal(0);
    });
});

