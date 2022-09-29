const qouteEl = document.querySelector('.qoute-words');
let qouteWords = [
  "Develope",
  "Code",
  "Design",
  "Create",
];
let index = 0;
changeQoute()

function changeQoute(){
    
        qouteEl.innerHTML = `<h1> <span class="love-to">Love to</span> ${qouteWords[index]}</h1>`;
        index++;
        if (index == qouteWords.length){
            index = 0;
        }
        setTimeout(changeQoute, 1000)
    
}

function revealWorkContainer() {
  let reveals = document.querySelectorAll(".work");
  for (const element of reveals) {
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealWorkContainer);
revealWorkContainer();

function revealAboutMeText(){
  let aboutMeText = document.querySelector(".aboutMe");
  let aboutMePara = document.querySelector(".text-aboutMe");
  let myImage = document.querySelector('.my-image-2');
  let circleOne = document.querySelector('.purple-circle-1')
  let circleTwo = document.querySelector('.purple-circle-2')

  let windowHeight = window.innerHeight;
    let elementTop = aboutMeText.getBoundingClientRect().top;
    let elementTopPara = aboutMePara.getBoundingClientRect().top;
    let elementTopImage = myImage.getBoundingClientRect().top;
    let elementTopCirle1 = circleOne.getBoundingClientRect().top;
    let elementTopCirle2 = circleTwo.getBoundingClientRect().top;
    let elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      aboutMeText.classList.add("active");
    } else {
      aboutMeText.classList.remove("active");
    }

    if (elementTopPara < windowHeight - elementVisible) {
      aboutMePara.classList.add("active");
    } else {
      aboutMePara.classList.remove("active");
    }
    if (elementTopImage < windowHeight - elementVisible) {
      myImage.classList.add("active");
    } else {
      myImage.classList.remove("active");
    }
    if (elementTopCirle1 < windowHeight - elementVisible) {
      circleOne.classList.add("active");
    } else {
      circleOne.classList.remove("active");
    }
    if (elementTopCirle2 < windowHeight - elementVisible) {
      circleTwo.classList.add("active");
    } else {
      circleTwo.classList.remove("active");
    }
}
window.addEventListener("scroll", revealAboutMeText);
revealAboutMeText()

function footerReveal(){
  let mainFooter = document.querySelector('.main-footer');
  let promotionFooter = document.querySelector('.promotion-footer');
  let windowHeight = window.innerHeight;
  let elementTop = mainFooter.getBoundingClientRect().top;
  let elementVisible = 150;

  if (elementTop < windowHeight - elementVisible){
    mainFooter.classList.add('active');
  }else{
    mainFooter.classList.remove('active');
  }
  if (elementTop < windowHeight - elementVisible){
    promotionFooter.classList.add('active');
  }else{
    promotionFooter.classList.remove('active');
  }
}
window.addEventListener('scroll', footerReveal);
footerReveal()