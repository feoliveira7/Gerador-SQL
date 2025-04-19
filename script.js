function gerarSQL() {
    const tabela = document.getElementById("tabela").value;
    const cliente = document.getElementById("cliente").value;
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;

    const sqlQuery = `INSERT INTO ${tabela} (cliente, produto, quantidade) VALUES ('${cliente}', '${produto}', ${quantidade});`;
    
    document.getElementById("sqlOutput").value = sqlQuery;
}


function formatarNome() {
    const input = document.getElementById("cliente");
    const palavras = input.value.split(" ");
    

    for (let i = 0; i < palavras.length; i++) {
        if (palavras[i]) {
            palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substring(1).toLowerCase();
        }
    }


    input.value = palavras.join(" ");
}