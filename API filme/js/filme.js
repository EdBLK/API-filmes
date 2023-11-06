const apikey = 'bef16bf1'
const frmPesquisa = document.querySelector("form")


frmPesquisa.onsubmit = (ev) => {

    const pesquisa = ev.target.pesquisa.value


    ev.preventDefault();
    alert("Ok");

    if (pesquisa == ""){
        alert("Preencha o campo!");
        return;
    }

    

    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apikey}`)
        .then(result => result.json())
        .then(json => carregalista(json));
}

const carregalista = (json) => {
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";

    if (json.Response == 'False'){
        alert('Nenhum filme encontrado');  
        return  
    }

    json.Search.forEach(element => {
        console.log(element);

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`

        lista.appendChild(item);


    });
}




