function Random(min, max) {
    return Math.random() * (max - min) + min;
}

function deleteStar(i) {
    setTimeout(() => {
        console.log(i)
        let star = document.getElementById("star_" + i)
        star.remove()
    }, 500 + Random(1, 5000))
    
}

let site = document.getElementsByClassName("site")[0]
let i = 0
setInterval(() => {
    site.innerHTML += `<img src="./star.png" alt="star" id="star_${i}" class="star" style="top: ${Random(1, 900)}px; left: ${Random(1, 1900)}px">`
    deleteStar(i)
}, 10)