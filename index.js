let h = parseInt(document.getElementById("human").textContent)
let ai = parseInt(document.getElementById("ai").textContent)

function main() {
    document.getElementById("rock").onclick = () => {
        document.getElementById("rock").style.backgroundColor = "rgb(36, 36, 36)";
        document.getElementById("paper").style.backgroundColor = "rgb(36, 36, 36)";
        document.getElementById("sci").style.backgroundColor = "rgb(36, 36, 36)";
        document.getElementById("rock").style.backgroundImage = "none";
        document.getElementById("paper").style.backgroundImage = "none";
        document.getElementById("sci").style.backgroundImage = "none";
        document.getElementById("rock").style.backgroundColor = "green";
        a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        if (a === 1) {
            document.getElementById("rock").style.backgroundImage = "linear-gradient(90deg, blue 50%, red 50%)";
        }
        
        if (a === 2) {
            document.getElementById("paper").style.backgroundColor = "red";
            ai += 1;
            document.getElementById("ai").textContent = ai;
        }
        
        if (a === 3) {
            document.getElementById("sci").style.backgroundColor = "red";
            h += 1;
            document.getElementById("human").textContent = h;
        }
    }

    document.getElementById("paper").onclick = () => {
        document.getElementById("rock").style.backgroundColor = "rgb(36, 36, 36)";
        document.getElementById("paper").style.backgroundColor = "rgb(36, 36, 36)";
        document.getElementById("sci").style.backgroundColor = "rgb(36, 36, 36)";
        document.getElementById("rock").style.backgroundImage = "none";
        document.getElementById("paper").style.backgroundImage = "none";
        document.getElementById("sci").style.backgroundImage = "none";
        document.getElementById("paper").style.backgroundColor = "green";
        a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        if (a === 1) {
        document.getElementById("rock").style.backgroundColor = "red";
        h += 1;
        document.getElementById("human").textContent = h;
        }
        
        if (a === 2) {
            document.getElementById("paper").style.backgroundImage = "linear-gradient(90deg, blue 50%, red 50%)";
        }
        
        if (a === 3) {
            document.getElementById("sci").style.backgroundColor = "red";
            ai += 1;
            document.getElementById("ai").textContent = ai;
        }
    }

    document.getElementById("sci").onclick = () => {
        document.getElementById("rock").style.backgroundColor = "rgb(36, 36, 36)";
        document.getElementById("paper").style.backgroundColor = "rgb(36, 36, 36)";
        document.getElementById("rock").style.backgroundImage = "none";
        document.getElementById("paper").style.backgroundImage = "none";
        document.getElementById("sci").style.backgroundImage = "none";
        document.getElementById("sci").style.backgroundColor = "green";
        a = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        if (a === 1) {
        document.getElementById("rock").style.backgroundColor = "red";
        }
        
        if (a === 2) {
            document.getElementById("paper").style.backgroundColor = "red";
            h += 1;
            document.getElementById("human").textContent = h;
        }
        
        if (a === 3) {
            document.getElementById("sci").style.backgroundImage = "linear-gradient(90deg, blue 50%, red 50%)";
        }
    }
}

main()