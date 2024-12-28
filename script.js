function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function search() {
    let ing = document.getElementById('input').value.toLowerCase().split(' ')
    if (ing[0] != "") {
        let elements = document.getElementsByClassName("opc");
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('active');
            elements[i].style.opacity = 1;
        };
        fetch("food.json")
        .then(response => response.json())
        .then(data => {
            let dat = []
            for (let a = 0; a < data.length; a++) {
                if (ing.every(b => data[a].ing.includes(b))) {
                    dat.push(data[a])
                }
            }
            var ran = getRandomInt(dat.length)
            while (dat[ran].name == document.getElementById("name").innerText && dat.length !== 1) {
                var ran = getRandomInt(dat.length)
            }
            document.getElementById("image").alt = `dishes/${dat[ran].phs[0]}`
            document.getElementById("image").src = `dishes/${dat[ran].phs[0]}`
            document.getElementById("method").innerText = dat[ran].rec
            document.getElementById("name").innerText = dat[ran].name

            let need = dat[ran].ing.filter(inn => !ing.includes(inn))

            for (let q = 1; q < 12; q++) {
                document.getElementById(`add-${q}`).src = ""
            }

            for (let w = 0; w < need.length; w++) {
                document.getElementById(`add-${w+1}`).src = `ing/${need[w]}.png`
            }
        })
    }
};

function random() {
    let elements = document.getElementsByClassName("opc");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('active');
        elements[i].style.opacity = 1;
    };
    fetch("food.json")
    .then(response => response.json())
    .then(data => {
        var ran = getRandomInt(data.length)
        while (data[ran].name == document.getElementById("name").innerText) {
            var ran = getRandomInt(data.length)
        }
        document.getElementById("image").alt = `dishes/${data[ran].phs[0]}`
        document.getElementById("image").src = `dishes/${data[ran].phs[0]}`
        document.getElementById("method").innerText = data[ran].rec
        document.getElementById("name").innerText = data[ran].name

        for (let q = 1; q < 12; q++) {
            document.getElementById(`add-${q}`).src = ""
        }

        for (let w = 0; w < data[ran].ing.length; w++) {
            document.getElementById(`add-${w+1}`).src = `ing/${data[ran].ing[w]}.png`
        }
    })
};

function arrow_left() {
    if (document.getElementById("image").alt.includes("2")) {
        document.getElementById("image").alt = document.getElementById("image").alt.replace(/2/g, "1")
        document.getElementById("image").src = document.getElementById("image").alt
    }
}

function arrow_right() {
    if (document.getElementById("image").alt.includes("1")) {
        document.getElementById("image").alt = document.getElementById("image").alt.replace(/1/g, "2")
        document.getElementById("image").src = document.getElementById("image").alt
    }
}