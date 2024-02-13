const { log } = require("./logger.js");

class Log {
  static w = log.w;
  static d = log.d;
  static i = log.i;
  static e = log.e;
}

module.exports = { Log };
