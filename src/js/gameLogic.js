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
