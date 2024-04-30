const monstersContainer = document.querySelector('#monstersContainer');

async function getMonsters() {
    const res = await fetch('https://ivannnnavi.github.io/monster_API/monsters.json');
    const data = await res.json();
    data.forEach(monster => {
        const {name, origin, type, famous_work} = monster;
        const card = document.createElement("div");
        card.classList.add('monsterCard');
        const cardName = document.createElement('h3');
        cardName.textContent = name;
        cardName.classList.add('monsterCard__heading');
        const cardOrigin = document.createElement('p');
        cardOrigin.textContent = `Origin: ${origin}`;
        const cardType = document.createElement('p');
        cardType.textContent = `Type: ${type}`;
        const cardWork = document.createElement('p');
        cardWork.textContent = `Famous Work: ${famous_work}`;
        card.append(cardName, cardOrigin, cardType, cardWork);
        monstersContainer.append(card);
    })
}

getMonsters();
