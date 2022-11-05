let form = sessionStorage.getItem('formulario')
form = JSON.parse(form)

const value5 = document.querySelector('#category')
document.getElementById('value1').innerText = `Nombre: ${form.nombre}`;
document.getElementById('value2').innerText = `Apellido: ${form.apellido}`;
document.getElementById('value3').innerText = `E-mail: ${form.correo}`;
document.getElementById('value4').innerText = `Cantidad de tickets: ${form.cantidad}`;
value5.innerText = `Categoría seleccionada: ${form.categoria}`

function buy(e) {
    e.preventDefault()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Gracias por tu compra!',
        showConfirmButton: false,
        timer: 1500
        })
}

function cancel(e) {
    e.preventDefault()
    location.href = "../pages/comprarTickets.html"
}

button3.onclick = (e) => { buy(e) }
button4.onclick = (e) => { cancel(e) }