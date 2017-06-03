import { expect } from 'chai';
import { getNextState } from '../src/main'

describe('Test function: getNextState', () => {
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
        expect(getNextState(mockOneNeighbourZero)).eql(nextMockOneNeighbourZero);
    });
    it('should return nextMockOneNeighbourTwo of mockOneNeighbourTwo', () => {
        expect(getNextState(mockOneNeighbourTwo)).eql(nextMockOneNeighbourTwo);
    });
    it('should return nextMockOneNeighbourThree of mockOneNeighbourThree', () => {
        expect(getNextState(mockOneNeighbourThree)).eql(nextMockOneNeighbourThree);
    });
    it('should return nextMockOneNeighbourFour of mockOneNeighbourFour', () => {
        expect(getNextState(mockOneNeighbourFour)).eql(nextMockOneNeighbourFour);
    });
    it('should return nextMockZeroNeighbourThree of mockZeroNeighbourThree', () => {
        expect(getNextState(mockZeroNeighbourThree)).eql(nextMockZeroNeighbourThree);
    });
    it('should return nextMockZeroNeighbourFour of mockZeroNeighbourFour', () => {
        expect(getNextState(mockZeroNeighbourFour)).eql(nextMockZeroNeighbourFour);
    });
});

