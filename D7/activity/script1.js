const form = document.getElementById("loanForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const loanAmountInput = document.getElementById("loanAmount");
    const interestRateInput = document.getElementById("interestRate");
    const loanTermInput = document.getElementById("loanTerm");

    const loanAmount = loanAmountInput.value;
    const interestRate = interestRateInput.value;
    const loanTerm = loanTermInput.value;

    const monthlyInterestRate = interestRate / 12 / 100;
    const totalPayments = loanTerm * 12;

    const monthlyPayment =
        (loanAmount *
            monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, totalPayments)) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
        
    const newParagraph = document.createElement("p");
    newParagraph.textContent = `Monthly payment: $${monthlyPayment.toFixed(2)}`
    newParagraph.style.fontWeight = "600"
    const form = document.getElementById("loanForm")
    form.appendChild(newParagraph)

    loanAmountInput.value = "";
    interestRateInput.value = "";
    loanTermInput.value = "";
}
