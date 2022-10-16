const InInput = document.querySelector(".InnInput");
const InCheck = document.querySelector(".InnCheck");
const InResult = document.querySelector(".InnResult");

const Inn = /^[0,1]\d{13}$/;

InCheck.addEventListener("click", () => {
  if (Inn.test(InInput.value)) {
    InResult.innerText = "Correct";
    InResult.style.color = "green";
  } else {
    InResult.innerText = "Incorrect";
    InResult.style.color = "red";
  }
});

// 2

const block = document.querySelector(".block")

let position = 0;

const motion = () => {
  if (position <= 40){
    position += 10;
    block.style.left = `${position}px`;
    motion();
  }
  else if (position >400){
    position = 0;
    block.style.left = `${position}px`;
  }
  else {
    position += 40
    block.style.left = `${position}px`;
  }
}
block.addEventListener("click",()=> motion())