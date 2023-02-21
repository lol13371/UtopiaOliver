// NFT Counter
db = window.localStorage;

if (db.getItem('amount') == null)
{
    var amount = 1623
    db.setItem("amount", amount)
} else {
    var amount = parseInt(db.getItem('amount'))
}
smooth_amount = amount
var counter = 0
// Update the count down every 1 second
var x = setInterval(function() {
  counter++
  if (counter > 40)
  {
    counter = 0
    if (amount < 1920)
    {
        logic = Math.floor((1 - (amount / 1930)) * 100)
        amount = Math.floor(Math.random() * logic) + amount
        db.setItem("amount", amount)
        db.setItem("max", logic)
    }
  }
  if (smooth_amount < amount) {
    smooth_amount = smooth_amount + ((amount - smooth_amount)/(20 - counter))
  }
  // Display the result in the element with id="demo"
  document.getElementById("nft_left").innerHTML = smooth_amount.toFixed(0);
  // If the count down is finished, write some text
}, 100);


//smooth scrolling
const homeButton = document.querySelector('a[href="#header"]');
const aboutButton = document.querySelector('a[href="#about"]');
const teamButton = document.querySelector('a[href="#team"]');
const header = document.getElementById('header');
const about = document.getElementById('about');
const team = document.getElementById('team');

homeButton.addEventListener('click', () => {
  header.scrollIntoView({ behavior: 'smooth' });
});

aboutButton.addEventListener('click', () => {
  about.scrollIntoView({ behavior: 'smooth' });
});

teamButton.addEventListener('click', () => {
  team.scrollIntoView({ behavior: 'smooth' });
});



// Get the link element for the "Team" button
const teamLink = document.querySelector('a[href="#team"]');

// Get the team modal element
const teamModal = document.getElementById('team');

// Add an event listener to the link element
teamLink.addEventListener('click', function(e) {
  e.preventDefault(); // prevent the default link behavior of jumping to the team section

  // Update the team modal styles
  teamModal.style.display = 'block';
  teamModal.querySelector('.bg-overlay').style.opacity = '0.3';
  teamModal.querySelector('.bg-overlay').style.visibility = 'inherit';
  teamModal.querySelector('.modal-container').style.transform = 'translate(0px, 0px)';
  teamModal.querySelector('.modal-container').style.opacity = '1';
  teamModal.querySelector('.modal-container').style.visibility = 'inherit';
});

// Add an event listener to the close button to hide the modal when clicked
teamModal.querySelector('.close').addEventListener('click', function() {
  teamModal.style.display = 'none';
});
