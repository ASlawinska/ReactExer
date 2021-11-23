class ShoppingList extends React.Component {
  state = {
    items1: 'ogorki',
    items2: 'sok',
    items3: 'chleb'
  } 
    /*to co w state zmienia sie dynamicznie*/
    /*komponent nadrzedny */
  render() {
    return(
      <>
      <h1>Lista zakupów</h1>
      <ul>
        <ItemList name={this.state.items1}/>
        <ItemList name={this.state.items2}/>
        <ItemList name={this.state.items3}/>
      </ul>
      </>
    )
  }
}
//komponent funkcyjny dziecka 
// const ItemList = (props) => {
//   return(
//     <li>{props.name}</li>
//   )
// }

//komponent klasowy dziecka, w tym wypadku konieczne użycie this do props! 
class ItemList extends React.Component{
  render () {
    return(
      <li>{this.props.name}</li>
    )
  }
}


ReactDOM.render(<ShoppingList />, document.getElementById('root'))