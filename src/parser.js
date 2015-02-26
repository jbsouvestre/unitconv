

function lengthParser(){
    
}

export function parser(text) {
    let parsed = false,
        parsedText = '';

    parsedText = parse(text)
        .pipe(lengthParser())
        .out();

    return {
        parsed: parsed,
        parsedText: parsedText 
    }
}