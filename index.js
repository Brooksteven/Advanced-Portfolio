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

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
  }
  
  //create contact class
  function contact(event) {
    //this stops the form from just automatically rtefreshing and allow the event to pass. the event is the name, email, and message
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    //this allows users to send the form
    emailjs
      .sendForm(
        "service_2janx4t",
        "template_oiogw9r",
        event.target,
        "olYE-xIKGJsqcw8_R"
      )
      //because we have to wait for the sever we add a then
      //in order to execute the code after the server it needs to be in a then
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
                
      //THIS IS MY FAKE DATA JUST TO MAKE SURE IT WORKS SO I DON'T HAVE TO WAIST MY EMAILS
            //this creates a constent loading that targets the loading class we created
    //const loading = document.querySelector('.modal__overlay--loading')
    //const success = document.querySelector(.modal__overlay--success')
                //when they select contact this will show the loading
                //this makes the spinner visible
    //loading.classList += " modal__overlay--visible");
    //setTimeout(() => {
                //we don't want this class anymore we want it invisible
      //loading.classList.remove("modal__overlay--visible");
                //here we show the success state that it worked
      //success.classList += " modal__overlay--visible";
    //}, 1000);
    //})
  
    //this .catch is if there is an error (server is down or i've used up all my emails)
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        //the user will be alerted
        alert(
          "The email service is temporarily unavailable. Please contact me directly on Steven.lynn.brooks@gmail.com"
        );
      });
  }
  
  //here we will toggle (assign or remove a class directly from an element) the modals
  function toggleModal() {
    //if modal is open make it false so the user can close it
    if (isModalOpen) {
      
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    //once modal is closed we make it true so we can open it
    isModalOpen = true;
    document.body.classList += " modal--open";
  }
  