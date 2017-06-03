import { expect } from 'chai';
import  {
    countAlive,
    getNextStateWhenAlive,
    getNextStateWhenDead,
    extendGrids,
    getNextStateByExtendedGrids
} from '../src/js/gameLogic';

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

describe('Test function: extendGrids', () => {
    const inputArr = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ];
    const outputArr = [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0]
    ];
    it('should return 5*5 grids when input 3*3 grids', () => {
        expect(extendGrids(inputArr)).eql(outputArr);
    });
});


describe('Test function: getNextStateByExtendedGrids', () => {
    const mockOneNeighbourZero = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ];
    const nextMockOneNeighbourZero = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    const mockOneNeighbourTwo = [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ];
    const nextMockOneNeighbourTwo = [
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0]
    ];
    const mockOneNeighbourThree = [
        [0, 1, 0],
        [0, 1, 0],
        [1, 0, 1]
    ];
    const nextMockOneNeighbourThree = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ];
    const mockOneNeighbourFour = [
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ];
    const nextMockOneNeighbourFour = [
        [1, 1, 0],
        [0, 0, 0],
        [1, 1, 0]
    ];
    const mockZeroNeighbourThree = [
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 0]
    ];
    const nextMockZeroNeighbourThree = [
        [0, 0, 0],
        [1, 1, 0],
        [1, 1, 0]
    ];
    const mockZeroNeighbourFour = [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0]
    ];
    const nextMockZeroNeighbourFour = [
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 0]
    ];
    it('should return nextMockOneNeighbourZero of mockOneNeighbourZero', () => {
        expect(getNextStateByExtendedGrids(extendGrids(mockOneNeighbourZero))).eql(nextMockOneNeighbourZero);
    });
    it('should return nextMockOneNeighbourTwo of mockOneNeighbourTwo', () => {
        expect(getNextStateByExtendedGrids(extendGrids(mockOneNeighbourTwo))).eql(nextMockOneNeighbourTwo);
    });
    it('should return nextMockOneNeighbourThree of mockOneNeighbourThree', () => {
        expect(getNextStateByExtendedGrids(extendGrids(mockOneNeighbourThree))).eql(nextMockOneNeighbourThree);
    });
    it('should return nextMockOneNeighbourFour of mockOneNeighbourFour', () => {
        expect(getNextStateByExtendedGrids(extendGrids(mockOneNeighbourFour))).eql(nextMockOneNeighbourFour);
    });
    it('should return nextMockZeroNeighbourThree of mockZeroNeighbourThree', () => {
        expect(getNextStateByExtendedGrids(extendGrids(mockZeroNeighbourThree))).eql(nextMockZeroNeighbourThree);
    });
    it('should return nextMockZeroNeighbourFour of mockZeroNeighbourFour', () => {
        expect(getNextStateByExtendedGrids(extendGrids(mockZeroNeighbourFour))).eql(nextMockZeroNeighbourFour);
    });
});
