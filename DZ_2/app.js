const block = document.querySelector(".block")

let position = 0;
let PositionTop = 0;

const mov = () => {
 if (position <= 460 && PositionTop == 0) {
  position += 16;
  block.style.left = `${position}px`;
  setTimeout(mov, 100);
 }
 else if (position >= 460 && topPosition <= 460) {
  PositionTop += 16;
  block.style.top = `${topPosition}px`;
  setTimeout(mov, 100);
 } else if (topPosition >= 460 && position != 0) {
  position -= 16;
  block.style.left = `${position}px`;
  setTimeout(mov, 100);
 } else if (position == 0 && PositionTop != 0) {
  PositionTop -= 16;
  block.style.top = `${topPosition}px`;
  setTimeout(mov, 100);
 }
};

motion();

// Таймер

let counter = 0;

setInterval (() => {
    counter++
    console.log(counter, 'секунд');
}, 1000);
