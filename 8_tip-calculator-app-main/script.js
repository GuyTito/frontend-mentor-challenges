const bill_input = document.querySelector('#bill')
const people_input = document.querySelector('#people')
bill_input.addEventListener('keyup', e => {
  calculateTip()
})
people_input.addEventListener('keyup', e => {
  calculateTip(people_input)
})

function selectTip(e = null) {
  let tips = document.getElementsByClassName("tip");
  for (i = 0; i < tips.length; i++) {
    tips[i].className = tips[i].className.replace(" chosen-tip", "");
  }
  if (e != null) e.currentTarget.className += " chosen-tip"
}

const tip_btns = document.querySelectorAll(".tip-btn")
const custom_tip = document.querySelector('.custom-tip')
var tip_percent = 0
tip_btns.forEach((tip_btn) => {
  tip_btn.addEventListener("click", e => {
    selectTip(e)
    custom_tip.value = ''
    tip_percent = parseFloat(tip_btn.value) / 100
    calculateTip()
  });
});


custom_tip.addEventListener('click', e => selectTip(e))
custom_tip.addEventListener('keyup', e => {
  tip_percent = parseFloat(e.target.value || 0) / 100
  calculateTip()
})

const error_span = document.querySelector('.error')
function setErrorFor(element, message) {
  element.classList.add("border-red-500")
  error_span.classList.remove("hidden")
  error_span.innerText = message
}
function setSuccessFor(element) {
  element.classList.remove("border-red-500")
  error_span.classList.add("hidden")
}

const tip_per_person_div = document.querySelector('#tip-per-person')
const total_per_person_div = document.querySelector('#total-per-person')
function calculateTip(input=null) {
  let bill = parseFloat(bill_input.value || 0)
  let no_of_ppl = parseInt(people_input.value || 0)
  let tip = tip_percent * bill
  let total_bill = tip + bill

  if (no_of_ppl < 1) {
    if (input == people_input) {
      setErrorFor(people_input, "Can't be zero")
    }
    return
  } else {
    setSuccessFor(people_input)
  }

  let tip_per_person = tip / no_of_ppl
  let total_bill_per_person = total_bill / no_of_ppl
  
  tip_per_person_div.innerHTML = (tip_per_person).toLocaleString('en-US', {style: 'currency', currency: 'USD',})
  total_per_person_div.innerHTML = (total_bill_per_person).toLocaleString('en-US', {style: 'currency', currency: 'USD',})
}

const reset_btn = document.querySelector('.reset-btn')
reset_btn.addEventListener('click', e => {
  bill_input.value = ''
  selectTip()
  custom_tip.value = ''
  people_input.value = ''
  tip_per_person_div.innerHTML = '$0.00'
  total_per_person_div.innerHTML = '$0.00'
})
