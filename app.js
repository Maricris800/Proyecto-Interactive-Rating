
let valueButtonFeedback = 0;

const botonesFeedback = document.querySelectorAll(".numero-feedback");
const botonSubmit= document.querySelector(".button-submit");
const newScreen = document.querySelector("body");

botonesFeedback.forEach(btn => {
    btn.addEventListener("click", (e) => {
        botonesFeedback.forEach(btn => {
            btn.classList.remove("numero-feedback-selected");
            btn.classList.add("numero-feedback");
        })
        e.target.classList.remove("numero-feedback"); 
        e.target.classList.add("numero-feedback-selected");
        valueButtonFeedback = e.target.value;
        console.log(e.target.value);
    });
});


botonSubmit.addEventListener("click", (e) => {

    const container =
    `<div class="new-screen">
        <img class="illustration-thank-you" src="images/illustration-thank-you.svg" alt="thank-you">

        <h3 class="my-rate">You selected ${valueButtonFeedback} out  of 5</h3>

        <h2 class="thanks">Thank you!</h2>

        <p class="parrafo-thanks">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
        </div>`


    newScreen.innerHTML = container;
})




    


