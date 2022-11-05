function erase(e) {
    e.preventDefault()
    formulario.value1.value = '',
    formulario.value2.value = '',
    formulario.value3.value = '',
    formulario.value4.value = '',
    formulario.options.value = ''

    for (let item of cards) {
        item.classList.replace('text-bg-danger', 'border-muted');
        item.classList.replace('text-bg-warning', 'border-muted');
        item.classList.replace('text-bg-primary', 'border-muted');
        item.ariaChecked = true
    }
}

function checkError() {

    const value5 =
        formulario.options.value === '0' && 'Otro' ||
        formulario.options.value === '1' && 'Estudiante' ||
        formulario.options.value === '2' && 'Trainee' ||
        formulario.options.value === '3' && 'Junior'


    if (formulario.value1.value === '') {
        formulario.value1.classList.add('border-danger')
    } else if (formulario.value1.value !== '') {
        formulario.value1.classList.remove('border-danger')
    }

    if (formulario.value2.value === '') {
        formulario.value2.classList.add('border-danger')
    } else if (formulario.value2.value !== ''){
        formulario.value2.classList.remove('border-danger')
    }

    if (formulario.value3.value === '') {
        formulario.value3.classList.add('border-danger')
    } else if (formulario.value3.value !== '') {
        formulario.value3.classList.remove('border-danger')
    }

    if (formulario.value4.value === '') {
        formulario.value4.classList.add('border-danger')
    } else if (formulario.value4.value !== '') {
        formulario.value4.classList.remove('border-danger')
    }

    !value5
        ? formulario.options.classList.add('border-danger')
        : formulario.options.classList.remove('border-danger')

    let data = false
    
    if (formulario.value1.value && formulario.value2.value && formulario.value3.value && formulario.value4.value && value5) {
        data = {
            nombre: formulario.value1.value,
            apellido: formulario.value2.value,
            correo: formulario.value3.value,
            cantidad: formulario.value4.value,
            categoria: value5
        }
    }
    return data
}

function finalPay() {

    let pay 

    if (formulario.options.value === '0') {
        pay = formulario.value4.value * 200
    }

    if (formulario.options.value === '1') {
        pay = (formulario.value4.value * 200) * 0.2 
    }

    if (formulario.options.value === '2') {
        pay = (formulario.value4.value * 200) * 0.5
    }

    if (formulario.options.value === '3') {
        pay = (formulario.value4.value * 200) * 0.85 
    }
    
    return pay
}

function next() {
    location.href = "./resume.html"
}


function resumen(e) {
    e.preventDefault()
    const completeForm = checkError()
    const totalPay = finalPay()
    total.innerText = `Total a pagar: $${totalPay}`

    if (totalPay) {
        Swal.fire({
            title: `Resumen`,
            text: `El valor final de tus tickets es: $${totalPay}`,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Siguiente',
            cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    completeForm && sessionStorage.setItem('formulario', JSON.stringify(completeForm))
                    completeForm && next()
                    }
                })
    }
}


button1.onclick = (e) => { erase(e) }
button2.onclick = (e) => { resumen(e) }