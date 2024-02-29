let darkMode = document.querySelector('.dark-mode-click');
let body = document.querySelector('body');

export const darkModeToggle = () => {
    const setInitialMode = () => {
        const mode = localStorage.getItem('mode');
        if (mode === 'dark-mode') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    };
    setInitialMode();

    darkMode.addEventListener('click', () => {
        if (!body.classList.contains('dark-mode')) {
            body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark-mode');
            darkMode.innerHTML = 

            `
            <ion-icon name="sunny" style="color: orange" ></ion-icon>
                <span>light mode</span>
            `
            
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light-mode');
            darkMode.innerHTML =
            `
            <ion-icon aria-hidden="true" name="moon-outline"></ion-icon>
            <span>dark mode</span>
        `
        }
    });
};

