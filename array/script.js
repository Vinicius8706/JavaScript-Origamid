var videoGames = ['Switch', 'PS4', 'Xbox','3DS'];

// for(var item = 0; item < videoGames.length; item++) {
//   console.log(item)
// }

// var ultimoItem = videoGames.pop()

// for(var numero = 0; numero < 10; numero++){
//   console.log(numero);
// }

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item=== 'PS4']){
    break;
  }
}

videoGames = videoGames.forEach(function(item){
  console.log(item)
})

var frutas =  ['Banana','Pera', 'Maçã', 'Uva', 'Acabacaxi', 'Melância']

for(var fruta = 0; fruta < frutas.length; fruta++){
  console.log(frutas[fruta])
  if(frutas[fruta]=== 'Pera'){
    break
  }
}

var ultimaFruta = frutas.pop(frutas.length - 1)