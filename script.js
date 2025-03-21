const mortgageForm = document.getElementById('mortgage-form');
const mortgageAmountInput = document.getElementById('mortgageAmount');
const mortgageTermInput = document.querySelector('#mortgageTermInput');
const interestRateInput = document.getElementById('interestRate');
const calculateButton = document.getElementById('calculate-button');
const monthlyRepaymentSpan = document.getElementById('monthly-repayment');
const option1RadioButton = document.getElementById('option-1');
const option2RadioButton = document.getElementById('option-2');
const monthlyRepaymentParagraph = document.querySelector('.results p')
const clearAllButton = document.getElementById('clear-all');
const resultBox = document.querySelector('.results');

// option1RadioButton.addEventListener('change', updateCalculation);
// option2RadioButton.addEventListener('change', updateCalculation);

 function updateCalculation() {
    const mortgageAmount = parseFloat(mortgageAmountInput.value);
    const mortgageTerm = parseInt(mortgageTermInput.value);
    const interestRate = parseFloat(interestRateInput.value);
    const selectedRadioButton = document.querySelector('input[name="mortgage-type"]:checked');
    const isRepayment = selectedRadioButton.id === 'option-1';
  
    if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate)) {
        alert('Invalid input. Please enter positive numbers.');
        return;
    }
    
    if (mortgageAmount <= 0 || mortgageTerm <= 0 || interestRate <= 0 ){
        alert('Calculation failed. Please Check your input.');
        return;
    }

    const monthlyRepayment = calculateMonthlyRepayment(mortgageAmount, mortgageTerm, interestRate, isRepayment);
    monthlyRepaymentSpan.textContent = `$${monthlyRepayment.toFixed(2)}`;
    monthlyRepaymentParagraph.textContent = `Monthly Repayment: $${monthlyRepayment.toFixed(2)}`.replace(":", "");
 }


clearAllButton.addEventListener('click', () => {
    mortgageAmountInput.value = '';
    mortgageTermInput.value = '';
    interestRateInput.value = '';
    monthlyRepaymentParagraph.textContent = 'Monthly Repayment: ';
   // monthlyRepaymentSpan.textContent = '';
});
calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
     updateCalculation();

   //  const mortgageAmount = parseFloat(mortgageAmountInput.value);
   //  const mortgageTerm = parseInt(mortgageTermInput.value);
    // const interestRate = parseFloat(interestRateInput.value);
   //  const selectedRadioButton = document.querySelector('input[name="mortgage-type"]:checked');
   //  const isRepayment = selectedRadioButton.id === 'option-1';

});
   
    // monthlyRepaymentSpan.textContent =`$${monthlyRepayment.toFixed(2)}`;

   // if (mortgageAmount && mortgageTerm && interestRate){
    //   const monthlyRepayment = calculateMonthlyRepayment(mortgageAmount,mortgageTerm,interestRate);
    //   return;
  //  } 
    

function calculateMonthlyRepayment(mortgageAmount, mortgageTerm, interestRate, isRepayment){
    const monthlyinterestRate =interestRate / 100 / 12;
    const numberOfPayments = mortgageTerm * 12
    if (isRepayment){
    const monthlyRepayment = mortgageAmount * monthlyinterestRate *(1 + monthlyinterestRate) **
    numberOfPayments / ((1 + monthlyinterestRate)** numberOfPayments -1);
        return monthlyRepayment; 
    } else {
        const monthlyRepayment = mortgageAmount * monthlyinterestRate;
        return monthlyRepayment;
    }
}