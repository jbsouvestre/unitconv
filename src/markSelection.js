
let markerTestChar = '\ufeff';
let markerTestCharEntity = '&#xfeff';

let markerElId = '$_marker_'+ new Date().getTime() + '_' + Math.random().toString().substr(2);

function mark(range){
    let markerEl = document.createElement('span');
    markerEl.appendChild(document.createTextNode( markerTestChar ));
    markerEl.id = markerElId;
    range.insertNode(markerEl);

    return markerEl;
}

export default function markSelection(text) {
    let sel, range, markerEl, selectionEl;

    if (document.selection && document.selection.createRange) {
        range = document.selection.createRange().duplicate();
        range.collapse(false);

        markerEl = range.pasteHTML(
            `<span id="${markerElId}" style="position: relative;">
                ${markerTestCharEntity}
            </span>`
        );

    
    } else if (window.getSelection) {
        sel = window.getSelection();

        if (sel.getRangeAt) {
            range = sel.getRangeAt(0).cloneRange();
        } else {
            range.setStart(sel.anchorNode, sel.anchorOffset);
            range.setEnd(sel.focusNode, sel.focusOffset);

            if (range.collapse !== sel.isCollapsed) {
                range.setStart(sel.focusNode, sel.focusOffset);
                range.setEnd(sel.anchorNode, sel.anchorOffset);
            }

            range.collapse(false);
        }
        
        markerEl = mark(range);
    }


    if(markerEl && !selectionEl){
        selectionEl = document.createElement('div');
        selectionEl.style.border = '1px solid #151515';
        selectionEl.style.backgroundColor = '#000';
        selectionEl.innerHTML = text;
        selectionEl.style.color = '#eee';
        selectionEl.style.position = 'absolute';

        document.body.appendChild(selectionEl);
    }

    let obj = markerEl;
    var leftOff = 0,
        topOff = 0;

    do {
        leftOff += obj.offsetLeft;
        topOff += obj.offsetTop;
    } while(/*jshint boss: true*/ obj = obj.offsetParent);

    selectionEl.style.left = `${leftOff}px`;

    topOff = topOff + (topOff >= 25 ? -25 : 25); 
    leftOff = leftOff + (leftOff >= 25 ? -25 : 25);
    
    selectionEl.style.top = `${topOff}px`;

    markerEl.parentNode.removeChild(markerEl);

    return selectionEl;
}