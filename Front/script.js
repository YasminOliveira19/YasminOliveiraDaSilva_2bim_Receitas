const enderecoServidor = 'localhost';
const porta = '3001';

async function listarTodas() {
    try {
        const resposta = await fetch(`http://${enderecoServidor}:${porta}/listarReceitas`, {
            method: 'GET',
        });
        const dados = await resposta.json();

        if (dados.status === "sucesso") {
            let dadosResp = "";
            dados.receitas.forEach(element => {
                dadosResp += `<div class="cardResp">
                <img src="${element.imagem}">
                <div class="infoReceita">
                <h2>${element.nome_receita}</h2>
                <p><strong>Ingredientes:</strong></p>
                <p>${element.ingredientes}</p>
                <p><strong>Tempo de preparo:</strong> ${element.tempo_preparo} min</p>
                <p><strong>Categoria:</strong> ${element.nome_categoria}</p>
                </div> 
            </div>`;
            });
            document.getElementById("resultadoTodas").innerHTML = `${dadosResp}`
        }

    } catch (erro) {
        console.error('erro:', erro);
        document.getElementById("resultadoTodas").innerHTML = `<div class= "respErrado">Deu erro no servidor</div>`;
    }
}

async function BuscarPorCategoria() {
    let categoria = document.getElementById("inputCategoria").value;

    //validar dados
    let pacoteJson = "";
    if (categoria != "") {
        pacoteJson = { categoria: categoria };
    } else {
        document.getElementById("resultadoCategoria").innerHTML = `<div class= "respErrado">Insira uma categoria!</div>`;
        return;
    }

    try {
        const resposta = await fetch(`http://${enderecoServidor}:${porta}/BuscarCategoria`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pacoteJson),
        });
        const dados = await resposta.json();
        if (dados.status === "sucesso") {
            let dadosResp = "";
            dados.categorias.forEach(element => {
                dadosResp += `<div class="cardResp">
                <img src="${element.imagem}">
                <div class="infoReceita">
                <h2>${element.nome_receita}</h2>
                <p><strong>Ingredientes:</strong></p>
                <p>${element.ingredientes}</p>
                <p><strong>Tempo de preparo:</strong> ${element.tempo_preparo} min</p>
                <p><strong>Categoria:</strong> ${element.nome_categoria}</p>
                </div> 
            </div>`;
            });
            document.getElementById("resultadoCategoria").innerHTML = `${dadosResp}`;
        } else {
            document.getElementById("resultadoCategoria").innerHTML = `<div class= "respErrado">Deu problema!</div>`;
        }
    } catch {
        console.error('erro:', erro);
        document.getElementById("resultadoCategoria").innerHTML = `<div class= "respErrado">Deu erro no servidor</div>`;
    }
}

async function BuscarPorIngrediente() {
    let ingrediente = document.getElementById("inputIngrediente").value;

    //validar dados
    let pacoteJson = "";
    if (ingrediente != "") {
        pacoteJson = { ingrediente: ingrediente };
    } else {
        document.getElementById("resultadoIngrediente").innerHTML = `<div class= "respErrado">Insira um ingrediente!</div>`;
        return;
    }

    try {
        const resposta = await fetch(`http://${enderecoServidor}:${porta}/BuscarIngrediente`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pacoteJson),
        });
        const dados = await resposta.json();
        if (dados.status === "sucesso") {
            let dadosResp = "";
            dados.ingredientes.forEach(element => {
                dadosResp += `<div class="cardResp">
                <img src="${element.imagem}">
                <div class="infoReceita">
                <h2>${element.nome_receita}</h2>
                <p><strong>Ingredientes:</strong></p>
                <p>${element.ingredientes}</p>
                <p><strong>Tempo de preparo:</strong> ${element.tempo_preparo} min</p>
                <p><strong>Categoria:</strong> ${element.nome_categoria}</p>
                </div> 
            </div>`;
            });
            document.getElementById("resultadoIngrediente").innerHTML = `${dadosResp}`;
        } else {
            document.getElementById("resultadoIngrediente").innerHTML = `<div class= "respErrado">Deu problema!</div>`;
        }
    } catch {
        console.error('erro:', erro);
        document.getElementById("resultadoIngrediente").innerHTML = `<div class= "respErrado">Deu erro no servidor</div>`;
    }
}



async function buscarPorTempo() {
    let tempo = parseInt(document.getElementById("inputTempo").value);

    //validar dados
    let pacoteJson = "";
    if (tempo != "") {
        pacoteJson = { tempo: tempo };
    } else {
        document.getElementById("resultadoTempo").innerHTML = `<div class= "respErrado">Insira o tempo de preparo!</div>`;
        return;
    }

    try {
        const resposta = await fetch(`http://${enderecoServidor}:${porta}/BuscarTempo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pacoteJson),
        });
        const dados = await resposta.json();
        if (dados.status === "sucesso") {
            let dadosResp = "";
            dados.tempos.forEach(element => {
                dadosResp += `<div class="cardResp">
                <img src="${element.imagem}">
                <div class="infoReceita">
                <h2>${element.nome_receita}</h2>
                <p><strong>Ingredientes:</strong></p>
                <p>${element.ingredientes}</p>
                <p><strong>Tempo de preparo:</strong> ${element.tempo_preparo} min</p>
                <p><strong>Categoria:</strong> ${element.nome_categoria}</p>
                </div> 
            </div>`;
            });
            document.getElementById("resultadoTempo").innerHTML = `${dadosResp}`;
        } else {
            document.getElementById("resultadoTempo").innerHTML = `<div class= "respErrado">Deu problema!</div>`;
        }
    } catch {
        console.error('erro:', erro);
        document.getElementById("resultadoTempo").innerHTML = `<div class= "respErrado">Deu erro no servidor</div>`;
    }
}