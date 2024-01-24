// nav
$('.openIcon').click(function () {
  $('.sidenav').css('left', '0px');
 
})

$('.fa-xmark').click(function () {
  $('.sidenav').css('left', '-270px');
})
// scroll
$('a').click(function () {
let x = $(this).attr('href')  
let xTop = $(x).offset().top
console.log(xTop)
$('body,html').animate({
  scrollTop: xTop
},1000)
})


 $(window).scroll(function () {
  let windowScroll = $(window).scrollTop();
 let homeHeight =  $('#home').height()
 if(windowScroll > homeHeight){
  $('.openIcon').hide();
 }else{
  $('.openIcon').show();
 }

})

// details

$('.slider-down h3').click(function () {
  $(this).next().slideToggle(1000);
$('.slider-down div').not($(this).next()).slideUp(1000);
})


// Set the target date and time for the countdown
let targetDate = new Date("2024-01-01T00:00:00Z");

function updateTimer() {
  // Get the current date and time
  let currentDate = new Date();

  // Calculate the remaining time
  let remainingTime = targetDate - currentDate;

  // Calculate the days, hours, minutes, and seconds
  let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}


updateTimer();


setInterval(updateTimer, 1000);


let getTextArea = document.getElementById("message");
let count = document.getElementById("count");

getTextArea.addEventListener("keyup", function () {
  count.innerHTML = 100 - getTextArea.value.length;
});

