let dataPartida = prompt('digite a data de partida (formato DD/MM/YYYY') // vai receber em modo texto

let dataPartidadigitada = moment(dataPartida, "DD/MM/YYYY") //Converter de String para o formatdo de data usando o 'Moment'

let today = moment()

let dataDiferenca = today - dataPartidadigitada

let chosenOption = prompt('Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias')


if(chosenOption == '1') {
    let segundos = Math.round(dataDiferenca / 1000)
    alert(`Tempo de vôo: ${segundos} segundos`)
} else if(chosenOption == '2') {
    let minutos = Math.round(dataDiferenca / 1000 / 60)
    alert(`Tempo de vôo: ${minutos} minutos`)
} else if(chosenOption == '3') {
    let horas = Math.round(dataDiferenca / 1000 / 3600)
    alert(`Tempo de vôo: ${horas} horas`)
} else if(chosenOption == '4') {
    let dias = Math.round(dataDiferenca / 1000 / 3600 / 24)
    alert(`Tempo de vôo: ${dias} dias`)
} else {
    alert('Opção inválida')
}