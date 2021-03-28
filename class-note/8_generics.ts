function logText(text) {
    console.log(text);
    return text;
}

logText(10); //숫자
logText('10'); //문자열
logText(true); //진위값



function logText1<T>(text: T): T {
    console.log(text);
    return text;
}


logText1<string>('하이');
