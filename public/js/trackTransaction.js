const dateInput = document.getElementById('date');
const merchantInput = document.getElementById('merchant');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');

const modal = document.getElementById('modal');
const addTransactionButton = document.querySelector('.add-transaction');

addTransactionButton.addEventListener('click', () => {
    resetModal();
    modal.style.display = 'flex';
});

const saveButton = document.querySelector('.save-button');

saveButton.addEventListener ('click', () => {
    if(dateInput.value == '' || merchantInput.value == '' || amountInput.value =='') {
        const alert = document.createElement('IMG');
        alert.src = './img/alert.svg';
        console.log(alert)
        document.querySelector('.alert').innerHTML = `${alert} Please ensure all fields are filled out correctly`;
    } else { modal.style.display = 'none'; }
});

const modalDelete = document.querySelector('.delete-button');

modalDelete.addEventListener('click', () => {
    modal.style.display = 'none';
});

const modalClose = document.querySelector('.close-container');

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});


function resetModal() {
    dateInput.value = '';
    merchantInput.value = '';
    categoryInput.value = '';
    amountInput.value = '';
}