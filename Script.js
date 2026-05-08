function calculateStrikeRate(){

    let runs = document.getElementById("runs").value;
    let balls = document.getElementById("balls").value;

    if(runs === "" || balls === ""){
        alert("Please enter runs and balls");
        return;
    }

    if(balls == 0){
        alert("Balls faced cannot be zero");
        return;
    }

    let strikeRate = (runs / balls) * 100;

    document.getElementById("output").innerHTML =
        "Strike Rate: " + strikeRate.toFixed(2);
}
