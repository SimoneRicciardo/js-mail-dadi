
let MainButton = document.getElementById('main-button');
MainButton.addEventListener('click', function(){

    const numeroComputer = Math.floor(Math.random() * 6 + 1);
    document.getElementById("numeroPC").innerHTML = numeroComputer;

    const numeroGiocatore = Math.floor(Math.random() * 6 + 1);
    document.getElementById("numeroGiocatore").innerHTML = numeroGiocatore;

    if(numeroGiocatore > numeroComputer)
      document.getElementById("risultato").innerHTML = "hai vinto";
    else
      document.getElementById("risultato").innerHTML = "hai perso";

    if(numeroGiocatore == numeroComputer)  
      document.getElementById("risultato").innerHTML = "pareggio";

});
  