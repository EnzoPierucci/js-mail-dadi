
    // idea per realizzare un d20 per d&d 
    function generaNumeroRandom() {
        return Math.floor(Math.random() * 20) + 1;
      }
  
      function mostraRisultato(giocatore) {
        let punteggioGiocatore = generaNumeroRandom();
        let punteggioComputer = generaNumeroRandom();
  
        document.getElementById("giocatoreIcosaedro").textContent = punteggioGiocatore;
        document.getElementById("computerIcosaedro").textContent = punteggioComputer;
  
        let risultato;
        if (punteggioGiocatore > punteggioComputer) {
          risultato = "Il giocatore vince";
        } else if (punteggioComputer > punteggioGiocatore) {
          risultato = "Il computer vince";
        } else {
          risultato = "È un pareggio";
        }
        document.getElementById("risultato").textContent = risultato;
      }