function cardOver(card) {
    card === card1 && card.classList.replace('border-muted', 'border-danger');
    card === card2 && card.classList.replace('border-muted', 'border-warning');
    card === card3 && card.classList.replace('border-muted', 'border-primary');
}

function cardLeave(card) {
    card === card1 && card.classList.replace('border-danger', 'border-muted');
    card === card2 && card.classList.replace('border-warning', 'border-muted');
    card === card3 && card.classList.replace('border-primary', 'border-muted');
}

function cardClick(card) {
    card.ariaChecked = true

    card === card1 && card.classList.replace('border-muted', 'text-bg-danger');
    card === card1 && card.classList.replace('border-danger', 'text-bg-danger');

    card === card2 && card.classList.replace('border-muted', 'text-bg-warning');
    card === card2 && card.classList.replace('border-warning', 'text-bg-warning');

    card === card3 && card.classList.replace('border-muted', 'text-bg-primary');
    card === card3 && card.classList.replace('border-primary', 'text-bg-primary');

        for (let item of cards) {
            if (item.id !== card.id) {
                item.classList.replace('text-bg-danger', 'border-muted')
                item.classList.replace('text-bg-warning', 'border-muted')
                item.classList.replace('text-bg-primary', 'border-muted')
                item.ariaChecked = false
            }
        }

        select.value =
        card.id === 'card1' && '1' || card.id === 'card2' && '2' || card.id === 'card3' && '3'
}

function events(card) {
    card.addEventListener('mouseover', () => cardOver(card))
    card.addEventListener('mouseleave', () => cardLeave(card))
    card.addEventListener('click', () => cardClick(card))
}

events(card1)
events(card2)
events(card3) 


