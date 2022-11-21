let pilotName = prompt('Qual o seu nome Piloto')
let velocity = 0
let newVelocity = prompt('A que velocidae você gostaria de acelerar?')
let confirmVelocity = confirm(`Estamos acelerando para ${newVelocity} km/s`)

if(confirmVelocity) {
    velocity = newVelocity
} 

if(velocity <= 0) {
    alert('A nave está parada, considere partir e aumentar a velocidade')
} else {
    if(velocity < 40) {
        alert('Você está devagar. Podemos aumentar a velocidade')
    } else {
        if(velocity < 80) {
            alert('Parece uma boa velocidade para manter')
        } else {
            if(velocity <100) {
                alert('Velocidade alta, considere diminuir')
            } else {
                alert('Velicidade de risco, Controle automático forçado')
            }
        }
    }
}

