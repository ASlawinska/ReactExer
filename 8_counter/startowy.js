class Counter extends React.Component {
    state ={
      count: 0,
      result: this.props.result
    }
    handleMathClick(type, number){
      if(type === 'subtraction'){
        this.setState(prevState => ({
          count: prevState.count +1, 
          result: prevState.result - number
        }))
      }
      else if(type === 'addition'){
        this.setState(prevState => ({
          count: prevState.count +1, 
          result: prevState.result + number
        }))
      }
      else if (type === 'reset'){
        this.setState(prevState => ({
          count: prevState.count +1, 
          result: 0
        }))
      }
    }  
    render(){
        return(
        <>
        <button onClick={this.handleMathClick.bind(this, 'subtraction', 10)}>-10</button>
        <button onClick={this.handleMathClick.bind(this, 'subtraction', 1)}>-1</button>
        {/* <button onClick=() => this.handleMathClick('subtraction', 1)}>-1</button> */}
        <button onClick={this.handleMathClick.bind(this, 'reset')}>Reset</button>
        <button onClick={this.handleMathClick.bind(this, 'addition', 1)}>+1</button>
        <button onClick={this.handleMathClick.bind(this, 'addition', 10)}>+10</button>
        <h1>Liczba kliknięć:{this.state.count}</h1>
        <h1>Wynik:{this.state.result}</h1>
        </>
        )
    }
    }
    //przkazanie zminnej startowej 
    // można stworzyć zmienną dosatkową 
    // można przekazać jako atrubut - liczby w {}
    // konieczne w state odwołanie do propsow
    //ReactDOM.render(<Counter result={2}/>, document.getElementById('root'))