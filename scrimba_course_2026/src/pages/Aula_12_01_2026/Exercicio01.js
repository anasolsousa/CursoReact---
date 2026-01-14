
// IMPERATIVE -> DESCREVER TUDO PASSO A PASSO - JAVASCRIPT

// Create a new h1 element (createElement)

// document.createElement("h1") - cria um elemento do tipo h1
const newH1 = document.createElement("h1");

// Procura na página HTML um elemento que tenha id="root"
const root = document.getElementById("root");

// Give it some textContent
// .textContent → É uma propriedade que define o texto dentro do elemento
newH1.textContent = ("Este o texto que criei para o meu elemento h1");

// - Give it a class name of "header"
// .className → É uma propriedade que define a classe CSS do elemento
// Estás a dar ao h1 a classe "header", como se escrevesses <h1 class="header">
newH1.className = "header";

// - append it as a child (using `appendChild`) of the div#root
// .appendChild() → É um método que adiciona um elemento como filho de outro
root.appendChild(newH1);

/*
    O resultado final no HTML seria algo como:

    <div id="root">
    <h1 class="header">Este o texto que criei para o meu elemento h1</h1>
    </div>
*/