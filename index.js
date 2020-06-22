function writeCards(a, n){
  let cards = []
  for (let i = 0 ; i < a.length ;i++ ) {
    cards.push( `Thank you, ${a[i]}, for the wonderful ${n} gift!`,)    
  }
  return cards
}

function countDown(n){
  while (n >= 0) {
    console.log(n--);
  }
}