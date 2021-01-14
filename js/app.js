const button = document.querySelector('.btn');
const jokeList = document.querySelector(".jokes");
document.querySelector('input[type="number"]').value = 0;
button.addEventListener('click', getJokes);

function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;
    if (number > 0) {
        jokeList.innerHTML = "";
        let url = `https://api.icndb.com/jokes/random/${number}`;


        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            for (let index = 0; index < data.value.length; index++) {
                const element = data.value[index];
                jokeList.innerHTML += `<li>* ${element.joke}</li><br>`
            }
        });
        // console.log(number);
        e.preventDefault();
    }
    else {
        jokeList.innerHTML = `<li class="error">ERROR: Please, enter a valid number!</li>`
    }
}