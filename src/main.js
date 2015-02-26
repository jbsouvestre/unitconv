import getSelectedText from './getSelectedText';
import markSelection from './markSelection';
import parser from './parser';

let selectionEl;

let onMouseUp = function() {
    let text = getSelectedText();

    if (selectionEl) {
        selectionEl.remove();
    }

    if (text) {
        let {parsed, parsedText} = parser(text);
        if(parsed){
            selectionEl = markSelection(parsedText);
        }
    }
};

document.addEventListener('mouseup', onMouseUp, false);