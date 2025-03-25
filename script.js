function analyzeSymptoms() {
    let symptoms = document.getElementById("symptoms").value;
    let result = document.getElementById("symptom-result");
    
    if (symptoms.trim() === "") {
        result.textContent = "Please enter symptoms to analyze.";
        return;
    }
    
    result.textContent = "Analyzing symptoms... (AI model processing)";
    setTimeout(() => {
        result.textContent = "Based on the symptoms entered, we recommend consulting a doctor.";
    }, 2000);
}

function startConsultation() {
    alert("Redirecting to a video consultation platform...");
}

function findPharmacy() {
    let pharmacyResult = document.getElementById("pharmacy-result");
    pharmacyResult.textContent = "Locating nearby pharmacies...";
    setTimeout(() => {
        pharmacyResult.textContent = "Nearest pharmacy found: XYZ Pharmacy, 2 km away.";
    }, 2000);
}
