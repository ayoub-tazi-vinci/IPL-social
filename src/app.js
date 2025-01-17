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
       const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

         return numbers.some(num => password.includes(num));
    }
    passwordCheckNoIpl(password) {
            return true;
    }

} 

