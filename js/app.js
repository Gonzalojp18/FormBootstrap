const form = document.getElementById('form');
const btn = [...document.querySelectorAll('.style-btn')];
const body = document.getElementById('body');
const allButtons = [...document.getElementsByTagName('button')];
const allInputs = [...document.getElementsByTagName('input')];

//Intercambia entre modos y también la clase 'active'
btn.forEach(button=>{
    button.addEventListener('click',(e)=>{
        const currentBtn=e.target.textContent;
        
        const secondBtn=btn.find(btnToFind=>btnToFind.textContent!==currentBtn);

        button.classList.add('active');
        secondBtn.classList.remove('active');

        if(currentBtn=='Basic'){
            body.classList.toggle('text-bg-dark',false);
            body.classList.toggle('text-bg-light',true);
            allButtons.forEach(btn=>{
                btn.classList.toggle('btn-warning',false);
                btn.classList.toggle('btn-primary',true);
            })
            allInputs.forEach(btn=>{
                btn.classList.toggle('text-bg-dark',false);
            })
        }else{
            body.classList.toggle('text-bg-light',false);
            body.classList.toggle('text-bg-dark',true);
            allButtons.forEach(btn=>{
                btn.classList.toggle('btn-primary',false);
                btn.classList.toggle('btn-warning',true);
            })
            allInputs.forEach(btn=>{
                btn.classList.toggle('text-bg-dark',true);
            })
        }
    })
}
);

//Lanza una alerta de enviado y vacia los campos.
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputs = form.querySelectorAll('input');

    alert('Your data has been successfully submitted.');

    inputs.forEach(input => input.value = ''); 
})
