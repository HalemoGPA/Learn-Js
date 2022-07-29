let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// s? - optional
// \/ - escape
// ?: - non-capturing group
// [-\w] - any character except whitespace
// \. - period
// .* - any character [0 or more]
// \w+ - any word [1 or more]
// i - case insensitive
