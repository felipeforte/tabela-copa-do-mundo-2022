//Inicialização
		const paises = ["Catar", "Equador", "Holanda", "Senegal", 
		"Estados Unidos", "Inglaterra", "Irã", "País de Gales", 
		"Argentina", "Arábia Saudita", "México", "Polônia", 
		"Austrália", "Dinamarca", "França", "Tunísia", 
		"Alemanha", "Costa Rica", "Espanha", "Japão",
		"Bélgica", "Canadá", "Croácia", "Marrocos",
		"Brasil", "Camarões", "Suíça", "Sérvia",
		"Coreia do Sul", "Gana", "Portugal", "Uruguai"];
		
		var selecoes = [];
		for (i=0;i<paises.length;i++) {
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
			if (i<4) {
				selecoes[i].grupo = "A";
			} else if (i>3 && i<8) {
				selecoes[i].grupo = "B";
			} else if (i>7 && i<12) {
				selecoes[i].grupo = "C";
			} else if (i>11 && i<16) {
				selecoes[i].grupo = "D";
			} else if (i>15 && i<20) {
				selecoes[i].grupo = "E";
			} else if (i>19 && i<24) {
				selecoes[i].grupo = "F";
			} else if (i>23 && i<28) {
				selecoes[i].grupo = "G";
			} else if (i>27 && i<32) {
				selecoes[i].grupo = "H";
			}
		}
		for (i=0;i<selecoes.length;i++) {
			console.log(`País: ${selecoes[i].nome}
		Grupo: ${selecoes[i].grupo}
		Gols: ${selecoes[i].gols}`);
		}

		
		for (i=0;i<selecoes.length;i++) {
			if (selecoes[i].grupo == "A") {
				var tabela = document.getElementById("tabela-ga");
				var cabeçalho = document.getElementById("hgA");
			} else if (selecoes[i].grupo == "B") {
				var tabela = document.getElementById("tabela-gb");
				var cabeçalho = document.getElementById("hgB");
			} else if (selecoes[i].grupo == "C") {
				var tabela = document.getElementById("tabela-gc");
				var cabeçalho = document.getElementById("hgC");
			} else if (selecoes[i].grupo == "D") {
				var tabela = document.getElementById("tabela-gd");
				var cabeçalho = document.getElementById("hgD");
			} else if (selecoes[i].grupo == "E") {
				var tabela = document.getElementById("tabela-ge");
				var cabeçalho = document.getElementById("hgE");
			} else if (selecoes[i].grupo == "F") {
				var tabela = document.getElementById("tabela-gf");
				var cabeçalho = document.getElementById("hgF");
			} else if (selecoes[i].grupo == "G") {
				var tabela = document.getElementById("tabela-gg");
				var cabeçalho = document.getElementById("hgG");
			} else if (selecoes[i].grupo == "H") {
				var tabela = document.getElementById("tabela-gh");
				var cabeçalho = document.getElementById("hgH");
			}
			var tr = document.createElement("tr");
			tr.innerHTML = `<td>${selecoes[i].nome}</td>
			<td>${selecoes[i].jogos}</td>
			<td>${selecoes[i].vit}</td>
			<td>${selecoes[i].der}</td>
			<td>${selecoes[i].emp}</td>
			<td>${selecoes[i].gols}</td>
			<td>${selecoes[i].saldo}</td>
			<td>${selecoes[i].pontos}</td>`;
			tabela.append(tr);
			if (i%4 === 0) {
				var n = i+4;
			}
		}
		
		
		
		
		const G = ["gA", "gB", "gC", "gD", "gE", "gF", "gG", "gH"];
		const gA = ["Catar", "Equador", "Holanda", "Senegal"];
		const gB = ["Estados Unidos", "Inglaterra", "Irã", "País de Gales"];
		const gC = ["Argentina", "Arábia Saudita", "México", "Polônia"];
		const gD = ["Austrália", "Dinamarca", "França", "Tunísia"];
		const gE = ["Alemanha", "Costa Rica", "Espanha", "Japão"];
		const gF = ["Bélgica", "Canadá", "Croácia", "Marrocos"];
		const gG = ["Brasil", "Camarões", "Suíça", "Sérvia"];
		const gH = ["Coreia do Sul", "Gana", "Portugal", "Uruguai"];
		
		function enter(event) {
			var d = document.getElementById('textbox');
			if (event.keyCode == 13) {
				document.write(result)
				console.log("Enter key is pressed");
			}
		}
