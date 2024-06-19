function calculate() {
    // Step 1: Get input values
    const diameter = document.getElementById('diameter').value;
    const frequency = document.getElementById('frequency').value;
  
    // Step 2: Perform calculation
    // Placeholder for calculation logic - replace with actual calculation
    const result = `Calculated Value: ${(diameter * frequency).toFixed(2)}`;
  
    // Step 3: Display results
    document.getElementById('results').innerHTML = result;
  }