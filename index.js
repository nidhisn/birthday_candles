function ageForm() {
    let x = document.forms["myForm"]["fage"].value;
    if (x == "" || x < -1) {
        alert("Enter a valid age");
        return false;
    } else {
        var ageFormElement = document.getElementById('ageForm');
        var cakeLayers = document.querySelectorAll('.layer');

        var candleContainer = document.getElementById('candleContainer');
        var cakeBody = document.getElementById('cakeBody');
        
        ageFormElement.style.display = 'none'; // Hides the age form
        cakeLayers.forEach(layer => {
            layer.style.display = 'block'; // Shows each cake layer
        });
        
        for (let i = 0; i < x; i++) {
            var candle = document.createElement('div');
            candle.className = 'candle c' + (i + 1); // Adding individual candle class
            candleContainer.appendChild(candle);
        }
        return false; // Prevents form submission for this example
    }
}