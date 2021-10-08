const apiKey = '2893137147570471'

function randomizer() {
  let calc = Math.floor((Math.random() * 731) + 1);
  return (calc);
}

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

  document.querySelector('#imgHolder').innerHTML = ''

  // hero card
  const heroCard = document.createElement('div')
  heroCard.className = ('hero-card')
  
  
  // hero name 
  const heroName = document.createElement('h2')
  heroName.id = ('hero-name')
  heroName.append(data.name)
  heroCard.append(heroName)

  // hero Image
  const heroImg = document.createElement('img')
  heroImg.src = data.image.url
  heroImg.id = ('hero-img')
  heroCard.append(heroImg)

  // hero stats
  const heroStats = document.createElement('div')
  heroStats.id = ('hero-stats')

  const heroCombat = document.createElement('h2')
  heroCombat.append("Combat: " + (data.powerstats.combat))
  heroStats.append(heroCombat)

  const heroDurability = document.createElement('h2')
  heroDurability.append("Durability: " + (data.powerstats.durability))
  heroStats.append(heroDurability)

  const heroIntelligence = document.createElement('h2')
  heroIntelligence.append("Intelligence: " + (data.powerstats.intelligence))
  heroStats.append(heroIntelligence)
  
  const heroPower = document.createElement('h2')
  heroPower.append("Power: " + (data.powerstats.power))
  heroStats.append(heroPower)

  const heroSpeed = document.createElement('h2')
  heroSpeed.append("Speed: " + (data.powerstats.speed))
  heroStats.append(heroSpeed)
  
  const heroStrength = document.createElement('h2')
  heroStrength.append("Strength: " + (data.powerstats.strength))
  heroStats.append(heroStrength)

heroCard.append(heroStats)

  middleCard.append(heroCard)

}
