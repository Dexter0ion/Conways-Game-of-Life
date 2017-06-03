// 游戏逻辑部分

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
    return (aliveNeighbours === 2 || aliveNeighbours === 3) ? 1 : 0;
}

/**
 * 当前细胞为死亡状态时，当周围有3个存活细胞时，该细胞变成存活状态。 （模拟繁殖）
 * @param aliveNeighbours 周围存活细胞
 * @returns {number}
 */
export function getNextStateWhenDead (aliveNeighbours) {
    return aliveNeighbours === 3 ? 1 : 0;
}

/**
 * 扩展场景,使用一圈死亡细胞将场景包围，方便countAlive计算（数组下标不合法）。
 * @param grids
 * @returns {Array}
 */
export function extendGrids (grids) {
    if (grids.length === 0) return;
    const rows = grids.length;
    const cols = grids[0].length;

    // 扩展场景
    let extendedGrids = new Array(rows);
    for (let i = 0; i < rows; ++i) {
        extendedGrids[i] = [0, ...grids[i], 0];
    }
    extendedGrids = [new Array(cols + 2).fill(0), ...extendedGrids, new Array(cols + 2).fill(0)];
    return extendedGrids;
}

/**
 * 根据扩展后的场景，计算下一状态
 * @param extendedGrids 扩展后的场景
 * @returns {Array} 下一状态
 */
export function getNextStateByExtendedGrids (extendedGrids) {
    if (extendedGrids.length === 0) return;

    // 场景的实际大小
    const rows = extendedGrids.length - 2;
    const cols = extendedGrids[0].length - 2;

    // 初始化 下一状态
    let retArr = new Array(rows);
    for (let row = 0; row < rows; ++row) {
        retArr[row] = new Array(cols);
    }

    // 计算 下一个状态
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

/**
 * 游戏逻辑部分主函数
 * @param grids
 * @returns {Array}
 */
export function getNextState (grids) {
    // 扩展场景
    const extendedGrids = extendGrids(grids);

    // 获取下一状态
    const retArr = getNextStateByExtendedGrids(extendedGrids);

    return retArr;
}