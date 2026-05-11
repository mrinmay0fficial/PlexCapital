/**
 * ShiftCapital - Optimization Logic
 * Data Scientist Approach: Applying tax models to user input
 */

function runOptimization() {
    const incomeInput = document.getElementById('income').value;
    const taxRate = document.getElementById('jurisdiction').value;
    const displayArea = document.getElementById('results-area');
    const netDisplay = document.getElementById('net-display');
    const mathNote = document.getElementById('math-note');

    // Validation
    if (!incomeInput || incomeInput <= 0) {
        alert("Please enter a valid annual income to run the simulation.");
        return;
    }

    // Mathematical Model: Net = Gross * (1 - Rate)
    const gross = parseFloat(incomeInput);
    const net = gross * (1 - parseFloat(taxRate));

    // Formatter for Currency
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    // Reveal results with an animation effect (CSS transition)
    displayArea.classList.remove('hidden');
    netDisplay.innerText = formatter.format(net);
    
    // Provide data context
    const taxPercent = (parseFloat(taxRate) * 100).toFixed(0);
    mathNote.innerText = `Calculation includes estimated ${taxPercent}% effective rate.`;
    
    console.log(`Optimization completed: Gross ${gross} -> Net ${net}`);
}
