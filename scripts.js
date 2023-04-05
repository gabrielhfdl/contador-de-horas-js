// Criando as variáveis txt1 e txt2 para receber os valores de entrada e a variável res para receber o resultado na div id="res"
let txt1 = document.getElementById('txt1')
let txt2 = document.getElementById('txt2')
let res = document.getElementById('res')


function calcular() {
    // Pequena validação: caso não sejam preenchidas as entradas, surgirá um aviso de erro.
    if (txt1.value.length != 5 || txt2.value.length != 5) {
        alert('ERRO! Verifique seus horários e tente novamente.')
    } else {
        // Trabalhando com os elementos da primeira entrada, concatenando convertendo para totalidade de segundos 
        let minutos_trabalhados = `${txt1.value[3]}${txt1.value[4]}`
        let horas_trabalhadas = `${txt1.value[0]}${txt1.value[1]}`
        let minutos_totais = minutos_trabalhados * 60
        let horas_totais = horas_trabalhadas * 60 * 60
        let total_trabalhado = horas_totais + minutos_totais
        

        // Trabalhando com os elementos da segunda entrada, concatenando e convertendo para totalidade em segundos 
        let minutos_saida = `${txt2.value[3]}${txt2.value[4]}`
        let horas_saida = `${txt2.value[0]}${txt2.value[1]}`
        let minutos_saida_total = minutos_saida * 60
        let horas_saida_total = horas_saida * 60 * 60
        let total_saida = horas_saida_total + minutos_saida_total

        let total = total_saida - total_trabalhado

        // Pequena validação para que o programa aceite apenas horário comercial. Considerei que só será válida a entrada caso o horário de entrada seja anterior ao de saída no mesmo dia! Caso fosse necessário alterar para que alguém consiga começar a trabalhar num dia e terminar no outro, bastaria fazer uma condição com a variação total.
        if (total_saida < total_trabalhado) {
            alert('ERRO! O horário de saída não pode ser anterior ao de entrada!')
            res.innerHTML = ''
        } else {
        // Convertendo a quantidade total de segundos para horas e minutos, utilizando a biblioteca Math e seus métodos 
            let horas = (total/3600)
            let decimal = (horas - Math.floor(horas))*60
 
            res.innerHTML = `Hoje você trabalhou durante ${Math.trunc(horas)} hora(s) e ${Math.round(decimal)} minuto(s)!
           `
        }

               
    }
}