document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.butonel')
    const body = document.querySelector('body')

    body.style.backgroundColor = 'grey'
    button.addEventListener('click', changeColor)

    function changeColor() {
        body.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
        let color = '#'
        for (i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)]
        }

        return color;
    }
})