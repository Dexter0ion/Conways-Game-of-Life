import { countAlive, getNextStateWhenAlive, getNextStateWhenDead, extendGrids } from './js/gameLogic'

export function getNextState (grids) {
    if (grids.length === 0) return;
    const rows = grids.length;
    const cols = grids[0].length;

    // 返回新的场景
    let retArr = new Array(rows);
    for (let row = 0; row < rows; ++row) {
        retArr[row] = new Array(cols);
    }

    // 扩展场景
    const extendedGrids = extendGrids(grids);

    // 判断 储存下一个状态
    for (let i = 1; i <= rows; ++i) {
        for (let j = 1; j <= cols; ++j) {
            const aliveNums = countAlive([i, j], extendedGrids);
            if (extendedGrids[i][j] === 1) {
                retArr[i - 1][j - 1] = getNextStateWhenAlive(aliveNums);
            } else {
                retArr[i - 1][j - 1] = getNextStateWhenDead(aliveNums);
            }
        }
    }
    return retArr;
}