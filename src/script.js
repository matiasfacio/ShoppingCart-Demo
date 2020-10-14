window.addEventListener("scroll", (event) => {
  if (window.pageYOffset > 100) {
    scrollingAroundOn();
  } else {
    scrollingAroundOff();
  }
});

function scrollingAroundOn() {
  let header = document.querySelector(".App-header");
  let logo = document.querySelector(".logoCat");
  header.classList.add("hideMe");
  logo.classList.add("hideMeLogo");
}

function scrollingAroundOff() {
  let header = document.querySelector(".App-header");
  let logo = document.querySelector(".logoCat");
  logo.classList.remove("hideMeLogo");
  header.classList.remove("hideMe");
}

// window.addEventListener('load', () => {
//     const cartLogo = document.querySelector('#cartLogo')
//     cartLogo.addEventListener('click', function(){
//     document.querySelector('.showCartContainer').classList.add('showCartContainerDisplay')})
// })
