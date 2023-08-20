let treasure = (location) => {
  const loot = Math.floor(Math.random() * 8)
  const bomb  = Math.floor(Math.random() * 8)

 
  if (loot === bomb)
  {
    const loot = Math.floor(Math.random() * 8)
    const bomb  = Math.floor(Math.random() * 8)
  }
  else if(location === loot) 
  {
    alert("YOU WON!")
    return document.getElementById(location).innerHTML = "💴"
  }
  else if(location === bomb) 
  {
    alert("YOU LOST!")
    return document.getElementById(location).innerHTML = "💣"
  }
   else
  {
    alert("TRY AGAIN!")
    return document.getElementById(location).innerHTML = "🦴"
  }
}


