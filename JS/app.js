const form=document.getElementById('form');
const btn=[...document.querySelectorAll('.style-btn')];

//Intercambia la clase active para que se muestre el boton seleccionado
btn.forEach(button=>{
    button.addEventListener('click',(e)=>{
        const currentBtn=e.target.textContent;
        
        const secondBtn=btn.find(btnToFind=>btnToFind.textContent!==currentBtn);
        console.log(secondBtn);

        button.classList.add('active');
        secondBtn.classList.remove('active')
    })
}
);

//Lanza una alerta de enviado y vacia los campos.
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputs = form.querySelectorAll('input');

    alert('Tus datos han sido enviados correctamente');
    
    inputs.forEach(input => input.value = ''); 
})
