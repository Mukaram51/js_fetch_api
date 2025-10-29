




function search(){
    const input = document.querySelector('#input').value.toLowerCase();
    const meaning = document.querySelector('#meaning');

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        const meanings = data[0].meanings[0].definitions[0].definition;
        meaning.innerHTML = all_meaning;
    });
    
}

function getNews() {
    fetch('https://newsapi.org/v2/top-headlines?country=ng&apiKey=744e3f84b88b4b27822af25d8923e13d')
            .then(response => response.json)
            .then(data => {
                console.log(data)
                }
            )
}

