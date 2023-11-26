    const userName = localStorage.getItem("currentUser")
    const data = localStorage.getItem(userName+"Basket")
    if(data !== null && data !== "[]"){
        let sum1 = 0;
        let arrayObjects = JSON.parse(data)

        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let headerRow = document.createElement('tr');
        let headers = Object.keys(arrayObjects[0]);
        headers.forEach(headerText => {
        let th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
        });
    
        thead.appendChild(headerRow);
        table.appendChild(thead);
        let tbody = document.createElement('tbody');

        arrayObjects.forEach(rowData => {
        sum1+=rowData.summa
        let row = document.createElement('tr');
        headers.forEach(header => {
            let cell = document.createElement('td');
            cell.textContent = rowData[header];
            row.appendChild(cell);
        });

        let removeCell = document.createElement('td');
        removeCell.classList.add('remove-cell');
        removeCell.textContent = 'remove';

        removeCell.addEventListener('click', function() {
            removeItem(rowData)
            location.reload();
        });
        row.appendChild(removeCell);

        tbody.appendChild(row);
        });
    
        table.appendChild(tbody);
    
        document.body.appendChild(table);

        const res = document.getElementById("result");
        res.innerHTML = `<p>Overall summa: ${sum1}</p>`;
        const buttonApprove = document.createElement("button");
        const myCabinetButton = document.createElement("button");

        buttonApprove.innerHTML = "Submit order";
        buttonApprove.setAttribute("id", "approveButton");
        buttonApprove.style.backgroundColor = "blue";
        buttonApprove.style.color = "white";
        res.appendChild(buttonApprove);


        myCabinetButton.innerHTML = "Navigate to cabinet page";
        myCabinetButton.setAttribute("id", "myCabinetButton");
        myCabinetButton.style.backgroundColor = "green";
        myCabinetButton.style.color = "white";
        res.appendChild(myCabinetButton);

        buttonApprove.addEventListener("click", function() {
            moveOrdersFromBasket()
            alert("Your order has been created!");
            const currentURL = window.location.href;
            const newUrl = currentURL.replace("basket", "cabinet");
            window.location.href = newUrl;
        });

        myCabinetButton.addEventListener("click", function() {
            const currentURL = window.location.href;
            const newUrl = currentURL.replace("basket", "cabinet");
            window.location.href = newUrl;
        });
        createReturnButton()
    }else{
        const warning = document.getElementById("result");
        warning.innerHTML = "<p>Your basket is empty!</p>";
        createReturnButton()
        
    } 

function removeItem(item){
    const userName = localStorage.getItem("currentUser")
    let data = JSON.parse(localStorage.getItem(userName+"Basket"))
    data = data.filter(existingItem => !isEquals(existingItem, item))
    console.log(data)
    localStorage.setItem(userName+"Basket", JSON.stringify(data))
}

function isEquals(existingItem, item){
    if(existingItem.name !== item.name){
        return false
    }else if(existingItem.quantity !== item.quantity){
        return false
    }else if(existingItem.size !== item.size){
        return false
    }else if(existingItem.summa !== item.summa){
        return false
    }
    return true
}

function moveOrdersFromBasket(){
    const userName = localStorage.getItem("currentUser")
    let arrayObjects = JSON.parse(localStorage.getItem(userName+"Basket"))
    let data = localStorage.getItem(userName+"Order")
    if(data !== null){
        arrayObjects = arrayObjects.concat(JSON.parse(data));
    } 
    localStorage.removeItem(userName+"Basket")
    localStorage.setItem(userName+"Order", JSON.stringify(arrayObjects))
}

function createReturnButton(){
    const res = document.getElementById("result");
    const returnButton = document.createElement("button");
    returnButton.innerHTML = "Return to main page";
    returnButton.setAttribute("id", "returnButton");
    returnButton.style.backgroundColor = "red";
    returnButton.style.color = "white";
    res.appendChild(returnButton);
    returnButton.addEventListener("click", function() {
        const currentURL = window.location.href;
        const newUrl = currentURL.replace("basket", "main");
        window.location.href = newUrl;
    });
}