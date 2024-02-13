const path = require("path");

function log(logLevel, callingMethod, relativePath , query, result) {
    const now = new Date();
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    const dateTime = now.toLocaleString('en-US', { hour12: false }) + `.${milliseconds}`;
    const timeZoneName = now.toLocaleString('en-US', { timeZoneName: 'short' }).split(' ')[3];

    if (result == undefined) {
        if (typeof query === "object")
            console.log(`${logLevel} ${dateTime} ${timeZoneName} => ${relativePath} => ${callingMethod} => ${JSON.stringify(query)}`);
        else console.log(`${logLevel} ${dateTime} ${timeZoneName} => ${relativePath} => ${callingMethod} => ${query}`);
    } else if (query !== undefined && result !== undefined) {
        if (typeof result === "string") {
            console.log(`${logLevel} ${dateTime} ${timeZoneName} => ${relativePath} => ${callingMethod} => ${query} : ${result}`);
        } else {
            const paramStr = JSON.stringify(result);
            console.log(`${logLevel} ${dateTime} ${timeZoneName} => ${relativePath} => ${callingMethod} => ${query} : ${paramStr}`);
        }
    }
}

// Define separate functions for each log level
log.w = function(query, result) {
    const stack = new Error().stack;
    const stackLines = stack.split("\n");
    const callingMethod = stackLines[2].trim().split(" ")[1];
    const callingFile = stackLines[2].trim().split("(")[1].split(")")[0];
    const relativePath = path.relative(process.cwd(), callingFile);
   // console.log(`${relativePath} => ${callingMethod}`);
   log('WARN  ', callingMethod, relativePath , query, result);
};

log.d = function(query, result) {
    const stack = new Error().stack;
    const stackLines = stack.split("\n");
    const callingMethod = stackLines[2].trim().split(" ")[1];
    const callingFile = stackLines[2].trim().split("(")[1].split(")")[0];
    const relativePath = path.relative(process.cwd(), callingFile);
    log('DEBUG ', callingMethod, relativePath, query, result);
};

log.i = function(query, result) {
    const stack = new Error().stack;
    const stackLines = stack.split("\n");
    const callingMethod = stackLines[2].trim().split(" ")[1];
    const callingFile = stackLines[2].trim().split("(")[1].split(")")[0];
    const relativePath = path.relative(process.cwd(), callingFile);
    log('INFO  ',  callingMethod, relativePath, query, result);
};

log.e = function(query, result) {
    const stack = new Error().stack;
    const stackLines = stack.split("\n");
    const callingMethod = stackLines[2].trim().split(" ")[1];
    const callingFile = stackLines[2].trim().split("(")[1].split(")")[0];
    const relativePath = path.relative(process.cwd(), callingFile);
    log('ERROR ', callingMethod, relativePath, query, result);
};

module.exports = { log };
