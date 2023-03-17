//  1 - Dar um jeito de pegar o elemento HTML dos botões - Colocando dentro de uma constante
const botoesCarrossel = document.querySelectorAll('.botao');
// 6
// ler a lista de imagens
const imagens = document.querySelectorAll('.imagem');

// 2 - Dar um jeito de identificar o clique do usuário no botão
/*const botao1 = document.getElementById('botao1');
botao1.addEventListener('click', () => {})*/
// O addEventListener está recebendo o clik no botão e o forEach está replicando 
// para cada um dos 6 botões
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //  3 - Desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //  4 - Marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // 5 - esconder a imagem ativa de fundo anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado
        // adicionar o 'indice' no forEach para receber o indice do botão clicado
        imagens[indice].classList.add('ativa');
    })
})
// selecionar as linhas 15 e 16 e clicar em REFATORAR/extrair para function no escopo global 
//- Adicionar uma função 'desativarBotaoSelecionado'