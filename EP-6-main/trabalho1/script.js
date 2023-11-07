function inclui_nome() {
    var nome_variavel = prompt("Coloque seu nome:");
    if(nome_variavel){
        document.getElementById("marcacao_nome").innerHTML = nome_variavel;
    }
    else{
        alert("Coloca o nome ai irmao se nao, nao funfa.");
        inclui_nome();
    }
}

function funcao_resposta(){

    var resp1 = document.querySelector('input[name="quest_1"]:checked');
    var resp2 = document.querySelector('input[name="quest_2"]:checked');
    var resp3 = document.querySelector('input[name="quest_3"]:checked');
    var resp4 = document.querySelector('input[name="quest_4"]:checked');
    var resp5 = document.querySelector('input[name="quest_5"]:checked');
    var resp6 = document.querySelector('input[name="quest_6"]:checked');
    var resp7 = document.querySelector('input[name="quest_7"]:checked');
    var resp8 = document.querySelector('input[name="quest_8"]:checked');
    var resp9 = document.querySelector('input[name="quest_9"]:checked');
    var resp10 = document.querySelector('input[name="quest_10"]:checked');
    var contador = 0;


    if(resp1 && resp2 && resp3 && resp4){
        if(resp1.value == "correta"){
            document.getElementById("resp_correta_1").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_1").innerHTML = "Errada bobao"

        }
        if(resp2.value == "correta"){
            document.getElementById("resp_correta_2").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_2").innerHTML = "Errada bobao!"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_3").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_3").innerHTML = "Errada bobao"

        }
        if(resp4.value == "correta"){
            document.getElementById("resp_correta_4").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_4").innerHTML = "Errada bobao"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_5").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_5").innerHTML = "Errada bobao"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_6").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_6").innerHTML = "Errada bobao"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_7").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_7").innerHTML = "Errada bobao"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_8").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_8").innerHTML = "Errada bobao"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_9").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_9").innerHTML = "Errada bobao"

        }
        if(resp3.value == "correta"){
            document.getElementById("resp_correta_10").innerHTML = "Correta!"
            contador = contador + 1;
        }
        else{
            document.getElementById("resp_errada_10").innerHTML = "Errada bobao"

        }
        document.getElementById("quantos_acertos").innerHTML = "Você acertou " + contador + " questões!";

    }
    else{
        alert("ta em branco ai nene")
    }

}

document.getElementById('descritiva').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtenha as respostas do usuário
    const respostaQ11 = document.querySelector('textarea[name="q11"]').value;
    const respostaQ12 = document.querySelector('textarea[name="q12"]').value;
    const respostaQ13 = document.querySelector('textarea[name="q13"]').value;

    // Faça algo com as respostas, como exibir, armazenar ou processar
    console.log('Resposta da pergunta 11:', respostaQ11);
    console.log('Resposta da pergunta 12:', respostaQ12);
    console.log('Resposta da pergunta 13:', respostaQ13);

    // Limpe o conteúdo dos campos de texto
    document.querySelector('textarea[name="q11"]').value = '';
    document.querySelector('textarea[name="q12"]').value = '';
    document.querySelector('textarea[name="q13"]').value = '';

    // Você pode adicionar mais lógica aqui para processar as respostas conforme necessário

    alert('Respostas descritivas enviadas😎👍.'); // Exemplo de feedback ao usuário
});

