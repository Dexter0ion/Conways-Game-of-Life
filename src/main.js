import { setup, draw, keyPressed, mouseClicked } from './js/gameScene';

if (window) {
    window.setup = setup;
    window.draw = draw;
    window.keyPressed = keyPressed;
    window.mouseClicked = mouseClicked;
}

