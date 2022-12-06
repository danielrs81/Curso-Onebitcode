function calcular() {
    let dataPartida = document.getElementById('idata')
    let dataDigitada = moment(dataPartida, "DD/MM/YYYY") //Converter de String para o formatdo de data usando o 'Moment'
    let today = moment()

    let dataDiferenca = today - dataDigitada
    
    let res = document.getElementById('res')
    
    if(dataDigitada == 0) {
        res.innerHTML = `Data em branco`
    }
} 

