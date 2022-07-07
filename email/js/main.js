const emailInvitati = ['mario.rossi@gmail.com', 'elisa.bianchi@gmail.com', 'simone.lorem@gmail.com', 'viola.rossetti@gmail.com', 'laura.ferri@gmail.com'];

let MainButton = document.getElementById('main-button');
MainButton.addEventListener('click', function(){

    let email = document.forms["myForm"].email.value;

    for (let i = 0; i < emailInvitati.length; i++)

    if ((email != emailInvitati[i]) || (email == "")){
      alert("Indirizzo E-mail non valido");
    }

    else {
       alert("L'indirizzo email che hai inserito e' valido");
    }

    console.log(email)
  
});
