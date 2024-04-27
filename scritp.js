// Seleciona todas as tags <p> no documento
const leroLero = document.querySelectorAll('.corpo__card__texto');

// Itera sobre cada tag <p> e adiciona o texto "Dale"
leroLero.forEach(e => {
    e.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam rhoncus enim nec feugiat. Sed tempor consequat urna non euismod. Praesent sed venenatis quam.';
});
