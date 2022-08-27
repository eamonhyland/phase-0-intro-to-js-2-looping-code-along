// const cards = ['Guadalupe', 'Ollie', 'Aki'];

const phrases = []

function writeCards(cards, event) {
  for (let i = 0; i < cards.length; i++) {
    phrases.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
  }

  return(phrases);

}

function countDown(start) {
  for (let i = start; i > -1; i--) {
  console.log(i);

} } 

countDown(11); 