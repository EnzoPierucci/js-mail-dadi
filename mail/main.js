    let listaMailAutorizzate = ["utente1@gmail.com", "utente2@yahoo.com", "utente3@libero.com","utente4@gmail.com","utente5@gmail.com"];

    let mailUtente = prompt("Inserisci la tua mail:");

    if (listaMailAutorizzate.includes(mailUtente)) {
      alert("Accesso autorizzato, Benvenuto.");
    } else {
      alert("Accesso negato. La tua email non è autorizzata.");
    }
