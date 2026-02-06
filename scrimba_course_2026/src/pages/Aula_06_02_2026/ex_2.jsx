/*
1. What is a React component?
R: componente é uma parte do codigo que pode ser reutilizado e chamado em qualquer lugar

2. What's wrong with this code?
```
R: começar com letra maiuscula -> MyComponent()

function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())

É assim que se chama -> <Header/>

*/