class App extends React.Component {
  state = {
    text: ""
  }
  // stary sposób przekazania state
  //constructor(props) {
    //super(props); dziedziczymy po react.component, musimy zachować parametr props
    //this.state ={
      //text =""
    //}
  //}
  handleClick(){
    // deklaracja metody zamiast funkcji strzałkowej
    //to nie zadziała 
    // this.state.text += 'a'
    //clg(this.state.text)<- zmiania stan w konsoli, nie wywołyje metody render,
    const letter = 'a'

    // bezpośrednie wywołanie 
    // this.setState({
    //   text:this.state.text + letter
    // })

    // funkcja z prevState, asynchroniczna , pozwalająca zachować stan poprzedni! 
    this.setState((prevState) => {
      return {
      text:this.prevState.text + letter
    }})
    // użycie metody setState gwarantuje wywołanie render, zmiania się warstwa abstrakcji
    //gdy mamy metodę, problem z przypisaniem this musimy użyc this jeżeli mamy metodę zamiast f. strzałkowej
  }
  render() {
    return (
      <>
      <button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>
      <h1>{this.state.text}</h1>
      </>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))