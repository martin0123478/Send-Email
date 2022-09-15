//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail')
//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners()
function eventListeners(){
  //cuando la app arranca
  document.addEventListener('DOMContentLoaded',iniciarApp);
  //Campos de formulario
  email.addEventListener('blur',validarFormulario);
  asunto.addEventListener('blur',validarFormulario);
  mensaje.addEventListener('blur',validarFormulario);
  //enviar email
  formulario.addEventListener('submit',enviarEmail)
}


//Funciones
function iniciarApp(){
  btnEnviar.dissabled = true;
  btnEnviar.classList.add('cursor-not-allowed','opacity-50')
}
//valida formulario
function validarFormulario(e){

  if(e.target.value.length >0){
    //wlimina los errores
    const error = document.querySelector('p.error')
    if(error){
      error.remove()

    }

    e.target.classList.remove('border', 'border-red-500')
    e.target.classList.add('border', 'border-green-500')
    
  }else{
    e.target.classList.remove('border', 'border-red-500')
    e.target.classList.add('border', 'border-red-500')
    mostrarError('Todos los campos son obligatorios')
  }

  if(e.target.type==='email'){
    const resultado = e.target.value.indexOf('@')
      if(resultado <0){
        e.target.classList.remove('border', 'border-red-500')
    e.target.classList.add('border', 'border-red-500')
        mostrarError('El email no es valido')
      }else{
        const error = document.querySelector('p.error')
        if(error){
          error.remove()

        }
        
            
      }
  }
  if(email.value!=='' && asunto.value!=='' && mensaje.value !==''){
    btnEnviar.dissabled = false;
  btnEnviar.classList.remove('cursor-not-allowed','opacity-50')
  }
}

function mostrarError(mensaje){
 const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje
  mensajeError.classList.add('border','background-red-500', 'background-color-100','text-red-500','p-3','mt-5','text-center','error');

  const errores = document.querySelectorAll('.error');
  if(errores.length ===0){
    formulario.appendChild(mensajeError);
  }
}

function enviarEmail(e){
  e.preventDefault()
  console.log('enviar')
}