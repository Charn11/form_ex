const check = document.getElementById('check');
let pass = document.getElementById('pass');
check.addEventListener('change', e => {
    if(pass.type=="password")
        {
            pass.type = "text";
        }
    else{
        pass.type = "password";
    }
});

let valid = document.getElementsByTagName('button')
valid.document.addEventListener('click', e=> {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
    if (confirm.value === password.value) {
    confirm.setCustomValidity('');
    } else {
    confirm.setCustomValidity('Passwords do not match');
    }
})