import { setup, draw, keyPressed } from './js/gameScene';

if (window) {
    window.setup = setup;
    window.draw = draw;
    window.keyPressed = keyPressed;
}

