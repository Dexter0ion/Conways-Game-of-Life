/**
 * 输入目标点坐标及整个场景，返回目标周围状态为存活的细胞数量
 * @param indexArr 目标点坐标
 * @param grids 整个场景
 * @returns {number} 目标周围状态为存活的细胞数量
 */
export function countAlive (indexArr, grids) {
    let countAlive = 0;
    for (let row = indexArr[0] - 1; row < indexArr[0] + 2; row++) {
        for (let col = indexArr[1] - 1; col < indexArr[1] + 2; col++) {
            if (grids[row][col] === 1) {
                countAlive += 1;
            }
        }
    }
    countAlive -= grids[indexArr[0]][indexArr[1]];
    return countAlive;
}

/**
 *  当前细胞为存活状态时，当周围低于2个（不包含2个）存活细胞时， 该细胞变成死亡状态。（模拟生命数量稀少）
 *  当前细胞为存活状态时，当周围有2个或3个存活细胞时， 该细胞保持原样。
 *  当前细胞为存活状态时，当周围有3个以上的存活细胞时，该细胞变成死亡状态。（模拟生命数量过多）
 * @param aliveNeighbours
 * @returns {number}
 */
export function getNextStateWhenAlive (aliveNeighbours) {
    let nextState = 0;
    if (aliveNeighbours < 2) {
        nextState = 0;
    } else if (aliveNeighbours === 2 || aliveNeighbours === 3) {
        nextState = 1;
    } else {
        nextState = 0;
    }
    return nextState;
}

/**
 * 当前细胞为死亡状态时，当周围有3个存活细胞时，该细胞变成存活状态。 （模拟繁殖）
 * @param aliveNeighbours 周围存活细胞
 * @returns {number}
 */
export function getNextStateWhenDead (aliveNeighbours) {
    return aliveNeighbours === 3 ? 1 : 0;
}
