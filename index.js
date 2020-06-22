function writeCards(n, eN){
  for (let i = n.length-1 ; i >= 0  ;i-- ) {
    console.log(`Thank you, ${n[i]}, for the wonderful ${eN} gift!`)
  }
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(n, eN){
  for (let i = n.length-1 ; i >= 0  ;i-- ) {
    console.log(`Thank you, ${n[i]}, for the wonderful ${eN} gift!`)
  }
}
countDown(["Ada", "Brendan", "Ali"], "birthday");