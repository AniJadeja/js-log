#JS-LOG

Simple logger module to print the file level logs in console. 
It prints date,time, calling file name and calling method name automatically and allows user to focus on the actual values they are concerned with.

###Installation
To install the package, clone this repo and copy into node_modules folder.

###Usage
A log must have a type and  currently this package supports 4 different logging types
i. Warning
ii. Info
iii. Debug
iv. Error

It accepts two different parameter, `query` and `result`

To use it in the file,
1. Import it
```
const Log = require('Log);
```

2. Use the log type you would like.
```
Log.*(query,parameter)
```

###Example

in app.js:
```
const Log = require('Log);

const foo = () => {
  const query = 'Greetings Message';
  const result = 'Hello World!'
  Log.i(query,result);
  Log.d(query,result);
  Log.w(query,result);
  Log.e(query,result);
}

foo();
```

output:
```
INFO   2/12/2024, 20:39:59.130 EST => app.js:75:7 => foo => Greetings Message : Hello World!
DEBUG  2/12/2024, 20:39:59.143 EST => app.js:76:7 => foo => Greetings Message : Hello World!
WARN   2/12/2024, 20:39:59.144 EST => app.js:77:7 => foo => Greetings Message : Hello World!
ERROR  2/12/2024, 20:39:59.144 EST => app.js:78:7 => foo => Greetings Message : Hello World!
```




###Notes
1. As of now, It only supports `string` , `number ` and `JSON` data types.
2. It is only tested in Express.js
3. While other datatypes may get printed, they are not been tested thorouhgly.
4. All of the arguments are optional. 
