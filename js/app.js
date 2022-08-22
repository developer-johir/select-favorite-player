//--------- Player Slected Start ----------//
const selectArray = [];

function display(selectProduct){
    const selectList = document.getElementById('select-products');
    selectList.innerHTML = '';

    for(let i = 0; i < selectProduct.length; i++){
        const name = selectArray[i].productName;
        console.log(name);
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i + 1}.</th>
            <th>${name}</th>
        `

        selectList.appendChild(tr);
    }
}

function addToCart(element){
    const productName = element.parentNode.children[0].innerText;

    const productObj = {
        productName: productName,
    }

    selectArray.push(productObj);

    document.getElementById('total-add-product').innerText = selectArray.length;

    display(selectArray);
}
//--------- Player Slected End ----------//


//--------- Budget Start ----------//

document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerField = document.getElementById('per-player');
    const perPlayerAmountString = perPlayerField.value;
    const perPlayerAmount = parseFloat(perPlayerAmountString);

    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesTotalString = playerExpensesElement.innerText;
    const playerExpensesTotal = parseFloat(playerExpensesTotalString);

    const currentPlayerExpensesTotal = perPlayerAmount * 5;
    playerExpensesElement.innerText = currentPlayerExpensesTotal;
    console.log(currentPlayerExpensesTotal);


    perPlayerField.value = '';
})

//--------- Budget End ----------//