//Реализовать страницу, на которой будет 1 кнопка.
// Нажатие на кнопку должно вызывать появление картинки,
//которую вы должны получить,
// используя fetch и API сервера https://dog.ceo/api/breeds/image/random

const btnPic = document.getElementById("btn_pic");
const dogImage = document.getElementById("dogImage");
let url = "https://dog.ceo/api/breeds/image/random";

btnPic.addEventListener("click", getImage);

function getImage() {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(
          new Error(response.status + " " + response.statusText)
        );
      }
    })
    .then((res) => {
      if (res.status == "success") {
        dogImage.src = res.message;
      } else {
        return ProcessingInstruction.reject(
          new Error("something goes wrong! Status " + res.status)
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
