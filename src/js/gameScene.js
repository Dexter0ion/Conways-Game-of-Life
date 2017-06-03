import 'p5';
import 'p5/lib/addons/p5.dom';
import { getNextState } from './gameLogic'

const WIDTH = 720, HEIGHT = 480, GRID = 20;


const columns = WIDTH / GRID;
const rows = HEIGHT / GRID;

let board, cnv, slider, sliderLabel, clearBtn, randomBtn;

// 游戏可视化部分
export function setup () {
    cnv = createCanvas(WIDTH, HEIGHT);

    centerCanvas();
    createFrameRateController();
    createClearBtn();
    createRandomBtn();

    board = new Array(rows);
    for (let row = 0; row < rows; ++row) {
        board[row] = new Array(columns);
    }

    init();
    noLoop();
}

function centerCanvas () {
    const cnvMarginLeft = (windowWidth - width) / 2;
    const cnvMarginTop = (windowHeight - height) / 2;
    cnv.position(cnvMarginLeft, cnvMarginTop);
}

function createFrameRateController () {
    slider = createSlider(1, 60, 30, 1);
    sliderLabel = createP('frame rate 0 fps');
    sliderLabel.position(50, 600);
    sliderLabel.style("margin-top", "-2px");
    slider.position(200, 600);
    slider.style('width', '80px');
}

function createClearBtn () {
    clearBtn = createButton('clear');
    clearBtn.position(300, 600);
    clearBtn.mousePressed(clearScene);
}

function clearScene () {
    if (!paused) paused = true;
    init();
    redraw();
}

function createRandomBtn () {
    randomBtn = createButton('random');
    randomBtn.position(350, 600);
    randomBtn.mousePressed(randomScene);
}

function randomScene () {
    if (!paused) paused = true;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            // 随机1或者0
            board[i][j] = floor(random(2));
        }
    }
    redraw();
}

export function draw () {
    // 背景为白色
    background(255);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if ((board[i][j] == 1)) fill(0);
            else fill(255);
            stroke(0);
            rect(j * GRID, i * GRID, GRID - 1, GRID - 1);
        }
    }
    if (!paused) {
        board = getNextState(board);
    }
    const fr = slider.value();
    frameRate(fr);
    sliderLabel.html(`frame rate: ${paused ? 0 : fr} fps`);
}

// 随机生成一个初始状态
function init () {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            // 随机1或者0
            board[i][j] = 0;
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

export function mouseClicked () {
    const i = floor(mouseY / 20);
    const j = floor(mouseX / 20);
    if (j >= columns || i >= rows || i < 0 || j < 0 || !paused) {
        return;
    }
    board[i][j] = board[i][j] === 1 ? 0 : 1;
    redraw();
}

export function keyPressed () {
    if (keyCode == 32) {
        handleLoop()
        return false; // prevent default
    }
}
