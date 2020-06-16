export function makeFormCreate() {

    const txtCriar = {
      'txth2': 'Cadastro Funcionário',
      'txtP': 'Ao cadastrar o funcionário bote todas as características obrigatórias abaixo, caso alguma esteja faltando, o funcionário nãpoderá ser cadastrado.',
      'txtLbl1': 'Insira o nome do funcionário:',
      'txtlbl2': 'Insira o cargo do funcionário:',
      'txtlbl3': 'Descreva o cargo do funcionário:',
      'txtBTN': 'Cadastrar funcionário',
    }
  
    let secoes = document.querySelectorAll('section.main-sections');
        
    let secaoEl = secoes[0];
  
    let formEl = document.createElement('form');
    formEl.setAttribute('class', 'form-section');
    formEl.setAttribute('method', 'post'); 
  
    let h2El = document.createElement('h2');
    h2El.appendChild(document.createTextNode(txtCriar.txth2));
  
    let pEl = document.createElement('p');
    pEl.appendChild(document.createTextNode(txtCriar.txtP));
  
    let label1 = document.createElement('label');
    label1.setAttribute('class', 'first-label');
    label1.setAttribute('for', 'input-nm-funcioario');
    label1.appendChild(document.createTextNode(txtCriar.txtLbl1));
  
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
    label2.appendChild(document.createTextNode(txtCriar.txtlbl2));
  
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
    label3.appendChild(document.createTextNode(txtCriar.txtlbl3));
  
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
    btnEl.appendChild(document.createTextNode(txtCriar.txtBTN));
  
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
    
    console.log(formEl);
}