const button = document.getElementsByClassName('buttonContador')[0]
const modal = document.getElementsByClassName('dialog')[0]
const exitButton = document.getElementsByClassName('exitButton')[0]
const loginButton = document.getElementsByClassName('loginButton')[0]

button.addEventListener('click', ()=>{
   modal.showModal();
});

exitButton.addEventListener('click', ()=>{
   modal.close()
})

loginButton.addEventListener('click', ()=>{
   alert('Login feito com sucesso')
})



