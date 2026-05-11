/**
 * PlexCapital Data Modeling Engine
 * Version: 1.0.2 - 2026 Refactor
 */

function calculateWealth() {
    // 1. Capture user inputs
    const grossIncome = document.getElementById('incomeInput').value;
    const taxRate = document.getElementById('taxZone').value;
    
    // 2. Element references
    const outputContainer = document.getElementById('outputContainer');
    const netDisplay = document.getElementById('netResult');
    const dataNote = document.getElementById('dataNote');

    // 3. Input Validation Logic
    if (!grossIncome || grossIncome <= 0) {
        alert("Please enter a valid revenue figure for the data model.");
        return;
    }

    // 4. Data Science Model (Net = Gross * (1 - Tax))
    const netValue = parseFloat(grossIncome) * (1 - parseFloat(taxRate));

    // 5. Professional Currency Formatting
    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    // 6. Output Processing
    outputContainer.classList.remove('hidden');
    netDisplay.innerText = currencyFormat.format(netValue);
    
    const taxPercentage = (parseFloat(taxRate) * 100).toFixed(0);
    dataNote.innerText = `Simulation based on a ${taxPercentage}% effective tax model in the selected 2026 jurisdiction.`;

    // Developer log
    console.log(`Model executed. Net Value: ${netValue}`);
}
