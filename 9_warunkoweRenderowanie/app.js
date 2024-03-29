// Stworzenie jednego komponentu funkcyjnego do wyświetlania wiadomości
const VallidationMessage = (props) => <p>{props.txt}</p> 
// const PositiveMessage = () => <h3>Możesz obejrzeć ten film</h3>;
// const NegativeMessege = () => <h2>Nie możesz obejrzeć tego filmu! </h2>

//component funkcyjny, formularz
const OrderForm = (props) => {
  return (
  <form onSubmit ={props.submit} action="">
    <input type="checkbox" id="age" onChange={props.change} checked={props.checked} />
    <label htmlFor="age">Mam co najmniej 16 lat</label>
    <br />
    <button type="submit">Kup bilet</button>
  </form>
  )
} 
// główny komponent klasowy
class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubbmited: false
  }
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubbmited: false,
    })
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    if (!this.state.isFormSubbmited){
      this.setState({
        isFormSubbmited: true
    })}
  }
  displayMessege = () => {
    if(this.state.isFormSubbmited){
      if(this.state.isConfirmed) {
        return <VallidationMessage txt="Możesz obejrzeć ten film" />
      } else {
        return <VallidationMessage txt="Nie możesz obejrzeć tego filmu!" />
      }
    } else {
      return null
    }
  }
  render() {
    return (
      <>
        <h1>Kup bilet na horror!</h1>
        <OrderForm 
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={this.state.isConfirmed}
        />
        {this.displayMessege()}
      </>
    )
  }
}
ReactDOM.render(<TicketShop/>, document.getElementById("root"))