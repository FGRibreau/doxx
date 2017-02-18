const enum TokenType {
  None = 0,
  Ampersand,
  Arrow,
  Colon,
  Comma,
  Description,
  Equal,
  Identifier,
  Initializer,
  // LeftBrace,
  // LeftBracket,
  LeftParen,
  // LineTerminator,
  Markdown,
  Minus,
  NullTerminator,
  Pipe,
  QuestionMark,
  // RightBrace,
  // RightBracket,
  RightParen,
  SpecialWord,
  Tag
}

export function getTokenType(ch: string): TokenType {
  return ({
    '&': TokenType.Ampersand,
    '=>': TokenType.Arrow,
    ':': TokenType.Colon,
    ',': TokenType.Comma,
    '=': TokenType.Equal,
    // '{': TokenType.LeftBrace,
    // '[': TokenType.LeftBracket,
    '(': TokenType.LeftParen,
    '-': TokenType.Minus,
    '|': TokenType.Pipe,
    '?': TokenType.QuestionMark,
    // '}': TokenType.RightBrace,
    // ']': TokenType.RightBracket,
    ')': TokenType.RightParen,
    '@': TokenType.Tag
  })[ch];
}

export function getTokenName(type: TokenType): string {
  return ({
    [TokenType.None]: 'None',
    [TokenType.Ampersand]: 'Ampersand',
    [TokenType.Arrow]: 'Arrow',
    [TokenType.Colon]: 'Colon',
    [TokenType.Comma]: 'Comma',
    [TokenType.Description]: 'Description',
    [TokenType.Equal]: 'Equal',
    [TokenType.Identifier]: 'Identifier',
    [TokenType.Initializer]: 'Initializer',
    // LeftBrace,
    // LeftBracket,
    [TokenType.LeftParen]: 'LeftParen',
    // [TokenType.LineTerminator]: 'LineTerminator',
    [TokenType.Markdown]: 'Markdown',
    [TokenType.Minus]: 'Minus',
    [TokenType.NullTerminator]: 'NullTerminator',
    [TokenType.Pipe]: 'Pipe',
    [TokenType.QuestionMark]: 'QuestionMark',
    // RightBrace,
    // RightBracket,
    [TokenType.RightParen]: 'RightParen',
    [TokenType.SpecialWord]: 'SpecialWord',
    [TokenType.Tag]: 'Tag'
  })[type];
}

function getTokenCharacter(type: TokenType): string {
  return ({
    [TokenType.None]: '',
    [TokenType.Ampersand]: '&',
    [TokenType.Arrow]: '=>',
    [TokenType.Colon]: ':',
    [TokenType.Comma]: ',',
    // [TokenType.Description]: 'Description',
    [TokenType.Equal]: '=',
    // [TokenType.Identifier]: 'Identifier',
    // [TokenType.Initializer]: 'Initializer',
    // LeftBrace,
    // LeftBracket,
    [TokenType.LeftParen]: '(',
    // [TokenType.LineTerminator]: 'LineTerminator',
    // [TokenType.Markdown]: 'Markdown',
    [TokenType.Minus]: '-',
    // [TokenType.NullTerminator]: 'NullTerminator',
    [TokenType.Pipe]: '|',
    [TokenType.QuestionMark]: '?',
    // RightBrace,
    // RightBracket,
    [TokenType.RightParen]: ')',
    // [TokenType.SpecialWord]: 'SpecialWord',
    [TokenType.Tag]: '@'
  })[type];
}

export default TokenType;