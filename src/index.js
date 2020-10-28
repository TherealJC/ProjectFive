//DOM selector
const cardsContainer = document.getElementById('cards-container') //Container for cards
const prevBtn = document.getElementById('prev') //Previous card button
const nextBtn = document.getElementById('next') //Next cards button
const curretEl = document.getElementById('current') //Current Element
const showEl = document.getElementById('show') //Show Element
const hideEl = document.getElementById('hide') //Hide Element
const questionEl = document.getElementById('question') //Question Element
const answerEl = document.getElementById('answer') //Answer Element
const addQuestionBtn = document.getElementById('add-question') //Add question button
const clearBtn = document.getElementById('clear') //Clear cards button
const addContainer = document.getElementById('add-container') // Add cards to container

//Keep track of the current card
let currentActiveCard = 0 //Which card to show

//Store DOM cards
const cardEl = [] //Stores DOM cards in an array of elements

//Stores Card Data
const cards = getCardsData()

// Create all cards

function createCards() {
    cardData.forEach((data, index) => createCards(data, index)) //loop through data and create an array of cards
}

//Create a single card in the DOM
function createCard() {
    const card = document.createElement('div')
    card.classList.add(card)
    if(index === 0) {
        card.classList.add('active')
    }
    card.innerHTML = `
    <div> class='inner-card'>
    <div class='inner-card-front'>
    <p>
    ${data.question}
    </p>
    </div>
    <div class = 'inner-card-back'>
    <p>
    ${data.answer}
    </p>
    </div>
    </div>
    `

    card.addEventListener('click', () => card.classList.toggle('show-answer'))
}

