function add_CSS_FontStyle() {

    const style_css = document.createElement('style'),
        content = document.createTextNode(
            '@charset "utf-8"; @font-face { font-family: "Titillium Regular"; src: url("css/font/TitilliumWeb/TitilliumWeb-Regular.ttf"); } @font-face { font-family: "Titillium SBold"; src: url("css/font/TitilliumWeb/TitilliumWeb-SemiBold.ttf"); } @font-face { font-family: "Titillium Bold"; src: url("css/font/TitilliumWeb/TitilliumWeb-Bold.ttf"); }'
        );
    
    style_css.appendChild(content);
    document.head.append(style_css);
}

function add_CSS_style() {

    const style_css = document.createElement('style'),
        content = document.createTextNode(
            '@charset "utf-8";*{box-sizing:border-box}body{font-family:Helvetica,Verdana,sans-serif;font-size:100%;margin:0;border:0;background-color:#ecf1fa;width:100%;height:100vh}#main-container{width:60%;min-width:320px;max-width:1152px;min-height:100vh;margin:0 auto;display:flex}.main-sections{padding:10px}.form-section{width:100%;padding:30px;background-color:#fff;font-family:"Titillium Regular";color:#000;display:flex;flex-direction:column;border-radius:2px;box-shadow:2px 2px 10px 1px #d8e6ff;animation:fadein .15s linear forwards}.form-section>h2{font-family:"Titillium Bold";margin:0}.form-section>p{color:#626262;margin:0}.first-label,.form-section>label{font-family:"Titillium SBold";margin:10px 0}.first-label{margin:0 0 10px 0}.inputs{line-height:28px;font-size:16px;font-family:"Titillium Regular";border-radius:2px;border:2px solid #efefef;outline-color:#13aa52}.form-section>textarea{resize:none;font-size:16px;margin-bottom:20px;border-radius:2px;border:2px solid #efefef;outline-color:#13aa52;line-height:18px}#btn-cadastrar{font-family:"Titillium SBold";font-size:15px;padding:15px 20px;background-color:#13aa52;border:2px solid #13aa52;color:#fff;border-radius:2px;outline-color:#f1f1f1}#btn-cadastrar:hover{cursor:pointer;transition:.4s ease-in-out;box-shadow:0 0 1px 3px rgba(19,170,82,.5)}#btn-cadastrar:focus{outline:0}#aviso_erro{width:100%;padding:5px 10px;background:linear-gradient(45deg,#f44336,#e91e63);color:#fff;font-family:"Titillium SBold";display:flex;margin-top:15px;animation:fadein .15s linear forwards;box-shadow:0 0 1px 3px #ff95b7,2px 2px 10px 5px #b7d1ff;border-radius:2px;animation:slide .15s linear forwards}@keyframes slide{50%{transform:translateX(-15px);opacity:.5}100%{transform:translateX(0);opacity:1}}#aviso_erro p{flex:1;margin-left:10px}#aviso_erro>button{padding:10px;width:16px;height:18px;background-color:transparent;border:2px solid transparent;margin:auto 5px auto auto;outline:0}#aviso_erro>button:hover{cursor:pointer}button>.btn_symbol::after,button>.btn_symbol::before{content:"";display:block;width:20px;height:3px;background-color:#fff;transform:rotate(-135deg);position:relative;top:-14px;left:-20px}button>.btn_symbol::after{transform:rotate(-45deg);position:relative;top:-17px;left:-20px}.card-funcionario:nth-child(even){margin:15px 0}.card-funcionario{width:100%;min-height:150px;background-color:#fff;padding:20px;display:flex;flex-direction:column;box-shadow:2px 2px 10px 1px #d8e6ff;animation:fadein .15s linear forwards;animation:slide .15s linear forwards}@keyframes fadein{0%{opacity:0}50%{opacity:.5}100%{opacity:1}}.bloco-foto-nome-cargo{width:100%;min-height:60px;background-color:transparent;display:flex}.bloco-foto-nome-cargo>article:first-child{width:100%;margin-right:10px}.img-funcionario{height:60px;width:60px;max-height:60px;max-width:60px;background-color:#aed3ff;float:left;border-radius:50%;margin:0 5px 5px 0}.cargo-funcionario,.nome-funcionario{margin:0 0 5px 0}.nome-funcionario{font-family:"Titillium Bold";font-size:22px}.card-funcionario>p,.cargo-funcionario{font-family:"Titillium Regular";font-size:16px;color:#626262}.card-funcionario>p{margin-top:5px}.btn-alterar,.btn-excluir{font-family:"Titillium SBold";font-size:15px;padding:5px 20px;color:#fff;border-radius:2px}.btn-alterar{background-color:#13aa52;border:2px solid #13aa52}.btn-alterar:hover{background-color:#35b542;transition:.45s ease-in-out;border-color:#35b542;cursor:pointer}.btn-alterar:focus{outline:0}.btn-excluir{background-color:#000;border:2px solid #000;margin-left:3px}.btn-excluir:hover{background-color:#333;transition:.45s ease-in-out;border-color:#333;cursor:pointer}.btn-excluir:focus{outline:0}#card-aviso{width:100%;font-family:"Titillium Regular";background-color:#fff;padding:20px;display:flex;flex-direction:column;box-shadow:2px 2px 10px 1px #d8e6ff;border-left:3px solid #14aa53}#card-aviso>article{padding:10px;border:2px dashed #efefef}#card-aviso p{margin-top:0}@media (min-width:856px){.main-sections{flex:1}}@media (max-width:1240px){#main-container{width:80%}}@media (max-width:855px){#main-container{flex-direction:column;padding:10px;width:95%}.main-sections:nth-child(1){padding:0}.main-sections:nth-child(2){padding:15px 0 0 0}}' 
        );
        
    style_css.appendChild(content);
    document.head.append(style_css);
    
}

(function(){
    add_CSS_style();
    add_CSS_FontStyle();
})()