(function(){
    emailjs.init("AJl0x9qzaO7ImRiAf");

    document.getElementById('form-contato').addEventListener('submit', function(event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;
        var assunto = document.getElementById('assunto').value;
        var mensagem = document.getElementById('mensagem').value;

        if (!nome || !email || !telefone || !assunto || !mensagem) {
            let retorno = document.getElementById('retorno');
            retorno.classList.remove('success', 'danger')
            retorno.classList.add('warning')
            retorno.textContent = 'Por favor, preencha todos os campos.'
            return;
        }

        emailjs.sendForm('service_gl2kdwn', 'template_xnhgcdh', this)
            .then(function() {
                let retorno = document.getElementById('retorno');
                retorno.classList.remove('warning', 'danger')
                retorno.classList.add('success')
                retorno.textContent = 'Mensagem enviada com sucesso!'
                document.getElementById('botao').style.display = 'none';
                document.getElementById('nome').setAttribute('disabled', 'disabled');
                document.getElementById('email').setAttribute('disabled', 'disabled');
                document.getElementById('telefone').setAttribute('disabled', 'disabled');
                document.getElementById('assunto').setAttribute('disabled', 'disabled');
                document.getElementById('mensagem').setAttribute('disabled', 'disabled');
                
            }, function(error) {
                let retorno = document.getElementById('retorno');
                retorno.classList.remove('warning', 'success')
                retorno.classList.add('danger')
                retorno.textContent = 'Erro ao enviar a mensagem!'
            });
    });
})();

(function(){
    emailjs.init("AJl0x9qzaO7ImRiAf");

    document.getElementById('form-curriculo').addEventListener('submit', function(event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;
        var assunto = document.getElementById('assunto').value;
        var curriculo = document.getElementById('curriculo').value;

        if (!nome || !email || !telefone || !assunto || !curriculo) {
            let retorno = document.getElementById('retorno');
            retorno.classList.remove('success', 'danger')
            retorno.classList.add('warning')
            retorno.textContent = 'Por favor, preencha todos os campos.'
            return;
        }

        emailjs.sendForm('service_gl2kdwn', 'template_mdm2gdc', this)
            .then(function() {
                let retorno = document.getElementById('retorno');
                retorno.classList.remove('warning', 'danger')
                retorno.classList.add('success')
                retorno.textContent = 'Currículo enviado com sucesso!'
                document.getElementById('botao').style.display = 'none';
                document.getElementById('nome').setAttribute('disabled', 'disabled');
                document.getElementById('email').setAttribute('disabled', 'disabled');
                document.getElementById('telefone').setAttribute('disabled', 'disabled');
                document.getElementById('assunto').setAttribute('disabled', 'disabled');
                document.getElementById('curriculo').setAttribute('disabled', 'disabled');
                
            }, function(error) {
                let retorno = document.getElementById('retorno');
                retorno.classList.remove('warning', 'success')
                retorno.classList.add('danger')
                retorno.textContent = 'Erro ao enviar o currículo!'
            });
    });
})();

function scroll() {
    var position = window.scrollY;
    var div = document.querySelector(".top-fixed");

    if(position != 0) {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

var btn = document.querySelector("#top");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

var question = document.querySelector("#question");
var btnQuestion = document.querySelector("#btnQuestion");
var btnQuestion2 = document.querySelector("#btnQuestion2");
var curriculo = document.querySelector("#curriculo");
var btnCurriculo = document.querySelector("#btnCurriculo");
var btnCurriculo2 = document.querySelector("#btnCurriculo2");
var form = document.querySelector("#form-contato");
var formCurriculo = document.querySelector("#form-curriculo");
formCurriculo.style.display = "none";

question.addEventListener("click", function() {
    question.classList.add("active");
    curriculo.classList.remove("active");
    form.style.display = "flex";
    formCurriculo.style.display = "none";
});

btnQuestion.addEventListener("click", function() {
    question.classList.add("active");
    curriculo.classList.remove("active");
    form.style.display = "flex";
    formCurriculo.style.display = "none";
});

btnQuestion2.addEventListener("click", function() {
    question.classList.add("active");
    curriculo.classList.remove("active");
    form.style.display = "flex";
    formCurriculo.style.display = "none";
});

curriculo.addEventListener("click", function() {
    question.classList.remove("active");
    curriculo.classList.add("active");
    form.style.display = "none";
    formCurriculo.style.display = "flex";
});

btnCurriculo.addEventListener("click", function() {
  question.classList.remove("active");
  curriculo.classList.add("active");
  form.style.display = "none";
  formCurriculo.style.display = "flex";
});

btnCurriculo2.addEventListener("click", function() {
    question.classList.remove("active");
    curriculo.classList.add("active");
    form.style.display = "none";
    formCurriculo.style.display = "flex";
  });