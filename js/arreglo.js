let employees = ['Juan', 'Roberto', 'Maria', 'Ana', 'Pedro']
let message = "";

for (let i = 0; i < employees.length; i++){
    message += employees[i] + '<br>';
    document.getElementById('box').innerHTML = message;
}