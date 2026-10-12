let blok = document.querySelector("#blok");
let tashqiEkran = document.querySelector("#ekran");
let ekran = document.createElement("div");
let yutgan = document.querySelector("#yutgan")
let tugmalar = document.querySelectorAll(".oyin")

function getComputerChoice() {
  const variant = ["tosh", "qaychi", "qogoz"];

  let randomNum = Math.floor(Math.random() * 3);

  return variant[randomNum];
}
let humanScore = 0;
let compScore = 0;

function playRound(com, odam) {
  
  odam = odam.toLowerCase();
  if (
    (odam == "tosh" && com == "tosh") ||
    (odam == "qaychi" && com == "qaychi") ||
    (odam == "qogoz" && com == "qogoz")
  ) {
    // alert("durrang");
    yutgan.textContent = "durrang"
  }
  // if(odam==com)deb yozsak ham bo'larkan.
  else if (
    (odam == "tosh" && com == "qaychi") ||
    (odam == "qaychi" && com == "qogoz") ||
    (odam == "qogoz" && com == "tosh")
  ) {
    // alert("odam yutdi");
    yutgan.textContent = "odam yutdi"
    humanScore++;
  } else {
    yutgan.textContent = "komputer yutdi"
    // alert("komputer yutdi");
    compScore++;
  }
  ekran.textContent = `Kom-${compScore} & Odam - ${humanScore}`;
  checkWinner()
}


function checkWinner(){
    if(humanScore === 5){
        alert('Odam yutdi')
        // tugmalar.forEach(item => item.classList.add('.disabl'))
        tugmalar.forEach(item => item.disabled = true)
    }else if(compScore === 5){
        alert('Com yutdi')
        tugmalar.forEach(item => item.disabled = true)
    }
}

blok.addEventListener("click", (event) => {
  const tanlangan = event.target.closest(".oyin");
  const qiymatOdam = tanlangan.dataset.value;
  playRound(getComputerChoice(), qiymatOdam);
});



tashqiEkran.appendChild(ekran);

