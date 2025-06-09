const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach((tooltip) => {
    tooltip.addEventListener('click', onTooltipClick);
});

function onTooltipClick (evt){
    evt.currentTarget.classList.toggle('tooltip-animated');
}
tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', onTooltipMouseOver);
    tooltip.addEventListener('mouseleave', onTooltipMouseLeave);
});

function onTooltipMouseOver(evt) {
    evt.currentTarget.classList.add('tooltip-animated');
}

function onTooltipMouseLeave(evt) {
    evt.currentTarget.classList.remove('tooltip-animated');
}


const btnOpen = document.querySelector('.btn--open');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');

const modalViewHadnler = () => {
    modal.classList.toggle('modal--open')
}; 

btnOpen.addEventListener('click', modalViewHadnler);
modal.addEventListener('click', modalViewHadnler);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modalViewHandler();
    }
}); 