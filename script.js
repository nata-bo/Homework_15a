//Реализовать страницу, на которой будет 1 кнопка.
// Нажатие на кнопку должно вызывать появление картинки,
//которую вы должны получить,
// используя fetch и API сервера https://dog.ceo/api/breeds/image/random

const btnPic = document.getElementById("btn_pic");
const picBlock = document.getElementById("pic_block");
let url = "https://dog.ceo/api/breeds/image/random";

btnPic.addEventListener("click", ()=>{
    getImage();
});

function getImage() {
    let response = fetch(url);
    response.then((response) => {
        dataPromise = response.json();
        dataPromise.then((data) => {
            const dogImage = document.getElementById("dogImage");
            dogImage.src = data.message;
        
        });
    });
       
}

