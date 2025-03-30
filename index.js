const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const length_input = document.querySelector("#password-length");
const length_value = document.querySelector("#range-value");
length_value.textContent = length_input.value;

const password_field = document.querySelector("#password-field");

const symbols_btn = document.querySelector("#symbols-btn");
const numbers_btn = document.querySelector("#numbers-btn");

const generate_pwd_btn = document.querySelector("#generate-pwd-btn")
const cpy_btn = document.querySelector("#cpy-btn");


var containSymbols = true;
var containNumbers = true;
var size = 15;

length_input.addEventListener("input", (event) => {
    size =  event.target.value
    length_value.textContent = size;
    password_field.value = generate_random_password(size, containSymbols, containNumbers);
})

const generate_random_password = (size, containSymbols = true, containNumbers = true) => {
    let password = "";
    let random_char;

    while(password.length < size){
        random_char = characters[Math.floor(Math.random()*characters.length)];
        if(!containSymbols && random_char.match("[~`!@#$%^&*()_\\-+=\\{\\[\\}\\],|:;<>./?\\/]")) continue;
        if(!containNumbers && random_char.match("[0-9]")) continue;

        password+=random_char;
    }
    return password;
}

symbols_btn.addEventListener("click",()=>{
    if(containSymbols){
        symbols_btn.classList.add("disabled");
        containSymbols = !containSymbols;
    } else {
        symbols_btn.classList.remove("disabled");
        containSymbols = !containSymbols;
    }
})

numbers_btn.addEventListener("click",()=>{
    if(containNumbers){
        numbers_btn.classList.add("disabled");
        containNumbers = !containNumbers;
    } else {
        numbers_btn.classList.remove("disabled");
        containNumbers = !containNumbers;
    }
})

generate_pwd_btn.addEventListener("click",()=>{
    generate_random_password();
    password_field.value = generate_random_password(size, containSymbols, containNumbers);
})

console.log(generate_pwd_btn)

cpy_btn.addEventListener("click",()=>{
    password_field.select();
    password_field.setSelectionRange(0,999999);
    navigator.clipboard.writeText(password_field.value);

    alert("Password copied.");
})