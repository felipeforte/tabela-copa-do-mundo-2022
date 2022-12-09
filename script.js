//Inicialização do vetor paises com todos os países ordenados do grupo A ao grupo H
const paises = ["Catar", "Equador", "Holanda", "Senegal", 
"Estados Unidos", "Inglaterra", "Irã", "País de Gales", 
"Argentina", "Arábia Saudita", "México", "Polônia", 
"Austrália", "Dinamarca", "França", "Tunísia", 
"Alemanha", "Costa Rica", "Espanha", "Japão",
"Bélgica", "Canadá", "Croácia", "Marrocos",
"Brasil", "Camarões", "Suíça", "Sérvia",
"Coreia do Sul", "Gana", "Portugal", "Uruguai"];

// Inicializando o vetor grupos com strings contendo o nome dos grupos
const grupos = ["A","B", "C","D", "E","F", "G","H"]

// Inicializando dados dos jogos
var jogo = []
for (i=0;i<100;i++) {
	jogo[i] = {
		time1: 0,
		time2: 0,
		vit1: false,
		vit2: false,
		partida: false
	}
}

//Inicializando vetor "selecoes" contendo cada país organizado em índices
var selecoes = [];
var n = 0;
for (i=0;i<paises.length;i++) {
	//Inicializando objetos contendo dados de gols, pontos, etc. para cada país dentro do vetor "selecoes"
	selecoes[i] = {
			nome: paises[i],
			grupo: '',
			pontos: 0,
			saldo: 0,
			gols: 0,
			vit: 0,
			der: 0,
			emp: 0,
			jogos: 0
		}
	// Inicializando o grupo das seleções
	selecoes[i].grupo = grupos[n];
	if (i>0 && i%4 == 0) {
		n += 1;
		selecoes[i].grupo = grupos[n];
	}
}

//Função para atualizar tabela baseada no grupo
function atualizarTabela(grupo) {
	var tabela = document.getElementById(`tabela-g${grupo}`)
	tabela.innerHTML = "";
	for (let x of selecoes) {
		if (x.grupo == grupo) {
			var tr = document.createElement("tr");
			tr.innerHTML = `<td>${x.nome}</td>
			<td>${x.jogos}</td>
			<td>${x.vit}</td>
			<td>${x.der}</td>
			<td>${x.emp}</td>
			<td>${x.gols}</td>
			<td>${x.saldo}</td>
			<td>${x.pontos}</td>`;
			tabela.append(tr);
		}
	}
}
// Inicializando todas as tabelas
for (i=0;i<grupos.length;i++) {
atualizarTabela(grupos[i]);
}

function enter(event) {
	var d = document.getElementById('textbox');
	if (event.keyCode == 13) {
		document.write(result)
		console.log("Enter key is pressed");
	}
}
// Função para receber dados dos inputs e apresentá-los na tabela
function comparar(id1, id2, time1, time2, i) {
	if(id1.value == "" || id2.value == ""){
		return;
	}
	var valorid1 = parseInt(id1.value);
	var valorid2 = parseInt(id2.value);
	
	// Verifica se há uma partida registrada
	if (jogo[i].partida) {
		// Apaga dados existentes
		time1.gols -= jogo[i].time1;
		time2.gols -= jogo[i].time2;
		time1.saldo -= (jogo[i].time1 - jogo[i].time2);
		time2.saldo -= (jogo[i].time2 - jogo[i].time1);
		jogo[i].time1 = 0;
		jogo[i].time2 = 0;
		if (jogo[i].vit1) {
			time1.vit -= 1;
			time2.der -= 1;
			jogo[i].vit1 = false;
		} else if (jogo[i].vit2) {
			time1.der -= 1;
			time2.vit -= 1;
			jogo[i].vit2 = false;
		} else {
			time1.emp -= 1;
			time2.emp -= 1;
		}
		// Inicializa dados novos
		time1.gols += valorid1;
		time2.gols += valorid2;
		jogo[i].time1 = valorid1;
		jogo[i].time2 = valorid2;
		if (valorid1 > valorid2) {
			time1.vit += 1;
			time2.der += 1;
			jogo[i].vit1 = true;
		} else if (valorid2 > valorid1) {
			time1.der += 1;
			time2.vit += 1;
			jogo[i].vit2 = true;
		} else {
			time1.emp += 1;
			time2.emp += 1;
		}
		time1.saldo += (valorid1 - valorid2)
		time2.saldo += (valorid2 - valorid1)
	// Em caso de não haver partida registrada, inicializa dados
	} else {
		time1.gols += valorid1;
		time2.gols += valorid2;
		time1.saldo += (valorid1 - valorid2)
		time2.saldo += (valorid2 - valorid1)
		time1.jogos += 1;
		time2.jogos += 1;
		jogo[i].time1 = valorid1;
		jogo[i].time2 = valorid2;
		if (valorid1 > valorid2) {
			time1.vit += 1;
			time2.der += 1;
			jogo[i].vit1 = true;
		} else if (valorid2 > valorid1) {
			time1.der += 1;
			time2.vit += 1;
			jogo[i].vit2 = true;
		} else {
			time1.emp += 1;
			time2.emp += 1;
		}
		jogo[i].partida = true;
	}
	// Atualiza tabela dos grupos
	atualizarTabela(time1.grupo);
	atualizarTabela(time2.grupo);
}
