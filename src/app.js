export class App{

    passwordCheckLenght(password){
        if(password.length >= 8){
            return true;
    } else {
        return false;
    } 
}

  passwordCheckSpecial(password){
    const specialCharacters = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
        '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '~', '`'
    ];
    if(specialCharacters.includes(password)){
        return true;
    }
    else{
        return false;
    }
}

} 

