function cardSeleccionada () {
    select.value === '1' && cardClick(card1)
    select.value === '2' && cardClick(card2)
    select.value === '3' && cardClick(card3)
}

select.addEventListener('change', cardSeleccionada)


