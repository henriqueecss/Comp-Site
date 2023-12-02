fetch('http://localhost:3000/card-item')
.then(req => req.json())
.then(data => mostraDepoimentos(data))

function mostraDepoimentos(cardItem){
    const htmlCards = cardItem.map(
        (cardItem) => `
        <div  id="${cardItem.id}" class="card-item">
            <img src=${cardItem.img} alt="Cesar">
            <p class="nome-user">${cardItem.nomeUser}</p>
            <p class="depoimento-user">${cardItem.depoimentoUser}</p>
                <div class="estrelas">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            <a class="btnDelete" onclick="deletaDepoimentos(${cardItem.id})"> Deletar Depoimento </a>
        </div>
        `
    );

    document.getElementById('app').innerHTML = htmlCards;
}

function deletaDepoimentos(id){
    let url = `http://localhost:3000/card-item/${id}`;

    let options = {
        method: "DELETE"
    }

    fetch(url, options)
    .then(response => console.log(response.status))

    window.location.reload(true);
}
