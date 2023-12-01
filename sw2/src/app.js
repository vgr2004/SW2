const PLAYERS = [
    "Spiderman", "Captain America", "Wonderwoman", "Popcorn", "Gemwoman",
    "Bolt", "Antwoman", "Mask", "Tiger", "Captain", "Catwoman", "Fish",
    "Hulk", "Ninja", "Black Cat", "Volverine", "Thor", "Slayer", "Vader", "Slingo"
  ];
  
  // Initialize players with image and strength
  const initPlayers = (players) => {
    // Instead of for loop, using map method
    return players.map((pName, i) => {
      return {
        name: pName,
        strength: getRandomStrength(),
        image: `images/super-${i + 1}.png`,
        type: i % 2 == 0 ? "hero" : "villain"
      };
    });
  };
  
  // Getting random strength
  const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };
  
  // Build player template
  const buildPlayers = (players, type) => {
    // Instead of for loop, using chaining of Array methods - filter, map, and join
    let validPlayers = players.filter(playerData => playerData.type == type);
    
    let fragment = validPlayers.map((playerData) => {
      return `
        <div class="player">
          <img src="${playerData.image}" alt="">
          <div class="name">${playerData.name}</div>
          <div class="strength">${playerData.strength}</div>    
        </div>
      `;
    });
    
    return fragment.join("");
  };
  
  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
  