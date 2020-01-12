let mssgs = ["You will feed a kitty more than once today!", "You will clean some puke today...", "Your ankles will be bitten today, FUN!", "You will get some kitty love today, Lucky Bastard!", "You will share a meal with a kitty", "You will clean some kitty poop. Now, slave!", "You will get some kitty love bites", "A kitty will sing you a sad song entitled 'I haven't eaten for more than 5 minutes", "You will be looking for a kitty but you need to remember that it is the kitty who finds you.", "You will have a great opportunity to give a kitty some snacks", "A kitty will give you a long stare. You will be so blessed", "You will be chosen a 'Not The Most Terrible Slave of The month', woohooo!", "A kitty will sit on you so you won't be able to move for hours. Don't you dare to move!", "A kitty will sleep on your pillow. What an honour!", "You will be woken at 4:00am to the delightful sound of a joyful kitty play", "A kitty will jump on your back when you tie your lace. Sensational!", "You will not be alone. A kitty will be watching you. Yes, in the toilet too.", "A kitty will let you take it for a walk outside. Enjoy!", "A kitty will scratch your sofa. Be happy it's not your face!", "A kitty will look at you and slowly close its eyes. Nirvana!!!", "You will get to brush a kitty", "You will fall in love with a kitty!", "A kitty will run straight under you legs while waling and you will almost fall. What is wrong with you!?", "A kitty will come to live with you. Rejoice!", "A kitty will help you with work laying down on your keyboard"]
let id = "A";
let itm = document.getElementById(id);
for (let i=66; i < 91; i++) {
  let cln = itm.cloneNode(true);
  cln.id = String.fromCharCode(i);
  cln.setAttribute('data-key', i.toString());
  cln.innerHTML = mssgs[i-66];
  document.getElementById("container").appendChild(cln);
  id = String.fromCharCode(i);
}

function removeTransition(e) {
  
    if (e.propertyName !== 'transform')
      return;
    e.target.classList.remove('animation');
    
  }
var previous = "";
function showMessage (e) {
  
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (key !== previous && previous !== "") {
    previous.style.opacity= "0"
    }
  key.style.opacity = "100";
 
   key.classList.add('animation');
    
   
  
  previous = key;
  
}

const keys = Array.from(document.querySelectorAll('.key'));
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', showMessage);
