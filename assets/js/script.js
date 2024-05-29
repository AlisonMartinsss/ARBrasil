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

var pt = document.querySelector("#pt");
var en = document.querySelector("#en");

pt.addEventListener("click", function() {
    en.classList.remove("active");
    pt.classList.add("active");
});

en.addEventListener("click", function() {
    pt.classList.remove("active");
    en.classList.add("active");
});