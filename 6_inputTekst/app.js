class App extends React.Component {
  state = {
    value: ""
  }
  handleInputChange(e){
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    })
  }
  // uwaga na zmianę stanu, dopiero po 2 wywołaniu render, value przez setState zmienia się.
  // resetowanie wartości value
  handleResetClick = () => {
    this.setState({
      value: ""
    })
  }
  render() {
    return (
      <>
        <input value={this.state.value} placeholder="wpisz..." onChange={this.handleInputChange.bind(this)} type="text" />
        <button onClick={this.handleResetClick}>Reset</button>

        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </>
    )
  }
}
// zamiast binda można zrobić funkcje strzalkową zamiast handleInputChange
ReactDOM.render(<App />, document.getElementById('root'))