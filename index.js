//template_oiogw9r
//service_2janx4t
//olYE-xIKGJsqcw8_R

let isModalOpen = false;
let contrastToggle = false;
//this allows the shapes not to go to fast
const scaleFactor = 1 / 20;

//this targets all the shapes and I put them in an array and called them shapes
function moveBackground(event) {
  //query will return the array
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

//here we loop over everything
//this will loop over every single item in the array
  for (let i = 0; i < shapes.length; ++i) {
    //this allows us to swap direction of movement for odd shapes
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    //this targets the specific shape and style
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}