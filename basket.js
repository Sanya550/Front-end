    const userName = localStorage.getItem("currentUser")
    const data = localStorage.getItem(userName)
    if(data !== null){
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
            console.log(rowData)
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
    }else{
        const warning = document.getElementById("result");
        warning.innerHTML = "<p>You don't have any items in basket!</p>";
    } 

function removeItem(item){
    const userName = localStorage.getItem("currentUser")
    let data = JSON.parse(localStorage.getItem(userName))
    data = data.filter(existingItem => !isEquals(existingItem, item))
    console.log(data)
    localStorage.setItem(userName, JSON.stringify(data))
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