const PositiveMessage = () => <h3>Możesz obejrzeć ten film</h3>;
const NegativeMessege = () => <h2>Nie możesz obejrzeć tego filmu! </h2>

class TicketShop extends React.Component {
  state = {
    isConfirmed: false
  }
  handleCheckbosChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed
    })
  }
  displayMessege = () => {
    if(this.state.isConfirmed) {
      return <PositiveMessage />
    } else {
      return <NegativeMessege />
    }
  }
  render() {
    return (
      <>
        <h1>Kup bilet na horror!</h1>
        <form action="">
          <input type="checkbox" id="age" onChange={this.handleCheckbosChange}checked={this.state.isConfirmed} />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button>Kup bilet</button>
        </form>
        {this.displayMessege}
      </>
    )
  }
}
ReactDOM.render(<TicketShop/>, document.getElementById("root"))