class Messege extends React.Component{
  // state ={
  //   value: 'pokaż'
  // }
  constructor(props) {
    super(props);
    this.state = {
      massegeIsActive: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      massegeIsActive: !this.state.massegeIsActive
    })
  }
  render(){
    console.log(this.state.massegeIsActive);
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quis non fuga magnam quia harum voluptatibus eveniet repellat deleniti mollitia cum vitae reprehenderit error molestias dolores porro, dignissimos suscipit repellendus'
    return(
      <>
        <button onClick={this.handleClick}>
          {this.state.massegeIsActive ? 'ukryj': 'pokaż'}
        </button>
        {this.state.massegeIsActive ? <p>{text}</p> : null}
        {this.state.massegeIsActive && <p>{text}</p>}
        {/* <h1>{this.state.massegeIsActive && text}</h1> */}
      </>
    )
  }
}
ReactDOM.render(<Messege/>, document.getElementById('root'))