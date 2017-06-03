import 'p5';
import 'p5/lib/addons/p5.dom';
import { getNextState } from './gameLogic'

const WIDTH = 720, HEIGHT = 480, GRID = 20;


const columns = WIDTH / GRID;
const rows = HEIGHT / GRID;

let board, cnv, slider, sliderLabel, clearBtn, randomBtn, gameInstruction, statusLabel, bottomDiv;

// 游戏可视化部分
export function setup () {
    cnv = createCanvas(WIDTH, HEIGHT);

    centerCanvas();
    createBottomDiv();
    createFrameRateController();
    createClearBtn();
    createRandomBtn();
    createGameInstruction();
    createStatusLabel();

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

function createBottomDiv () {
    bottomDiv = createDiv('');
    bottomDiv.class('bottom');
}

function createGameInstruction () {
    gameInstruction = createP('黑色格子为存活细胞，白色格子为死亡细胞。点击空格键，开始游戏，再次点击，暂停游戏。点击clear键，清空场景。点击random键，随机生成场景。点击场景中的格子，对细胞进行死亡存活的反转。');
    gameInstruction.class('game-instruction');
}

function createStatusLabel () {
    statusLabel = createP('PAUSED');
    statusLabel.class('status-label')
}


function createFrameRateController () {
    slider = createSlider(1, 60, 30, 1);
    sliderLabel = createP('frame rate 0 fps');
    slider.class('slider');
    sliderLabel.class('slider-label');
    sliderLabel.parent(bottomDiv);
    slider.parent(bottomDiv);
}

function createClearBtn () {
    clearBtn = createButton('clear');
    clearBtn.mousePressed(clearScene);
    clearBtn.class('clear-btn');
    clearBtn.parent(bottomDiv);
}

function clearScene () {
    if (!paused) paused = true;
    init();
    redraw();
}

function createRandomBtn () {
    randomBtn = createButton('random');
    randomBtn.mousePressed(randomScene);
    randomBtn.class('random-btn');
    randomBtn.parent(bottomDiv);
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
        statusLabel.html('Running');
        statusLabel.class('status-label running');
    } else {
        statusLabel.html('Paused');
        statusLabel.class('status-label paused');
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
