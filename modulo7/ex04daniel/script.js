
function calcular() {
    let nome = document.getElementById('inome')
    let velocidade = Number(document.getElementById('ivelocidade').value)
    let res = document.getElementById('res')
    if(velocidade <= 0) {
        res.innerHTML = `A nave está parada, considere partir e aumentar a velocidade`
    } else if(velocidade <= 40) {
        res.innerHTML = `Você está devagar. Podemos aumentar a velocidade`
    } else if (velocidade < 80) {
        res.innerHTML = `Parece uma boa velocidade para manter`
    } else if (velocidade < 100) {
        res.innerHTML = `Velocidade alta, considere diminuir`
    } else {
        res.innerHTML = `Velocidade de risco, Controle automático forçado`
    }
    }
