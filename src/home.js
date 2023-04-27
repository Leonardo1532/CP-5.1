let titulo = document.getElementsByClassName('titleMovie')
let descricao = document.getElementsByClassName('overview')
let genero = document.getElementsByClassName('genre')
let nota = document.getElementsByClassName('vote_average')



fetch("https://apigenerator.dronahq.com/api/AnUOBKcb/Movies")
    .then(response => response.json())
    .then(data => {
        let index2 = 0
        for (let index = 0; index < data.length; index++) {

            titulo[index2].innerHTML = data[index].title;
            descricao[index2].innerHTML = data[index].overview;
            genero[index2].innerHTML = data[index].genre
            nota[index2].innerHTML = data[index].vote_average

            index2++
        }
    });