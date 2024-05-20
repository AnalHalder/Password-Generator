let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let numbers = document.querySelector('.number');
let characters = document.querySelector('.characters');
let range = document.querySelector('.length');
let copy = document.querySelector('.copy');
let password = document.querySelector('.password');
let len = document.querySelector('.len');
copy.addEventListener('click',()=>{
    password.select();
    window.navigator.clipboard.writeText(password.value);
})
range.addEventListener('change',()=>{
    if(range.value<=6) {
        range.value=6;
        generatePassword();
        return;
    }
    generatePassword();
})
numbers.addEventListener('change',()=>{
    if(numbers.checked) str+='0123456789';
    else str=str.replace('0123456789','');
    generatePassword();
})
characters.addEventListener('change',()=>{
    if(characters.checked) str+='@#$%&!~*()';
    else str=str.replace('@#$%&!~*()','');
    generatePassword();
})
function generatePassword() {
    console.log(str);
    let pass = "";
    for (let i = 1; i <= range.value; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }
    password.value = pass;
    len.innerHTML='Length : ' +range.value;
}
window.onload(range.value=6,generatePassword());
