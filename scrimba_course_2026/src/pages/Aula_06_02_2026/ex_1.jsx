import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
import logo from "./react-logo.png";
/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
    
    
    Desafio:

Parte 2:
- Adicione um elemento `<header>` com um elemento `<img />` com a imagem do 
  logotipo do React dentro (src=“react-logo.png”) e certifique-se de definir a 
  largura para algo mais gerenciável, para que não ocupe toda a tela.
  Além disso, como sempre, você deve incluir algum texto alternativo na imagem.
  
- Adicione um `<h1>` com algum texto que descreva a página. (Por exemplo, "Razões pelas quais
  estou animado para aprender React"). Coloque-o acima da lista ordenada e, em seguida, envolva
  o `<h1>` e o `<ol>` dentro de um elemento `<main>` para manter a nossa estrutura semântica
  fluindo bem.
- Adicione um `<footer>` após a lista que diga: 
    “© 20xx <sobrenome aqui> desenvolvimento. Todos os direitos reservados.”

 */

function Page() {
    return <div>
            <header>
                <img src={logo} width={50}/>
            </header>
            <main>
                <h1>Razões pelas quais estou animado para aprender React</h1>
                <ol>
                    <li>React is a popular library, so I will be able to
                    fit in w ith all the coolest devs out there! 😎</li>
                    <li>I am more likely to get a job as a front end developer
                    if I know React</li>
                </ol>
        </main>
        <footer>
            <p>© 2026 sousa desenvolvimento. Todos os direitos reservados.</p>
        </footer>
    </div> 
}

root.render(
    <Page />
)
