/* 

------------------------------------------------------------------------------------------------------------
1. Where does React put all of the elements I create in JSX when I 
call `root.render()`?
PT - Onde o React coloca todos os elementos que eu crio em JSX quando chamo `root.render()`?

Coloca no ficheiro html na tag do id Root. 

------------------------------------------------------------------------------------------------------------
2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
PT - O que apareceria no meu console se eu executasse esta linha de código:

aprarece:
<h1>Hello world!</h1>


------------------------------------------------------------------------------------------------------------
3. What's wrong with this code:
```
PT - O que há de errado com este código:

root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
tem que estar num tag única, so pode ter um child por exemplo:

root.render(
    <div>
        <h1>Hi there</h1>
        <p>This is my website!</p>
    </div>
)

------------------------------------------------------------------------------------------------------------
4. What does it mean for something to be "declarative" instead of "imperative"?
PT - O que significa algo ser "declarativo" em vez de "imperativo"?

- declarativo: não é necessarario explicar passo a passo ao sistema pois ele ja sabe, é so perciso focar no resultado final 

- imperativo: signifca que é perciso declarar, explicar passo a passo para o sistema saber

------------------------------------------------------------------------------------------------------------
5. What does it mean for something to be "composable"?
PT - O que significa algo ser "componível"?

Composable - é possivel usar o trecho de codigo varias partes do software


*/