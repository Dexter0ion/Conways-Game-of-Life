import 'p5';
import { getNextState } from './gameLogic'

const WIDTH = 720, HEIGHT = 480, GRID = 20;


const columns = WIDTH / GRID;
const rows = HEIGHT / GRID;

let board;

// 游戏可视化部分
export function setup () {
    createCanvas(WIDTH, HEIGHT);

    board = new Array(rows);
    for (let row = 0; row < rows; ++row) {
        board[row] = new Array(columns);
    }

    init();
}

export function draw () {
    // 背景为白色
    background(255);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if ((board[i][j] == 1)) fill(0);
            else fill(255);
            stroke(0);
            rect(i * GRID, j * GRID, GRID - 1, GRID - 1);
        }
    }
    board = getNextState(board);
}

// 随机生成一个初始状态
function init () {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            // 随机1或者0
            board[i][j] = floor(random(2));
        }
    }
}