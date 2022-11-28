export let chosenFn = 'sin'
export let a = 1
export let b = 1
export let pointSize = 1
export let stepSize = 1
export let pointsNumber = 93000

function submittingData(){
    a = parseFloat($('.a').val())

    b = parseFloat($('.b').val())

    pointSize = parseFloat($('.pointSize').val())

    stepSize = parseFloat($('.stepSize').val())

    pointsNumber = parseFloat($('.pointsNumber').val())

    return 0
}

$('.option').click(function(event){
    return chosenFn = $(this).prop('id')
})

$('.submit').click(function(event){
    return submittingData()
})