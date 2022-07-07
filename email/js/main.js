const emailInvitati = ['mario.rossi@gmail.com', 'elisa.bianchi@gmail.com', 'simone.lorem@gmail.com', 'viola.rossetti@gmail.com', 'laura.ferri@gmail.com'];

let email = document.forms["myForm"].email.value;

let MainButton = document.getElementById('main-button');
MainButton.addEventListener('click', function(){


    let accessoOk = false;

    for (let i = 0; i < emailInvitati.length; i++){

        if (email == emailInvitati[i]){
            accessoOk = true;
        }
    }

    if (accessoOk == true){
        alert("Indirizzo E-mail è valido");
    }

    else {
       alert("L'indirizzo email che hai inserito non è valido");
    }

    console.log(email);
    
});
