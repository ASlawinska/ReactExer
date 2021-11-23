const PositiveMessage = () => <h3>Możesz obejrzeć ten film</h3>;
const NegativeMessege = () => <h2>Nie możesz obejrzeć tego filmu! </h2>

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
        return <PositiveMessage />
      } else {
        return <NegativeMessege />
      }
    } else {
      return null
    }
  }
  render() {
    return (
      <>
        <h1>Kup bilet na horror!</h1>
        <form onSubmit ={this.handleFormSubmit} action="">
          <input type="checkbox" id="age" onChange={this.handleCheckboxChange} checked={this.state.isConfirmed} />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {this.displayMessege()}
      </>
    )
  }
}
ReactDOM.render(<TicketShop/>, document.getElementById("root"))