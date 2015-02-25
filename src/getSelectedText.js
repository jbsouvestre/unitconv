export default function getSelectText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection && document.selection.type !== 'Control') {
        return document.selection.createRange().text;
    }
}