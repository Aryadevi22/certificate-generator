function generateCertificate() {
    var name = document.getElementById('name').value;
    var certificateType = document.getElementById('certificateType').value;

    if (name.trim() !== '') {
        // Redirect to the selected template website based on certificate type
        switch (certificateType) {
            case 'participation':
                window.location.href = 'http://127.0.0.1:5500/participation.html';
                break;
            case 'academicExcellence':http
                window.location.href = 'http://127.0.0.1:5500/academicexcellence.html';
                break;
            case 'sportsExcellence':
                window.location.href = 'http://127.0.0.1:5500/sportsachievements.html';
                break;
            case 'medicalCertificate':
                window.location.href = 'http://127.0.0.1:5500/medicalcertificate.html';
                break;
            default:
                break;
        }
    } else {
        alert('Please enter your name.');
    }
    
}
