var elForm = document.querySelector('.form');
var elResultUzb = elForm.querySelector('.result_uzb');
var elFormBtn = elForm.querySelector('.form-button');

elFormBtn.addEventListener('click', function(event) {
  var amount = document.querySelector('.form__summa').value;
  var currency = Math.round(document.querySelector('.currency-select').value);

  event.preventDefault();
  var ResultUzbResult = parseFloat(amount * currency);
  elResultUzb.value = ResultUzbResult;
});