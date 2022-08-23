//--------- Player Slected Start ----------//
const selectArray = [];

function display(selectProduct){
    const selectList = document.getElementById('select-products');
    selectList.innerHTML = '';

    for(let i = 0; i < selectProduct.length; i++){
        const name = selectArray[i].productName;
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i + 1}.</th>
            <th>${name}</th>
        `
        if(i>4){
            alert('Only five player is allowed');
            return element.disabled = false;
        }

        selectList.appendChild(tr);
    }
}

function addToCart(element){
    const productName = element.parentNode.children[0].innerText;
    const productObj = {
        productName: productName,
    }

    selectArray.push(productObj);
    
    display(selectArray);

    document.getElementById('total-add-player').innerText = selectArray.length;


    element.disabled = true;
    if(element.disabled === true){
        element.style.background = 'blue';
    }
    else{
        element.style.background = 'red';
    }
}
//--------- Player Slected End ----------//


//--------- Budget Start ----------//

//Step-1
document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerField = document.getElementById('per-player');
    const perPlayerAmountString = perPlayerField.value;
    const perPlayerAmount = parseFloat(perPlayerAmountString);

//Step-2
    //perPlayerField.value = '';
    if(isNaN(perPlayerAmount)){
        alert('Please provide a valid number');
        return;
    }
//Step-3
    const totalPlayer = document.getElementById('total-add-player');
    const totalPlayerString = totalPlayer.innerText;
    const totalPlayerLevel = parseFloat(totalPlayerString);
//Step-4
    const totalPlayerAmount = totalPlayerLevel * perPlayerAmount;

//Step-5
    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesTotalString = playerExpensesElement.innerText;
    const playerExpensesTotal = parseFloat(playerExpensesTotalString);
//Step-6
    playerExpensesElement.innerText = totalPlayerAmount;
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