const loader = document.querySelector('.circular-loader');

export const runLoader = () => {
    loader.style.display = 'flex';
}

export const stopLoader = () => {
    loader.style.display = 'none';
}
