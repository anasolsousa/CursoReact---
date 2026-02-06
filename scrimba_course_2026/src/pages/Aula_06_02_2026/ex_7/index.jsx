import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
import App from "./App.jsx"
/**
Challenge: Project setup

- Create an App component in a separate App.jsx file which is a sibling
  to this index.jsx file.
- Create a `components` folder
- Create the following components in separate files inside
  the components folder. In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Have App component import and render the Navbar and Main components
- Import and render the App component inside of index.jsx using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the `<links />` to those fonts ABOVE the style.css link in index.html.
  You may need to do some extra research to figure out how this 
  works if you haven't done it before.
*/
 
 /**
Desafio: Configuração do projeto

- Crie um componente App num ficheiro App.jsx separado, que é um irmão
  deste ficheiro index.jsx.✅
  
- Crie uma pasta `components`✅

- Crie os seguintes componentes em ficheiros separados dentro da
  pasta components. Em cada um deles, basta renderizar um `h1` 
  com o nome do componente (por exemplo, retorne <h1>Navbar goes here</h1>):
    - Navbar ✅
    - Main ✅
    
- Faça com que o componente App importe e renderize os componentes Navbar e Main ✅

- Importe e renderize o componente App dentro de index.jsx usando ReactDOM
    - Neste ponto, você deve ter seu “Navbar goes here” etc. aparecendo
      no mininavegador. ✅
      
- Vá para Google fonts e obtenha a fonte “Inter” com pesos 400, 600 e 700.
  Coloque o `<links />` para essas fontes ACIMA do link style.css em index.html.
  Pode ser necessário fazer alguma pesquisa extra para descobrir como isso 
  funciona, se você nunca fez isso antes.
  
*/
 
 
root.render(
    <App/>
)