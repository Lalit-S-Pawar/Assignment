// fetch the Data
fetch('class.json')
.then(response=>response.json())
.then(data=>{
    const cardContainer = document.getElementById('card-container');

    data.forEach(cardData=>{
        
        // creating Element
        const card =document.createElement('div');
       
    

        card.innerHTML = `<div class="card col-md-4 mb-4 style={"width:18rem"}>
        <img src="${cardData.ImageUrl}" alt="img">
        <h4>${cardData.Name}</h4>
        <p>${cardData.ShortDesc}</p>
        <button class="btn btn-primary">View</button>
    </div>`;

    // Append card to the Container
    cardContainer.appendChild(card);
    });
})