let input = document.getElementById('input'),
    deleteLast = document.getElementById('delete-last'),
    deleteAll = document.getElementById('delete-all'),
    movies = [],
    movie = {};

function scanner(){
    console.log( "******* Aktuálny zoznam filmov *******");
    for( value of movies){
        console.log(JSON.stringify(value , null , 2));
    }
}

input.addEventListener('click' , function(event){
    event.preventDefault();
    movie = {
        Názov_filmu: document.getElementById('nazov').value,
        Rok_vydania: document.getElementById('rok').value,
        Hlavná_postava: document.getElementById('postava').value
    }
    movies.push(movie);
    document.querySelector('form').reset();
    scanner();
});

deleteLast.addEventListener('click' , function(event){
    event.preventDefault();
    movies.pop(movie);
    scanner();
});

deleteAll.addEventListener('click' , function(event){
    event.preventDefault();
    movies = [];
    scanner();
});







