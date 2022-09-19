const columns = 10
const rows = 21

const colors = ['#E27D60', '#F64C72', '#659DBD', '#DAAD86', '#a569bd', '#379683', '#83677B']

for(let i=1; i<=columns*rows; ++i)
    $('.main').append($('<div><div/>').addClass('dot').css('backgroundColor', colors[Math.floor(Math.random()*7 +1) -1]))

function changeDotBgColor(){
    let individualDot = $('.dot')

    for(let i=0; i<columns*rows; ++i)
        individualDot.eq(i).css('backgroundColor', colors[Math.floor(Math.random()*7 +1) -1])

    return $('.dot')
}

changeDotBgColor()

window.setInterval(changeDotBgColor, 800)