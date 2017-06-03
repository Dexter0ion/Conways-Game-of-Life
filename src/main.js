import { setup, draw, keyPressed, mouseClicked } from './js/gameScene';
import '../index.css';

if (window) {
    window.setup = setup;
    window.draw = draw;
    window.keyPressed = keyPressed;
    window.mouseClicked = mouseClicked;
}

