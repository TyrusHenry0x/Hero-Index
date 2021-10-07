// 1.  Connect file with API
// 2. Make sure information is being pulled from API
// 3. Begin createing interface
//  - Make a div for the information being displayed

const apiKey = '2893137147570471'

// const result = (hero) => {
//   const apiKey = '2893137147570471';



// }

function randomizer() {
  let calc = Math.floor((Math.random() * 731) + 1);
  return (calc);
}





// document.querySelector('#random-button').addEventListener('click', randomizer())



const fetchRequest = () => {

  let newNum = randomizer()
  const data = `https://superheroapi.com/api.php/2893137147570471/${newNum}/`;

  console.log(data)
  let superHeroData;
  fetch(data)
    .then((res) => { return res.json() })
    .then((resJSON) => {
      console.log(resJSON)
      // showHeroInfo(resJSON.results)
      superHeroData = resJSON
      console.log(superHeroData)
      createHeroCard(superHeroData)
    })
    .catch((err) => {
      console.error(`error: ${err}`)
    })
  
}

document.querySelector('#random-btn').addEventListener('click', (e) => {
  e.preventDefault();
  fetchRequest()
})

function createHeroCard(data) {
  

  const middleCard = document.querySelector('#imgHolder')

  document.querySelector('#imgHolder').pop

  // hero card
  const heroCard = document.createElement('div')
  heroCard.className = ('hero-card')
  console.log(data.image.url)
  
  // hero Image
  const heroImg = document.createElement('img')
  heroImg.src = data.image.url
  heroImg.id = ('hero-img')
  heroCard.append(heroImg)
  middleCard.append(heroCard)

  
}


  // const heroCard = document.createElement('div')
  // heroCard.className = 'hero-card'

  // const heroImg = document.createElement('img')
  // heroImg.className = 'hero-card-img'

  // heroImg.setAttribute('src', data[0].image.url);

  // document.body.append(heroImg)


//   const heroCard = document.createElement('div')
//   heroCard.className = 'hero-card'

//   const heroImg = document.createElement('img')
//   heroImg.className = 'hero-card-img'

// heroImg.src = 'data.image.url'
//   // img.setAttribute('src', data.image.url);

//   document.body.append(heroImg)




// createHeroCard()

// document.getElementById('hero-name').onkeyup = getData;

// let herId = 0

// const val = document.getElementById('hero-name').value;
// var list = document.getElementById('auto-complete');
// clearlist();

// const showHeroInfo = (heroInfo) => {

//   heroInfo.forEach(hero => {
//     const name = document.createElement('h2')
//     name.innerText = hero.name
//     name.className = 'heroInfo'
//     heroInfoDiv.append(name)

//     const power = document.createElement('h2')
//     power.innerText = hero.power
//     power.className = 'heroInfo'
//     heroInfoDiv.append(power)

//     const intelligence = document.createElement('h2')
//     intelligence.innerText = power.intelligence
//     intelligence.className = 'heroInfo'
//     heroInfoDiv.append(intelligence)

//     const strength = document.createElement('h2')
//     strength.innerText = power.strength
//     strength.className = 'heroInfo'
//     heroInfoDiv.append(strength)

//     const speed = document.createElement('h2')
//     speed.innerText = power.speed
//     speed.className = 'heroInfo'
//     heroInfoDiv.append(speed)

//     const durability = document.createElement('h2')
//     durability.innerText = power.durability
//     durability.className = 'heroInfo'
//     heroInfoDiv.append(durability)

//     const combat = document.createElement('h2')
//     power.innerText = hero.power
//     power.className = 'heroInfo'
//     heroInfoDiv.append(power)

//   })
// }


// const hero = document.createElement("div")


// const name = superhero.name;
// const power = superhero.power;
// const intelligence = power.intelligence;
// const strength = power.strength;
// const speed = power.speed;
// const durability = power.durability;                 
// const combat = power.combat;
// const bio = superhero.biography
// const full_name = bio['full-name'];
// const alter_egos = bio['alter-egos'];
// const gender = superhero.appearance.gender;


// const submitButton = document.querySelector("#search-btn")

// submitButton.addEventListener("click", (ev) => {
//   ev.preventDefault()



//   result(document.querySelector('#search-bar').value)
// })




//   document.getElementById('hero-name').innerText = data.name;
//   const powers = data.powerstats;
//   addPowers(powers);
//   const otherNames = data.biography.aliases;
//   aliases(otherNames);
//   biography(data.biography);
//   const connections = data.connections["group-affiliation"];
//   document.getElementById('connections').innerText = 'Connections : ' + connections;
//   const publisher = document.createElement('span')
//   publisher.innerText = data.biography.publisher;

//   publisher.style.fontFamily = 'sans=serif';
//   publisher.style.fontSize = '1.3rem';
//   document.getElementById('additional-info').appendChild(publisher);
// }