class Counter extends React.Component {
state ={
  count: 0,
  result: this.props.result
}
handleMathClick = (type, number) => {
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
      <MathButton 
      name ='-10'
      type ='subtraction'
      number ='10'
      click={this.handleMathClick}
      />
      <MathButton 
      name ='-1'
      type ='subtraction'
      number ='1'
      click={this.handleMathClick}
      />
      <MathButton 
      name ='Reset'
      type ='reset'
      click={this.handleMathClick}
      />
      <MathButton 
      name ='+1'
      type ='addition'
      number ='1'
      click={this.handleMathClick}
      />
      <MathButton 
      name ='+10'
      type ='addition'
      number ='10'
      click={this.handleMathClick}
      />
      <ResultPanel
        count={this.state.count}
        result={this.state.result}
        />
    </>
  )
}
}

const MathButton = (props) => {
  const number = parseInt(props.number)
  return(
  <button onClick={() => props.click(props.type, number)}>{props.name}</button>
  )
}
const ResultPanel = (props) => {
  return (
    <>
      <h1>Liczba kliknięć: {props.count}</h1>
      <h1>Wynik: {props.result}</h1>
    </>
  )
}
const startValue = 0
ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root'))