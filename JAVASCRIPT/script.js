<!--JAVASCRIPT MANIPULATION-->
		<!--REAL-TIME COUNTDOWN -->

	
		function updateCountdown(){
		const now = new Date();
		const nextFriday = new Date();
	
	
			<!--SET TO NEXT FRIDAY-->
		let daysUntilFriday	= (5 + 7 - now.getDay()) % 7;
		if (daysUntilFriday === 0) daysUntilFriday = 7;
		
		
		nextFriday.setDate(now.getDate() + daysUntilFriday);
		nextFriday.setHours(9, 0, 0, 0);
	
		let diff = nextFriday - now;
		
		if(diff < 0){
			nextFriday.setDate(nextFriday.getDate() + 7);
			diff = nextFriday - now;
		}
	
		const days = Math.floor(diff / (1000 * 60 * 60 * 24));
		const hours=Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	
		document.getElementById('timer').innerHTML = `${days}d ${hours}h`;
		}
	window.addEventListener('load', function(){
			updateCountdown();
			setInterval(updateCountdown, 60000);
	});
		
		
		
		
		<!--MINI GAME-->
	const wordText = document.querySelector(".para"),
	hintText = document.querySelector(".hint span"),
	timeText = document.querySelector(".time b"),
	inputField = document.querySelector("input"),
	refreshButton = document.querySelector(".refresh-word"),
	checkButton = document.querySelector(".check-word");
	
	let rightWord;
	let timer;
	
	const gameTimer = (maxTime) => {
		clearInterval(timer);
		timer = setInterval(() => {
			if (maxTime > 0){
				maxTime--;
				return timeText.innerText = maxTime;
			}
			clearInterval(timer);
			alert(`Time Out! "${rightWord.toUpperCase()}" was the correct word.`);
			miniGame();
		}, 1000);
	};
		
		
	  const miniGame = () => {
		  gameTimer(30);
		  let random = words[Math.floor(Math.random() * words.length)]; //Getting random words from scramble.js  
		  let wordArray = random.word.split(""); //Splits each letter of random word
		  
		  for (let i = wordArray.length - 1; i > 0; i--){
			  let j = Math.floor(Math.random() * (i + 1)); //Gets random numbers
			  //Shuffles and swipes wordArray letters randomly
			  [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
		  }
		  
		  wordText.innerText = wordArray.join(""); //Passes shuffled word as word text
		  hintText.innerText = random.hint; //Passes random hint to hint text
		  rightWord = random.word.toLowerCase(); //Passes random word to the right word
		  inputField.value = ""; //Empty input field
		  inputField.setAttribute("maxlength", rightWord.length);  //Input maxlength equals word length
		  
	  }
	  
	  miniGame();
	  
	  const confirmWord = () =>{
		 let userWord = inputField.value.toLocaleLowerCase();
		   if (!userWord) return alert("Please enter a word"); //When input field is blank
		   
		   //When a wrong word is entered
			if (userWord !== rightWord) return alert(`Oops! "${userWord}" is incorrect. Sign up to be better.`);
	
			alert(`Great Job! "${userWord.toUpperCase()}" is correct. Sign up to learn more.`);
			miniGame();
	  }
	  
	  refreshButton.addEventListener("click", miniGame);
	  checkButton.addEventListener("click", confirmWord);
	  
	const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}


//JAVASRIPT MANIPULATION - URGENT EFFECT ON TRY FOR FREE
// Add to your script.js file
document.addEventListener('DOMContentLoaded', () => {
    const tryFreeButton = document.querySelector('.nav-link .try');
    
    if (tryFreeButton) {
        // Add urgent effect
        tryFreeButton.classList.add('urgent-effect');
        
        // Add click effect
        tryFreeButton.addEventListener('click', function(e) {
            e.preventDefault();
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
});