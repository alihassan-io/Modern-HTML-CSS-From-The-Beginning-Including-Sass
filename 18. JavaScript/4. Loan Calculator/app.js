// Listening for submit
document.getElementById("loan-form").addEventListener("submit", function (e) {

    // Hide results
    document.querySelector(".result").style.display = "none";

    // Show loader
    document.querySelector(".calculating").style.display = "block";

    setTimeout(calculateResults, 2000)

    e.preventDefault();
});

// Function for calculating results
function calculateResults() {
    // UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('year');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-amount');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.textContent = monthly.toFixed(2);
        totalPayment.textContent = (monthly * calculatedPayments).toFixed(2);
        totalInterest.textContent = ((monthly * calculatedPayments) - principal).toFixed(2);

        // Hide loader
        document.querySelector(".calculating").style.display = "none";

        // Show results
        document.querySelector(".result").style.display = "block";

    } else {
        showError();
    }

}

// Showing error alert
function showError() {
    // Hide loader
    document.querySelector(".calculating").style.display = "none";
    // Hide results
    document.querySelector(".result").style.display = "none";

    // created div element
    const errorDiv = document.createElement("div");
    errorDiv.className = "alert";
    errorDiv.innerHTML = `<p>Please Check Your Values!</p>`;

    // Getting elements to add alert div
    const calculatorContent = document.querySelector(".calculator-content");
    const infoSection = document.querySelector(".input-section");

    // Inserting alert inside DOM
    calculatorContent.insertBefore(errorDiv, infoSection);

    setTimeout(alterGoAway, 3000);
}

// It will make alert message hide
function alterGoAway() {
    document.querySelector(".alert").remove();
}