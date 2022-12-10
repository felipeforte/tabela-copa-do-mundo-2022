//InicializaÃ§Ã£o do vetor paises com todos os paÃ­ses ordenados do grupo A ao grupo H
const paises = ["Catar", "Equador", "Holanda", "Senegal", 
"Estados Unidos", "Inglaterra", "IrÃ£", "PaÃ­s de Gales", 
"Argentina", "ArÃ¡bia Saudita", "MÃ©xico", "PolÃ´nia", 
"AustrÃ¡lia", "Dinamarca", "FranÃ§a", "TunÃ­sia", 
"Alemanha", "Costa Rica", "Espanha", "JapÃ£o",
"BÃ©lgica", "CanadÃ¡", "CroÃ¡cia", "Marrocos",
"Brasil", "CamarÃµes", "SuÃ­Ã§a", "SÃ©rvia",
"Coreia do Sul", "Gana", "Portugal", "Uruguai"];

//InicializaÃ§Ã£o do vetor abrev com todos as abreviaÃ§Ãµes das seleÃ§Ãµes na ordem do vetor paises
const abrev = ["QAT", "ECU", "NED", "SEN",
"USA", "ENG", "IRN", "WAL",
"ARG", "KSA", "MEX", "POL",
"AUS", "DEN", "FRA", "TUN",
"GER", "CRC", "ESP", "JPN",
"BEL", "CAN", "CRO", "MAR",
"BRA", "CMR", "SUI", "SCG",
"KOR", "GHA", "POR", "URU"]

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

//Inicializando vetor "selecoes" para conter cada seleÃ§Ã£o organizada em Ã­ndices
var selecoes = [];

//Inicializando objetos contendo dados de gols, pontos, etc. para cada seleÃ§Ã£o dentro do vetor "selecoes"
var n = 0;
for (i=0;i<paises.length;i++) {
	selecoes[i] = {
			nome: paises[i],
			grupo: '',
			abrev: abrev[i],
			pontos: 0,
			saldo: 0,
			gols: 0,
			vit: 0,
			der: 0,
			emp: 0,
			jogos: 0
		}
	// Inicializando o grupo das seleÃ§Ãµes
	selecoes[i].grupo = grupos[n];
	if (i>0 && i%4 == 0) {
		n += 1;
		selecoes[i].grupo = grupos[n];
	}
}

// Script para inicializar as entradas dos placares
var n = 0;
var qj = 0;
for (i=0;i<selecoes.length;i++) {
	var cabeÃ§alho = document.getElementById(`hg${selecoes[i].grupo}`);
	// Cria uma tabela a cada 4 seleÃ§Ãµes (grupo) para conter 
	// a entrada dos placares e o nome dos times
	if (i%4 == 0) {
		var tabela = document.createElement("table");
		tabela.className = "jogos-rivais"
		tabela.id = `rivais${selecoes[i].grupo}`
		cabeÃ§alho.after(tabela);
		n += 4;
	}
	// Seleciona tabela recÃ©m-criada
	var tabela = document.getElementById(`rivais${selecoes[i].grupo}`);
	for (j=i+1;j<n;j++) {
		var tr = document.createElement("tr");

		var td1 = document.createElement("td");
		td1.innerHTML = `${selecoes[i].nome}`;
		var td2 = document.createElement("td");
		td2.innerHTML = `${selecoes[j].nome}`;
		
		// Inicializa inputs em HTML com ids para receber dados dos jogos, seleÃ§Ãµes, etc.
		var inputid1 = `${selecoes[i].abrev}x${selecoes[j].abrev}`;
		var inputid2 = `${selecoes[j].abrev}x${selecoes[i].abrev}`;
		var tdinput1 = document.createElement("td");
		var input1 = document.createElement("input");
		input1.setAttribute("type", "text");
		input1.setAttribute("class", "jogocaixa");
		input1.setAttribute("onkeypress", "return event.charCode >= 48 && event.charCode <= 57");
		input1.setAttribute("id", inputid1);
		input1.setAttribute("onkeyup", `comparar(${inputid1}, ${inputid2}, selecoes[${i}], selecoes[${j}], ${qj})`);
		tdinput1.append(input1);

		var tdinput2 = document.createElement("td");
		var input2 = document.createElement("input");
		input2.setAttribute("type", "text");
		input2.setAttribute("class", "jogocaixa");
		input2.setAttribute("onkeypress", "return event.charCode >= 48 && event.charCode <= 57");
		input2.setAttribute("id", inputid2);
		input2.setAttribute("onkeyup", `comparar(${inputid1}, ${inputid2}, selecoes[${i}], selecoes[${j}], ${qj})`);
		tdinput2.append(input2);
		
		qj += 1;
		
		tr.append(td1);
		tr.append(tdinput1);
		tr.append(" x ");
		tr.append(tdinput2);
		tr.append(td2);

		tabela.append(tr);
	}
	
}

//FunÃ§Ã£o para classificar gols, pontos, saldo
function classifcar(v1, v2, time1, time2, jogo, tipo) {
	if (tipo == "apagar") {
		tipo = -1;
		var cond1 = jogo.vit1;
		var cond2 = jogo.vit2;
		var x = false;
	} else {
		var cond1 = v1 > v2;
		var cond2 = v2 > v1;
		tipo = 1;
		var x = true;
	}	
	if (cond1) {
		time1.vit += 1*tipo;
		time1.pontos += 3*tipo;
		time2.der += 1*tipo;
		jogo.vit1 = true&&x;
	} else if (cond2) {
		time1.der += 1*tipo;
		time2.vit += 1*tipo;
		time2.pontos += 3*tipo;
		jogo.vit2 = true&&x;
	} else {
		time1.emp += 1*tipo;
		time1.pontos += 1*tipo;
		time2.emp += 1*tipo;
		time2.pontos += 1*tipo;
	}
}

//FunÃ§Ã£o para ordenar classificaÃ§Ã£o por grupos utilizando o vetor "vetorGrupo"
var vetorGrupo = [];
function ordenar(grupo) {
	g = 0;
	for (let x of selecoes) {
		if (x.grupo == grupo) {
			vetorGrupo[g] = x;
			g++;
		}
	}
	//Algoritmo bubble sort colocando os maiores valores no inÃ­cio do vetor
	for (i=0;i<vetorGrupo.length-1;i++) {
		for (j=0;j<vetorGrupo.length-1-i;j++) {
			if (vetorGrupo[j+1].pontos > vetorGrupo[j].pontos || vetorGrupo[j+1].pontos == vetorGrupo[j].pontos && vetorGrupo[j+1].saldo > vetorGrupo[j].saldo) {
				aux = vetorGrupo[j];
				vetorGrupo[j] = vetorGrupo[j+1];
				vetorGrupo[j+1] = aux;
			}
		}
	}
}

//FunÃ§Ã£o para atualizar tabela baseada no grupo
function atualizarTabela(grupo) {
	var tabela = document.getElementById(`tabela-g${grupo}`)
	tabela.innerHTML = "";
	ordenar(grupo);
	for (let x of vetorGrupo) {
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
// Inicializar todas as tabelas
for (let x of grupos) {
	atualizarTabela(x);
}

function enter(event) {
	var d = document.getElementById('textbox');
	if (event.keyCode == 13) {
		document.write(result)
		console.log("Enter key is pressed");
	}
}
// FunÃ§Ã£o para receber dados dos inputs e apresentÃ¡-los na tabela
function comparar(id1, id2, time1, time2, i) {
	if(id1.value == "" || id2.value == ""){
		return;
	}
	var valorid1 = parseInt(id1.value);
	var valorid2 = parseInt(id2.value);
	
	// Verifica se hÃ¡ uma partida registrada
	if (jogo[i].partida) {
		// Apaga dados existentes
		time1.gols -= jogo[i].time1;
		time2.gols -= jogo[i].time2;
		time1.saldo -= (jogo[i].time1 - jogo[i].time2);
		time2.saldo -= (jogo[i].time2 - jogo[i].time1);
		jogo[i].time1 = 0;
		jogo[i].time2 = 0;
		classifcar(0, 0, time1, time2, jogo[i], "apagar");
		
		// Inicializa dados novos
		time1.gols += valorid1;
		time2.gols += valorid2;
		time1.saldo += (valorid1 - valorid2);
		time2.saldo += (valorid2 - valorid1);
		jogo[i].time1 = valorid1;
		jogo[i].time2 = valorid2;
		classifcar(valorid1, valorid2, time1, time2, jogo[i], "inserir");

	// Em caso de nÃ£o haver partida registrada, inicializa dados
	} else {
		time1.gols += valorid1;
		time2.gols += valorid2;
		time1.saldo += (valorid1 - valorid2);
		time2.saldo += (valorid2 - valorid1);
		time1.jogos += 1;
		time2.jogos += 1;
		jogo[i].time1 = valorid1;
		jogo[i].time2 = valorid2;
		classifcar(valorid1, valorid2, time1, time2, jogo[i], "inserir");
		jogo[i].partida = true;
	}
	// Atualiza tabela do grupo
	atualizarTabela(time1.grupo);
}
