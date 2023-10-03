function greetUser() {
    const userName = document.getElementById("userName").value;
    const userMood = document.getElementById("userMood").value;
    const userNumber = Math.abs(Math.round(parseFloat(document.getElementById("userNumber").value)));

    const greeting = document.getElementById("greeting");
    greeting.innerHTML = `SparksCorp. Home to the Kooky Sloths welcomes you, ${userName}!<br>We're glad you are doing ${userMood}!<br>`;
    
    // Determine and display the polygon name
    const polygonName = getPolygonName(userNumber);
    alert(`The polygon with ${userNumber} sides is called a ${polygonName}`);
}

function getPolygonName(sides) {
    const polygonNames = {
        1: "Henagon",
        2: "Digon",
        3: "Trigon",
        4: "Tetragon",
        // Add more polygon names as needed
    };
    return polygonNames[sides] || "Unknown";
}

function provideInsult() {
    // Function to provide a harmless insult
    alert("You look you'd build a crappy webpage! haha all in good fun");
}

function calculateTax() {
    // Function to calculate tax (replace with your own calculation)
    alert("Tax calculation: You owe $1000.");
}

function provideQuote() {
    // Function to provide an inspirational quote
    alert("Inspirational Quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill");
}

function provideCompliment() {
    // Function to provide a compliment
    alert("You're amazing and capable of achieving anything you set your mind to!");
}
