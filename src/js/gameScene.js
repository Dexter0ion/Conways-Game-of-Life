import 'p5';
import 'p5/lib/addons/p5.dom';
import { getNextState } from './gameLogic'

const WIDTH = 720, HEIGHT = 480, GRID = 20;


const columns = WIDTH / GRID;
const rows = HEIGHT / GRID;

let board, cnv, slider, sliderLabel;
// 游戏可视化部分
export function setup () {
    cnv = createCanvas(WIDTH, HEIGHT);

    slider = createSlider(1, 60, 30, 1);
    sliderLabel = createP('frame rate 0 fps');
    sliderLabel.position(50, 600);
    sliderLabel.style("margin-top", "-2px");
    slider.position(200, 600);
    slider.style('width', '80px');

    centerCanvas();

    board = new Array(rows);
    for (let row = 0; row < rows; ++row) {
        board[row] = new Array(columns);
    }

    init();
    noLoop();
}

function centerCanvas () {
    const x = (windowWidth - width) / 2;
    const y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

export function draw () {
    // 背景为白色
    background(255);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if ((board[i][j] == 1)) fill(0);
            else fill(255);
            stroke(0);
            rect(j * GRID, i * GRID, GRID - 1, GRID - 1);
        }
    }
    board = getNextState(board);
    const fr = slider.value();
    frameRate(fr);
    sliderLabel.html(`frame rate: ${paused ? 0 : fr} fps`);
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


let paused = true;

function handleLoop () {
    if (paused) {
        loop();
        paused = false;
    } else {
        noLoop();
        paused = true;
    }
}

export const mouseClicked = handleLoop;

export function keyPressed () {
    if (keyCode == 32) {
        handleLoop()
        return false; // prevent default
    }
}
