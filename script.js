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

const buon = document.getElementById('submit');
let confirm = document.getElementById('confirm');
buon.addEventListener('click', e => {
    let str1 = pass.value;
    console.log(str1);
    let str2 = confirm.value;
    console.log(str2);
    if(str1!=str2)
    {
       // alert("passwords do not match");
        document.getElementById('passAlert').innerText = "*passwords do not match";
        pass.style.border = '1px solid red';
        confirm.style.border = '1px solid red';
        e.preventDefault();
    }
})
