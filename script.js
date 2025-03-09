// Function to validate service quality
function validateServiceQuality(quality) {
    const validQualities = ['great', 'ok', 'poor'];
    return validQualities.includes(quality.toLowerCase());
}

// Function to validate service amount
function validateServiceAmount(amount) {
    return amount >= 5.00 && amount <= 500.00;
}

// Function to calculate the tip
function calculateTip() {
    const serviceAmount = parseFloat(document.getElementById('serviceAmount').value);
    const serviceQuality = document.getElementById('serviceQuality').value;

    // Validate service amount
    if (!validateServiceAmount(serviceAmount)) {
        document.getElementById('result').innerHTML = "Invalid service amount. Please enter a value between $5.00 and $500.00.";
        return;
    }

    // Validate service quality
    if (!validateServiceQuality(serviceQuality)) {
        document.getElementById('result').innerHTML = "Invalid service quality. Please select 'Great', 'OK', or 'Poor'.";
        return;
    }

    // Calculate tip based on service quality
    let tipPercentage;
    switch (serviceQuality.toLowerCase()) {
        case 'great':
            tipPercentage = 0.20;
            break;
        case 'ok':
            tipPercentage = 0.15;
            break;
        case 'poor':
            tipPercentage = 0.10;
            break;
        default:
            tipPercentage = 0;
    }

    const tipAmount = serviceAmount * tipPercentage;

    // Display the result
    document.getElementById('result').innerHTML = `
        <strong>Service Amount:</strong> $${serviceAmount.toFixed(2)}<br>
        <strong>Service Quality:</strong> ${serviceQuality}<br>
        <strong>Recommended Tip:</strong> $${tipAmount.toFixed(2)} (${(tipPercentage * 100)}%)
    `;
}