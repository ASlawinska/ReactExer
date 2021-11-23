// komponent funkcyjny, bezstanowy 
const Header = () => {
    return <h1> Witaj na stronie</h1>
}
//komponent klasowy, stanowy 
class Blog extends React.Component {
    render() {
        return(
            <section>
                <h2>Artykuł</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel pariatur tempore, quos cupiditate numquam dolores ut provident. Porro delectus ipsa officiis veritatis numquam in itaque odio! Hic nulla corrupti architecto.</p>
            </section>
        )}
}
const App = () => {
    return (
        <>
            <Header />
            <Blog />
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))