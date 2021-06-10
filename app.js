const passwordOutpout = document.getElementById('password-outpout');
const displayPasswordRange = document.getElementById('displayPasswordRange');
const letterUppercase = document.getElementById('letterUppercase');
const letterLowercase = document.getElementById('letterLowercase');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const messageOutpout = document.querySelector('#message');

const generatePassword = () => {
    const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
    const dataUppercase = dataLowercase.toUpperCase();
    const dataNumber = "0123456789";
    const dataSymbol = "$*!:;,\"'";

    const passwordLenght = document.getElementById('passwordRange').value;
    
    let dataPassword=[];
    let password="";

    if(letterUppercase.checked) dataPassword.push(...dataUppercase);
    if(letterLowercase.checked) dataPassword.push(...dataLowercase);
    if(number.checked) dataPassword.push(...dataNumber);
    if(symbol.checked) dataPassword.push(...dataSymbol);

    for(let i=0 ; i<passwordLenght ; i++) {
        password += dataPassword[Math.floor(Math.random()*dataPassword.length)];
    }
        
        passwordOutpout.value = password;
        passwordOutpout.select();
        document.execCommand("copy");
        messageOutpout.style.display = 'block';
        messageOutpout.classList.remove('fadeOut');
        messageOutpout.textContent = 'Mot de passe généré et copié dans le presse papier !';
        
        setTimeout(()=>{
            messageOutpout.classList.toggle('fadeOut');
            setTimeout(()=>{
                messageOutpout.style.display='none';
            },2000)
        },2000)
    };
    
    





generateButton.addEventListener('click',generatePassword)

document.getElementById('passwordRange').addEventListener('mouseup',(e) => {
    
displayPasswordRange.textContent = e.currentTarget.value;
})

