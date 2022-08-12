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
