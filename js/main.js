/*
    1. PASSO: Renderizar formularios Criar / Alterar user para fazer colheta de dados.
    Dependendo do argumento da função um dos dois tipos de formulários será gerado.
*/


function fazer_formCriarAlterar(valor = 1) {

    const txtCriar = {
        'txth2': 'Cadastro Funcionário',
        'txtP': 'Ao cadastrar o funcionário bote todas as características obrigatórias abaixo, caso alguma esteja faltando, o funcionário não poderá ser cadastrado.',
        'txtLbl1': 'Insira o nome do funcionário:',
        'txtlbl2': 'Insira o cargo do funcionário:',
        'txtlbl3': 'Descreva o cargo do funcionário:',
        'txtBTN': 'Cadastrar funcionário',
    }

    const txtAlterar = {
        'txth2': 'Atualização do Funcionário',
        'txtP': 'Ao atualizar o funcionário bote todas as características obrigatórias abaixo, caso alguma esteja faltando, o funcionário não poderá ser cadastrado.',
        'txtLbl1': 'Mude o nome do funcionário:',
        'txtlbl2': 'Mude o cargo do funcionário:',
        'txtlbl3': 'Reescreva a função do cargo do funcionário:',
        'txtBTN': 'Alterar dados funcionário',
    }

    let objeto_Escolhido;

    if (valor === 1 ) { 
        objeto_Escolhido = txtCriar; 
    }
    else if (valor === 2) { 
        objeto_Escolhido = txtAlterar; 
    }

    let secoes = document.querySelectorAll('section.main-sections');
        
    let secaoEl = secoes[0];

    let formEl = document.createElement('form');
    formEl.setAttribute('class', 'form-section');
    formEl.setAttribute('method', 'post');
    
    objeto_Escolhido === txtCriar ? formEl.setAttribute('name', 'criarForm') : formEl.setAttribute('name', 'alterarForm');  
    objeto_Escolhido === txtCriar ? formEl.setAttribute('id', 'criar-form') : formEl.setAttribute('id', 'alterar-form');  

    let h2El = document.createElement('h2');
    h2El.appendChild(document.createTextNode(objeto_Escolhido.txth2));

    let pEl = document.createElement('p');
    pEl.appendChild(document.createTextNode(objeto_Escolhido.txtP));

    let label1 = document.createElement('label');
    label1.setAttribute('class', 'first-label');
    label1.setAttribute('for', 'input-nm-funcioario');
    label1.appendChild(document.createTextNode(objeto_Escolhido.txtLbl1));

    let input1 = document.createElement('input');
    input1.setAttribute('id', 'input-nm-funcioario');
    input1.setAttribute('class', 'inputs');
    input1.setAttribute('type', 'text');
    input1.setAttribute('name', 'nome-funcionario');
    input1.setAttribute('minlength', '3');
    input1.required = true;
    input1.setAttribute('placeholder', ' Digite seu nome');

    let label2 = document.createElement('label');
    label2.setAttribute('for', 'input-cargo-funcionario');
    label2.appendChild(document.createTextNode(objeto_Escolhido.txtlbl2));

    let input2 = document.createElement('input');
    input2.setAttribute('id', 'input-cargo-funcionario');
    input2.setAttribute('class', 'inputs');
    input2.setAttribute('type', 'text');
    input2.setAttribute('name', 'cargo-funcionario');
    input2.setAttribute('minlength', '5');
    input2.required = true;
    input2.setAttribute('placeholder', ' Digite seu cargo na empresa');

    let label3 = document.createElement('label');
    label3.setAttribute('for', 'txtArea-descricao-cargo');
    label3.appendChild(document.createTextNode(objeto_Escolhido.txtlbl3));

    let textArea = document.createElement('textarea');
    textArea.setAttribute('id', 'txtArea-descricao-cargo');
    textArea.setAttribute('class', 'inputs');
    textArea.setAttribute('name', 'descri-funcionario');
    textArea.setAttribute('rows', '4');
    textArea.setAttribute('minlength', '10');
    textArea.required = true;
    textArea.setAttribute('placeholder', ' Descreva a função do seu cargo na empresa');

    let btnEl = document.createElement('button');
    btnEl.setAttribute('id', 'btn-cadastrar');
    btnEl.setAttribute('type', 'button');
    btnEl.appendChild(document.createTextNode(objeto_Escolhido.txtBTN));

    formEl.appendChild(h2El);
    formEl.appendChild(pEl);
    formEl.appendChild(label1);
    formEl.appendChild(input1);
    formEl.appendChild(label2);
    formEl.appendChild(input2);
    formEl.appendChild(label3);
    formEl.appendChild(textArea);
    formEl.appendChild(btnEl);
    
    secaoEl.appendChild(formEl);

    if ( formEl === document.querySelector('form#alterar-form')) 
    {
        formEl.style.display = 'none';
    }
}

/*
    2. PASSO: Avaliar se o formulário para Criação de Usuário está com
    validação okay para captura de dados.
*/
function pegarDadosFormCriar() {

    let secoes = document.querySelectorAll('section.main-sections');

    let secaoEl = secoes[1];

    let avisoDiv;
    if ( document.querySelector('#card-aviso') !== null ||
        document.querySelector('#card-aviso') !== undefined ) {

        avisoDiv = document.querySelector('#card-aviso');
    }
     
    let inputs = document.querySelectorAll('#criar-form .inputs'),
        inputNome = inputs[0],
        inputCargo = inputs[1],
        inputDescri = inputs[2];

    if (inputNome.parentElement === document.querySelector('#criar-form')
        && inputCargo.parentElement === document.querySelector('#criar-form')
        && inputDescri.parentElement === document.querySelector('#criar-form')) 
    {
        
        let btnCriar = document.querySelector('#criar-form #btn-cadastrar');
        
        btnCriar.addEventListener('click', () => {

            if ( document.querySelector('#card-aviso') !== null &&
            document.querySelector('#card-aviso') !== undefined ) {

               secaoEl.removeChild(avisoDiv);
            }

            let secaoCriar = document.getElementById('secao-forms');

            /*
               4. PASSO: Caso a função PopUpError já tenha renderizado seu aviso na tela,
               o nodeParentElement irá apagála imediatamente, cada vez q o usuário
               clica.
            */

            for (let i = 0; i < secaoCriar.children.length; i++) 
            {
                if (secaoCriar.children[i].className === 'avisos_erro') 
                {
                    secaoCriar.removeChild(secaoCriar.children[i]);
                }
            }

            if (inputNome.value != '' && inputCargo.value != '' && inputDescri.value != '') 
            {
                const id_generate = () => {
                    return 'A' + Math.random().toString(36).substr(2, 9);
                }

                if (inputNome.value.length >= 3 && inputCargo.value.length >= 5 && inputDescri.value.length >= 10) 
                {
                    let meu_id = id_generate();

                    let novoFuncionario = {
                        'id': meu_id, 
                        'nome': inputNome.value,
                        'cargo': inputCargo.value,
                        'descricao': inputDescri.value, 
                    }

                    criarNovoFuncionario(novoFuncionario);
                    criarMetodoExcluir();
                    editarUsuario();

                    inputNome.value = '';
                    inputCargo.value = '';
                    inputDescri.value = '';
                } 
                else {
                    popUpError(4);
                }
            }
            else if (inputNome.value == '') {
                popUpError(1);
            }
            else if (inputCargo.value == '') {
                popUpError(2);
            }
            else if (inputDescri.value == '') {
                popUpError(3);
            }

        });
    } 

    else {
        console.warn(
            'ERRO: inputs da Div Criar não estão conectados ao formulário criar :P'
        );
    }
 }

/* 5. PASSO:

    1º Fazer um foreach em cada elemento btnApagarUsuário, em cada botao por o método
    apagar.

    2º Verificar se a Div pai da pai (avô) tem o mesmo id q o botao herda.
    
    3º Em caso afirmativo retirar a div avô do botao da DOM.
*/

function criarMetodoExcluir() {
    
    let btnList = document.querySelectorAll('button.btn-excluir');
    let formAlterar = document.querySelector('#alterar-form');
    
    btnList.forEach( btn => {
        btn.addEventListener('click', () => {
            tiraAviso();

            let id_avo_botao = btn.parentNode.parentNode.id
            
            let listaFuncio = document.querySelectorAll('.card-funcionario');

            for (div of listaFuncio) 
            {
                if (div.id === id_avo_botao  && formAlterar.style.display !== 'flex') 
                {
                    div.parentElement.removeChild(div);
                } 
                else {
                    popUpError(5);
                }
            }
        });
    });
}

/*
    1. if form. alterar -> ja existe/ display flex invez de none -> updateFun return "termine de 
    atualizar antes seu funcionario".

    2. if alguem do array apagarBTN onclick -> nao apaque nada antes de atualizar seu funcionario.

*/


function levarAoFuncio(object) {

    let btnModificar = document.querySelector('#alterar-form #btn-cadastrar');
    
    let nm_funcio = document.querySelector(`#${object.id} .nome-funcionario`);
    let cg_funcio = document.querySelector(`#${object.id} .cargo-funcionario`);
    let ds_funcio = document.querySelector(`#${object.id} > p`);


    btnModificar.addEventListener('click', () => {

        tiraAviso();

        let formInputs = document.querySelectorAll('#alterar-form .inputs'),
        nv_nome = formInputs[0].value,
        nv_cargo = formInputs[1].value,
        nv_descri = formInputs[2].value;

        let listsDivs = document.querySelectorAll('.card-funcionario');

        listsDivs.forEach( div => {
            
            if (object.id == div.id) 
            {
                if (nv_nome != '' && nv_cargo != '' && nv_descri != '')
                {
                    if (nv_nome.length >= 3 && nv_cargo.length >= 5 && nv_descri.length >= 10)
                    {
                        const dados_funcio = {
                            'div_nm': nm_funcio,
                            'div_cg': cg_funcio,
                            'div_ds': ds_funcio,
                            'id': object.id,
                            'nvNm': nv_nome,
                            'nvCg': nv_cargo,
                            'nvDs': nv_descri,
                        };

                        mudarDivFuncio(dados_funcio);
                    }
                }

                else if (nv_nome == '') {
                    popUpError(1);
                }

                else if (nv_cargo == '') {
                    popUpError(2);
                }

                else if (nv_descri == '') {
                    popUpError(3);
                }
            }
        });
    });
}

function mudarDivFuncio(object) {

    let formInputs = document.querySelectorAll('#alterar-form .inputs');
    let funcionarios = document.querySelectorAll(`.card-funcionario`);

    let formCadastrar = document.querySelector('#criar-form');
    let formAlterar = document.querySelector('#alterar-form');
    
    funcionarios.forEach( funcionario => {
        if (object.id === funcionario.id) 
        {
            object.div_nm.innerHTML = object.nvNm;
            object.div_cg.innerHTML = object.nvCg;
            object.div_ds.innerHTML = object.nvDs;

            formInputs[0].value = '';
            formInputs[1].value = '';
            formInputs[2].value = '';

            formCadastrar.style.display = 'flex';
            formAlterar.style.display = 'none';
        }
    })
}

function editarUsuario() {

    let btnsAlterar = document.querySelectorAll(`.card-funcionario .btn-alterar`);

    let formCadastrar = document.querySelector('#criar-form');
    let formAlterar = document.querySelector('#alterar-form');

    let id_avo_botao;

    id_avo_botao = '';

    btnsAlterar.forEach( btn => {
        
        id_avo_botao = btn.parentNode.parentNode.id;

        btn.addEventListener('click', () => {

            tiraAviso();
            
            if ( formAlterar.style.display === 'none') 
            
            {
                formCadastrar.style.display = 'none';
                formAlterar.style.display = 'flex';
                levarAoFuncio({'id': id_avo_botao });
            }

            else {       
                popUpError(5);
            }
        })
    })
}


/*
   3. PASSO: Caso algum dos 3 principais erros de cadastro exista ao criar um
   usuário, execute a função PopUpError, ela tem paramêtros diferentes para
   responder a esses 3 tipos de erro.
*/

function popUpError(value) {

    const erros = {
        'nome': 'ERRO 01 - NOME do usuário vazio.',
        'cargo': 'ERRO 02 - CARGO do usuário vazio.',
        'descri': 'ERRO 03 - DESCRIÇÃO vazia.',
        'compri': 'ERRO 04 - Texto com poucos caracteres.',
        'noUpdate': 'ERRO 05 - Atualize o usuário primeiro.',
    }

    let erroChosen;

    if (value === 1) { 
        erroChosen = erros.nome; 
    }
    else if (value === 2) {
        erroChosen = erros.cargo;
    }
    else if (value === 3) {
        erroChosen = erros.descri;
    }
    else if (value === 4) {
        erroChosen = erros.compri;
    }
    else if (value == 5) {
        erroChosen = erros.noUpdate;
    }

    let secoes = document.querySelectorAll('.main-sections'),
        secao1 = secoes[0];

    let divErro = document.createElement('article');
    divErro.setAttribute('id', 'aviso_erro');
    divErro.setAttribute('class', 'avisos_erro');

    let pEl = document.createElement('p');
    pEl.appendChild(document.createTextNode(erroChosen));

    let btn = document.createElement('button');

    btn.addEventListener('click', () => {
        btn.parentNode.remove(btn.parentNode);
    })

    let pBtn = document.createElement('p');
    pBtn.setAttribute('class', 'btn_symbol');

    btn.appendChild(pBtn);
    divErro.appendChild(pEl);
    divErro.appendChild(btn);
    secao1.appendChild(divErro);
 }

/*
    5. Criar Novo Funcionário com base nos
    dados obtidos do formulário Criar e com base neles
    montar a div dele.
*/

function criarNovoFuncionario(literal_object) {

    let secoes = document.querySelectorAll('section.main-sections');
        
    let secaoEl = secoes[1];

    const funcionario = literal_object;
    
    let divFuncio = document.createElement('article');
    divFuncio.setAttribute('class', 'card-funcionario');
    divFuncio.setAttribute('id', `${funcionario.id}`);

    let fotoNomeCargo_El = document.createElement('article');
    fotoNomeCargo_El.setAttribute('class', 'bloco-foto-nome-cargo');

    let articleInside_fNC_eL = document.createElement('article');

    let imgEl = document.createElement('img');
    imgEl.setAttribute('class', 'img-funcionario');
    imgEl.setAttribute('alt', 'imagem-perfil');
    imgEl.setAttribute('src', 'img/img_iv_github.png');
    
    let h2El = document.createElement('h2');
    h2El.setAttribute('class', 'nome-funcionario');
    h2El.appendChild(document.createTextNode(`${funcionario.nome}`));

    let pEl = document.createElement('p');
    pEl.setAttribute('class', 'cargo-funcionario');
    pEl.appendChild(document.createTextNode(`${funcionario.cargo}`));

    let pEl2 = document.createElement('p');
    pEl2.appendChild(document.createTextNode(`${funcionario.descricao}`));

    let articleButtons = document.createElement('article');
    articleButtons.setAttribute('class', 'container-buttons');

    let btnCreate = document.createElement('button');
    btnCreate.setAttribute('class', 'btn-alterar');
    btnCreate.appendChild(document.createTextNode('Alterar'));

    let btnExcluir = document.createElement('button');
    btnExcluir.setAttribute('class', 'btn-excluir');
    btnExcluir.appendChild(document.createTextNode('Excluir Funcionário'));

    articleInside_fNC_eL.appendChild(imgEl);
    articleInside_fNC_eL.appendChild(h2El);
    articleInside_fNC_eL.appendChild(pEl);
    fotoNomeCargo_El.appendChild(articleInside_fNC_eL);
    articleButtons.appendChild(btnCreate);
    articleButtons.appendChild(btnExcluir);
    divFuncio.appendChild(fotoNomeCargo_El);
    divFuncio.appendChild(pEl2);
    divFuncio.appendChild(articleButtons);

    secaoEl.appendChild(divFuncio);
}

/*
    ADICIONAL SEM ORDEM: 
    
    Antes da pessoa começar qualquer coisa, deixar um aviso a ela.
*/

function makeHint() {

    let sections = document.querySelectorAll('.main-sections');
        section = sections[1];

    let texto = document.createElement('p'),
    negrito = document.createElement('strong');

    texto.appendChild(document.createTextNode('Olá bem Vindo! Assim que você cadastrar seu primeiro funcionário, ele ficará visível na tela junto com todos os outros  cadastrados.'));
    negrito.appendChild(document.createTextNode('NOTA: Com a excessão do seu nome, evite textos ou descrições muito curto(a)s.'));

    let artElemnt = document.createElement('article');
    artElemnt.setAttribute('id', 'card-aviso');

    let artElemnt2 = document.createElement('article');

    artElemnt2.appendChild(texto);
    artElemnt2.appendChild(negrito);
    artElemnt.appendChild(artElemnt2);

    section.appendChild(artElemnt);
}

function tiraAviso() {

    let secao = document.body.children[0].children[0];

    for (let i = 3; i <= secao.children.length; i++) {

        if (secao.childNodes[i].className === 'avisos_erro') {
            secao.removeChild(secao.childNodes[i]);
        }
    }
}
 
(function() {
    fazer_formCriarAlterar(1);
    fazer_formCriarAlterar(2);
    makeHint();
    pegarDadosFormCriar();
})()