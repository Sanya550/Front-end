window.addEventListener("click", function(event){
    
    if(event.target.classList.contains("items_control_plus")){
        var currentValue = event.target.closest(".details-wrapper").querySelector(".items_current_value")
        currentValue.innerText = ++currentValue.innerText
    }

    if(event.target.classList.contains("items_control_minus")){
        var currentValue = event.target.closest(".details-wrapper").querySelector(".items_current_value")
        if(currentValue.innerText != 1){
            currentValue.innerText = --currentValue.innerText
        }
    }

    if(event.target.classList.contains("basket-img")){
        const currentURL = window.location.href;
        const newUrl = currentURL.replace("main", "basket");
        window.location.href = newUrl;
    }

    if(event.target.classList.contains("add_to_cart")){
        var dataCard = event.target.closest(".card-wrapper")
        const price =  dataCard.querySelector(".price").innerText
        const indexSignStart = price.indexOf(':');
        const indexSignEnd = price.indexOf('$');
        const productInfo = {
            name: dataCard.querySelector(".item-title").innerText,
            quantity: dataCard.querySelector(".items_current_value").innerText,
            size: dataCard.querySelector("#size").value,
            summa: parseInt(price.substring(indexSignStart+1, indexSignEnd))*parseInt(dataCard.querySelector(".items_current_value").innerText)
        }
        addDataToLocalStorageForCurrentUsername(productInfo)
    }
})

function addDataToLocalStorageForCurrentUsername(product){
    const userName = localStorage.getItem("currentUser")
    let arrayObjects = [];
    let data = localStorage.getItem(userName)
    if(data !== null){
        arrayObjects = JSON.parse(data)
    } 
    arrayObjects.push(product)
    localStorage.setItem(userName, JSON.stringify(arrayObjects))
}

