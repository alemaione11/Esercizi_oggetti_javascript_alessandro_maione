// // // // // // ESERCIZIO 1

// // // // // // creare un oggetto persona con diverse proprietà e un metodo che permetta alla persona di salutare

let person = {
    'firstname' : 'Alessandro',
    'age' : 20,
    'hardsskills' : ['HTML', 'CSS', 'JAVASCRIPT'],
    'hair' : true,
    'sayHello' : function() {
        return `Ciao a tutti mi chiamo Alessandro`;
    }

}
console.log(person);



// // // // // // ESERCIZIO 2
// // // // // creare un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse 
// // // // // funzionalità tra cui:
// // // // //         - mostrare tutti i contatti dell’agenda
// // // // //         - mostrare un singolo contatto
// // // // //         - eliminare un contatto dall’agenda
// // // // //         - aggiungere un nuovo contatto
// // // // //         - EXTRA: modificare un contatto esistente
// // // // //         - Suggerimento:
// // // // //     let rubrica = {
// // // // //       'contacts': [
// // // // //           {'firstname': 'Nicola', 'number': '3331111111'},
// // // // //           {'firstname': 'Lorenzo', 'number': '3332222222'},
// // // // //           {'firstname': 'Paola', 'number': '3333333333'},
// // // // //             {'firstname': 'Jenny', 'number': '3334444444'}
// // // // //       ],
// // // // //       ...
// // // // //     }


let rubrica = {
          'contacts': [
              {'firstname': 'Nicola', 'number': '3331111111'},
              {'firstname': 'Lorenzo', 'number': '3332222222'},
              {'firstname': 'Paola', 'number': '3333333333'},
              {'firstname': 'Jenny', 'number': '3334444444'},
              {'firstname': 'Jenny', 'number': '333859599'},

          ],
        
        
// // // //           //  1. MOSTRARE TUTTI I CONTATTI DELL'AGENDA
         'showcontant' : function(){
            this.contacts.forEach(element => console.log(element));
         },
        
        
// // // //          // 2. MOSTRARE UN SINGOLO (o piu') CONTATTO
        'showsinglecontact' : function(searchname) {
            let filtered = this.contacts.filter(element => searchname == element.firstname);
// // // //             // abbiamo trovato UNO O PIU' contatto

// // // //              //trovato UN SOLO contatto
            if(filtered.length == 1){            
                console.log(`Il contatto trovato è : ${filtered[0].firstname} con il numero: ${filtered[0].number}`);
// // // //             //trovato PIU' DI UN contatto
            }else if(filtered.length > 1) {   
                console.log(`Sono stati trovati ${filtered.length} contatti`);
                filtered.forEach(element => console.log(`Nome: ${element.firstname}  Numero ${element.number}`));
            }  
// // // //             //quando il contatto non estite
            else{ 
                console.log(`Il contatto ${searchname}, che stai cercando non è presente nella rubbrica`);
            };
        },


// // // //         // 4. AGGIUNGERE UN NUOVO CONTATTO

        'addcontact' : function(contactfirstname, contactnumber) {
            this.contacts.push({'firstname' : contactfirstname, 'number' : contactnumber})
        },


// // // //         // RIMUOVERE UN CONTATTO

        'removecontact' : function (nome) {
           let contattorimosso = this.contacts.filter(element => element.firstname !== nome);
           console.log(contattorimosso);
        }
        

}

// // // // // 1-MOSTRARE TUTTI I CONTATTI DELLA RUBRICA NON AD ARRAY MA AD OGGETTO (QUINDI UN CONTATTO ALLA VOLTA)
 rubrica.showcontant();
 
// // // //  // 2-MOSTRARE UN UNICO CONTATTO DELLA RUBRICA (CHIARAMENTE SCELTO DA NOI)
rubrica.showsinglecontact('Lorenzo' );      

// // // // // 3-AGGIUNGERE UN NUOVO CONTATTO
rubrica.addcontact('Alessandro', 392893929);
// // // // // rubrica con l'aggiunta del nuovo contatto
console.log(rubrica.contacts);

// // // // //4-Rimuovere un contatto
rubrica.removecontact('Lorenzo');



// // // // ESERCIZIO 3
// // // // creare un oggetto bowling con una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi, ed abbia diverse
// // //  funzionalità tra cui:
// // // - creare 10 punteggi casuali per ogni giocatore:
// // // - Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, 
// // //   dieci punteggi casuali ad ogni giocatore. --> Utilizzare l’istruzione: Math.floor(Math.random() * (10 - 1 +1) + 1)
// // // - trovare il punteggio finale per ogni giocatore:
// // // - Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: 
// // //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#examples)
// // // - aggiungere un nuovo giocatore
// // // - determinare il vincitore
// // // - EXTRA: impostare una classifica dei giocatori
// // // - Dati di partenza:
// // // let bowling = {
// // // 'players': [
// // // {'name': 'Livio', 'scores': []},
// // // {'name': 'Paola', 'scores': []},
// // // {'name': 'Filippo', 'scores': []},
// // // {'name': 'Giuseppe', 'scores': []}
// // // ],
// // // ...
// // // }

let bowling = {
    'players': [
    {'name': 'Livio', 'scores': []},
    {'name': 'Paola', 'scores': []},
    {'name': 'Filippo', 'scores': []},
    {'name': 'Giuseppe', 'scores': []}
    ],

// //         // 3-aggiungere un nuovo giocatore 

    
    'addplayer' : function(nameplayer, scoreplayer){
        this.players.push({'name' : nameplayer, 'scores' : []});
    },
        
        // 1- creare 10 punteggi casuali per ogni giocatore:

    'setscores' : function() {
        this.players.forEach(element => {
            for(let i = 0; i < 10; i++){
                 element.scores.push(Math.floor(Math.random() * (10 - 0 +0) + 1));
                }
           
        } )
    },


    // 2-trovare il punteggio finale per ogni giocatore:

    'setfinalscore' : function(){
        this.players.forEach(element => element.finalscore = element.scores.reduce((acc, el) => acc + el, 0));
    },


    
     // 4-ordinare la lista dei giocatori in base al punteggio finale in ordine decrescente
    //  5- QUINDI FARE UNA CLASSIFICA

    'setwinner' : function(){
        this.players.sort((a,b) => b.finalscore - a.finalscore);
        console.log(this.players);
    },

    // -determinare il vincitore 

    'playerswinner' : function() {
        if(this.players[0].finalscore > this.players[1].finalscore){
            let winner = this.players[0];
            console.log(`Il vincitore della partita è ${winner.name} con un punteggio di ${winner.finalscore}`);
        }
    }
    }
 
bowling.addplayer('Alessandro', []);

bowling.setscores();

bowling.setfinalscore();

bowling.setwinner();

bowling.playerswinner();

console.log(bowling.players);





 




