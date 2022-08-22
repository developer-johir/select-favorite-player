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


    perPlayerField.value = '';
})

        //------ calculate-total-btn -------//
//Step-1
document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const coachFieldInput = document.getElementById('coach-field');
    const coachFieldString = coachFieldInput.value;
    const coachFieldAmount = parseFloat(coachFieldString);
//step-2

    const managerFieldInput = document.getElementById('manager-field');
    const managerFieldString = managerFieldInput.value;
    const managerFieldAmount = parseFloat(managerFieldString);

    const previousTotalAmount = managerFieldAmount + coachFieldAmount;
//step-3

    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesTotalString = playerExpensesElement.innerText;
    const playerExpensesTotal = parseFloat(playerExpensesTotalString);

    const subTotal = playerExpensesTotal + previousTotalAmount;
//step-4

    const totalCostElement = document.getElementById('total-cost');
    const totalCostElementString = totalCostElement.innerText;
    const totalCostElementAmount = parseFloat(totalCostElementString);

    const totalCostAmount = totalCostElementAmount + subTotal;

    totalCostElement.innerText = totalCostAmount;
    
    coachFieldInput.value = '';
    managerFieldInput.value = '';
})

//--------- Budget End ----------//