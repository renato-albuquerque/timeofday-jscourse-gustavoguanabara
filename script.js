function load() {
    let message = document.getElementById("message")
    let image = document.getElementById("image")
    let date = new Date()
    let hour = date.getHours()
    
    message.innerHTML = `Now is <strong>${hour}</strong> hour(s).`

    if(hour >= 0 && hour < 12) {
        image.src = "files/morning1.png"
        document.body.style.backgroundColor = "#87c9fb"
    } else if(hour >=12 && hour <= 18) {
        image.src = "files/afternoon1.png"
        document.body.style.backgroundColor = "#e88242"
    } else {
        image.src = "files/night1.png"
        document.body.style.backgroundColor = "#241a33"
    }
}

