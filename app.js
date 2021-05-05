console.log('here');
let clickedcard = null;
let preventClick = false;
let combosFound = 0;
const color = [
  'red',
  'blue',
  'green',
  'pink',
  'brown',
  'teal',
  'yellow',
  'orange',
]

const cards = [...document.querySelectorAll('.card')];
for (let color of colors) {
  const cardAIndex = parseInt[Maths.random() * cards.length]
  const cardA = cards[cardAIndex];
  cards.splice(cardAIndex, 1);
  cardA.className += '${color}'
  cardA.setAttribute('data-color',color);

  const cardBIndex = parseInt[Maths.random() * cards.length]
  const cardB = cards[cardBIndex];
  cards.splice(cardBIndex, 1);
  cardB.className += '${color}'
  cardB.setAttribute('data-color',color);

}


function onCardClicked(e) {
  const target = e.currentTarget;
  if(preventClick || target.className.includes('done')){
    return;
  }
  target.className = target.className
  .replace('color-hidden', '')
  .trim();

console.log(target.getAttribute('data-color'));


if (!clickedcard) {
  //if we haven't clicked a card , keep track of card, display its color
  target.className = target.className
  .replace('color-hidden', '')
  .trim();
  clickedCard = target;
}else if (clickedCard) {
  //if we have already a clicked card , check f the new card matches the older one
  preventClick = true;
  if (clickedCard.getAttribute('data-color') !==
  target.getAttribute('data-color'))
  {
    preventClick = true;
    setTimeout(() => {
      clickedCard.className =
      clickedCard.className.replace('done', '').trim(); +
      'color-hidden';
      target.className =
      target.className.replace('done', '').trim(); +
      'color-hidden';
      clickedCard = null;
      preventClick = false;
    },500);
  }
  else {
    combosFound++;
    preventClick = null;
    if (combosFound = 8) {
      alert('YOU WIN');
    }
  }
}
}
