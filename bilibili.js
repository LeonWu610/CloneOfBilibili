let i = 1
function changePic() {
    i++
    if (i > 3) {
        i = 1
    }
    const pic = document.getElementById('big-img')
    pic.src = "main-pic/img-" + i + ".avif"

    document.querySelector(`.dot-${i}`).style.height = "15px"
    document.querySelector(`.dot-${i}`).style.width = "15px"
}
setInterval(changePic, 3000)
