
let MainButton = document.getElementById('main-button');
MainButton.addEventListener('click', function(){

    const numeroComputer = Math.floor(Math.random() * 5 + 1);
    document.getElementById("numeroPC").innerHTML = numeroComputer;

    const numeroGiocatore = Math.floor(Math.random() * 5 + 1);
    document.getElementById("numeroGiocatore").innerHTML = numeroGiocatore;

    if(numeroGiocatore > numeroComputer)
      document.getElementById("risultato").innerHTML = "hai vinto";
    else
      document.getElementById("risultato").innerHTML = "hai perso";
  
});

/*const numeroComputer = Math.floor(Math.random() * 5 + 1);
const numeroGiocatore = Math.floor(Math.random() * 5 + 1);

if (numeroComputer > numeroGiocatore){
    risultato = 
}




function lancio() {
    var num_pc1=Math.round(Math.random()*5+1);
    var num_pc2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_pc1").innerHTML ="Lancio computer " + num_pc1 + ", ";
    document.getElementById("numero_pc2").innerHTML =num_pc2;
    document.getElementById("image_pc1").src=num_pc1+"pc.png";
    document.getElementById("image_pc2").src=num_pc2+"pc.png";
    var totale_pc=num_pc1+num_pc2;
    document.getElementById("totale_pc").innerHTML =" , con un totale di " + totale_pc + " punti";
      
          
    var num_1=Math.round(Math.random()*5+1);
    var num_2=Math.round(Math.random()*5+1);
          
    document.getElementById("numero_1").innerHTML ="Tu hai ottenuto " + num_1 + ", ";
    document.getElementById("numero_2").innerHTML =num_2;
    document.getElementById("image_1").src=num_1+".png";
    document.getElementById("image_2").src=num_2+".png";
    var totale1=num_1+num_2;
    document.getElementById("totale1").innerHTML =" e hai totalizzato " + totale1 + " punti";
     */ 
  