export class App{

    passwordCheckLenght(password) {
        return password.length >= 8;
    }

    passwordCheckSpecial(password) {
        const specialCharacters = [
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
            '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '~', '`'
        ];
        return specialCharacters.some(char => password.includes(char));
    }

    passwordCheckNumber(password) {
        return true;
    }

} 

