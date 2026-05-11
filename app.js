/**
 * PlexCapital Intelligence Engine
 * Version: 2.0.26
 */

let activeChart = null;

function runAnalysis() {
    const rawIncome = document.getElementById('incomeInput').value;
    const taxRate = document.getElementById('taxZone').value;

    if (!rawIncome || rawIncome <= 0) {
        alert("Action Required: Please enter a positive revenue figure to generate the model.");
        return;
    }

    // Logic
    const gross = parseFloat(rawIncome);
    const rate = parseFloat(taxRate);
    const taxAmount = gross * rate;
    const netTotal = gross - taxAmount;
    const retention = ((netTotal / gross) * 100).toFixed(1);

    // Update UI Text
    document.getElementById('netResult').innerText = formatValue(netTotal);
    document.getElementById('taxValue').innerText = formatValue(taxAmount);
    document.getElementById('retentionScore').innerText = `${retention}%`;

    // Initialize/Update Chart
    renderChart(netTotal, taxAmount);
}

function renderChart(net, tax) {
    const ctx = document.getElementById('wealthChart').getContext('2d');

    // Prevent chart overlap by destroying existing instance
    if (activeChart) {
        activeChart.destroy();
    }

    activeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Retained Net', 'Tax Liability'],
            datasets: [{
                data: [net, tax],
                backgroundColor: ['#2dd4bf', 'rgba(255,255,255,0.05)'],
                borderColor: ['#0f172a'],
                borderWidth: 4,
                hoverOffset: 20
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#94a3b8',
                        padding: 20,
                        font: { size: 12, family: 'Plus Jakarta Sans', weight: '600' }
                    }
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleFont: { size: 14 },
                    bodyFont: { size: 14 },
                    padding: 12,
                    displayColors: false
                }
            }
        }
    });
}

function formatValue(num) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(num);
}

// Initial placeholder log
console.log("PlexCapital Engine: Initialized.");
