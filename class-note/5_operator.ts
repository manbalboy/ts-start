function logMessage(value: string) {
    console.log(value);
}

logMessage('hello');
// logMessage(100);



function logMessage2 (value : string | number) {
    console.log(value);
}

logMessage2('d');
logMessage2(100);


