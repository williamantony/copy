#!/usr/bin/env node

const escapeSequences = {
  ClearScreen: '\x1b[2J',
  ClearLine: '\x1b[K',
  Reset: '\x1b[0m',
  MoveCursorTopLeft: '\033[H',
  HideCursor: '\x1b[?25l',
  ShowCursor: '\x1b[?25h',

  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',

  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgLightGreen: '\x1b[92m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgLightMagenta: '\x1b[95m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',

  BgBlack: '\x1b[40m',
  BgDarkGray: '\x1b[100m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
};

module.exports = escapeSequences;
