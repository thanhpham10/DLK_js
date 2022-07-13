function process(user, computer){
    // dam : 0
    // la : 1
    // keo : 2
    let result

    if (user == 0){
        if (computer == 0){
            result = "draw"
        }
        else if (computer == 1){
            result = "win"
        }
        else{
            result = "lose"
        }
    }

    if (user == 1){
        if (computer == 0){
            result = "win"
        }
        else if (computer == 1){
            result = "draw"
        }
        else{
            result = "lose"
        }
    }

    if (user == 2){
        if (computer == 0){
            result = "lose"
        }
        else if (computer == 1){
            result = "win"
        }
        else{
            result = "draw"
        }
    }

    return result
}

function com(){
    return Math.floor(Math.random() * 3);
}

function convert(user){
    let user_input;
    
    if (document.getElementById('rd1').checked) {
        user_input = 0
    }
    else if (document.getElementById('rd2').checked) {
        user_input = 1
    }
    else{
        user_input = 2
    }

    return user_input
}

function convert1(user){
    let option

    switch (user) {
        case 0:
            option = "Rock"
            break;
    
        case 1:
            option = "Paper"
            break;

        case 2:
            option = "Scissors"
            break;

        default:
            option = "Invalid ! Try again"
            break;
    }
    
    return option
}


// Main Program

function main(){
    let compu = com()
    let user = convert()
    let res = process(user,compu)

    console.log(compu)
    console.log(user)

    document.write("Computer choice : " + convert1(compu) + "<br>")
    document.write("You choose : " + convert1(user) + "<br>")
    document.write("Result : " + res + "<br>")
    
}