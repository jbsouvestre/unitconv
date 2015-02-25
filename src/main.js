import getSelectedText from './getSelectedText';
import markSelection from './markSelection';

let selectionEl;

let onMouseUp = function() {
    let text = getSelectedText();
    
    if(selectionEl){
        selectionEl.remove();
    }

    if(text){
        selectionEl = markSelection(text);
    }
};

document.addEventListener('mouseup', onMouseUp, false);