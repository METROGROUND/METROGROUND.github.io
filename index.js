
function f() {
    setTimeout(() => {

        
        const p = document.getElementById("text");
        
        const randomNumber = Math.random();
        
        console.log("timer", randomNumber);

        if (randomNumber > 0.5) {
            p.setAttribute("hidden", "true");
        } else {
            p.removeAttribute("hidden");
        }

        f();


    }, 1000);
}

f();
function rps(item) {
  if(!item) console.error('Rock Paper Scissors: No item to play with specified')
  if(item !== undefined && item !== 'R' && item !== 'P' && item !== 'S' && item !== 'Rock' && item !== 'Paper' && item !== 'Scissors' && item !== 'rock' && item !== 'scissors' && item !== 'paper') {
     console.error('Rock Paper Scissors: That item is not valid, use rpsGuide() to show the list of items available')
  }
  if(item === 'Rock' || item === 'rock' || item === 'R') {
     const random = ['🗻 Rock', '📄 Paper', '✂ Scissors']
      const r = random[Math.floor(Math.random() * random.length)]
      if(r === '🗻 Rock') {
        console.warn('❔ It\'s a tie, you chose ' + item + ' and I chose ' + r)
      }
      if(r === '📄 Paper') {
        console.error('❌ You lost, you chose ' + item + ' and I chose ' + r)
      }
      if(r === '✂ Scissors') {
        console.log('🏆 You won, you chose ' + item + ' and I chose ' + r)
      }
  }
  if(item === 'Paper' || item === 'paper' || item === 'P') {
    const random = ['🗻 Rock', '📄 Paper', '✂ Scissors']
      const r = random[Math.floor(Math.random() * random.length)]
      if(r === '🗻 Rock') {
        console.log('🏆 You won, you chose ' + item + ' and I chose ' + r)
      }
      if(r === '📄 Paper') {
        console.warn('❔ It\'s a tie, you chose ' + item + ' and I chose ' + r)
      }
      if(r === '✂ Scissors') {
        console.error('❌ You lost, you chose ' + item + ' and I chose ' + r)
      }
  }
  if(item === 'Scissors' || item === 'scissors' || item === 'S') {
     const random = ['🗻 Rock', '📄 Paper', '✂ Scissors']
      const r = random[Math.floor(Math.random() * random.length)]
      if(r === '🗻 Rock') {
        console.error('❌ You lost, you chose ' + item + ' and I chose ' + r)
      }
      if(r === '📄 Paper') {
        console.log('🏆 You won, you chose ' + item + ' and I chose ' + r)
      }
      if(r === '✂ Scissors') {
        console.warn('❔ It\'s a tie, you chose ' + item + ' and I chose ' + r)
      }
  }
}
function rpsGuide() {
  // LATER
}
