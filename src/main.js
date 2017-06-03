import { getNextStateByExtendedGrids, extendGrids } from './js/gameLogic'

export function getNextState (grids) {
    // 扩展场景
    const extendedGrids = extendGrids(grids);

    // 获取下一状态
    const retArr = getNextStateByExtendedGrids(extendedGrids);

    return retArr;
}