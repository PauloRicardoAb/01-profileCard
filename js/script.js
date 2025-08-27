const $html = document.querySelector('html');
const $element = document.querySelector('#btnMode');
const $ModeIcon = document.querySelector('#ModeIcon');
// selecionando elementos do html e guardando numa variavel

$element.addEventListener('click', () => {
    // criando função, faz uma ação quando o usuario clicar no botao

    // Verifica se o modo escuro está ativo
    const isDark = $html.classList.contains('darkMode');

    // Altera o conteúdo do ícone conforme o modo
    $ModeIcon.className = isDark ? 'bi bi-brightness-low-fill' : 'bi bi-moon-fill';
    $html.classList.toggle('darkMode')
    
    // adiciona ou remove a tag darkMode
})