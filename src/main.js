import { setup, draw, mouseClicked, keyPressed } from './js/gameScene';

if (window) {
    window.setup = setup;
    window.draw = draw;
    window.mouseClicked = mouseClicked;
    window.keyPressed = keyPressed;
}

