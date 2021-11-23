//komponet funkcyjny, bestanowy
// najczęściej dopisana funcja strzałkowa, zazwyczaj nazwa dużą literą- bo później tworzymy instancję
const App1 = () => {
  return (
    <div>
      <h1>Pierwszy komponent</h1>
    </div>
  )
}
// komponent klasowy, stanowy, dziedziczymy po klasie react, wymaga metody render!
class App2 extends React.Component {
  state = {
    number: 0
  }
  render() {
    <section>
      <h2>Komponent klasowy</h2>
    </section>
  }
}


// renderujemy zazwyczaj jeden główny komponent, pozostałe komponenty są zagniezdżone
//ReactDOM.render(<App1 />, document.getElementById('root'))
//tutaj musimy wielką literą napisać!, tak aby rozpoznać komponent, stąd w definicji również 
//ReactDOM.render(<App2/>, document.getElementById('root'))