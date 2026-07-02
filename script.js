// ===============================
// AI TECH BLOG - SCRIPT.JS
// ===============================

// Search Function
function searchArticles() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let text = card.innerText.toLowerCase();

        if(text.includes(input)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

}

// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

if(darkBtn){

darkBtn.addEventListener("click",function(){

document.body.classList.toggle("dark");

});

}
