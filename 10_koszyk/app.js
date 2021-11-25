class App extends React.Component {
    state={
        avaliableProducts: 7,
        shoppingCard: 0,
    }
    handleRemoveFromCard = () => {
        this.setState({
            shoppingCard: this.state.shoppingCard -1
        })
    }
    handleAddToCard = () => {
        this.setState({
            shoppingCard: this.state.shoppingCard +1
        })
    }

    render() {
        return(
            <>
                <button disabled={this.state.shoppingCard ? false : true} onClick={this.handleRemoveFromCard}>-</button>
                <span>{this.state.shoppingCard}</span>
                <button disabled={this.state.shoppingCard === this.state.avaliableProducts ? true : false} onClick={this.handleAddToCard}>+</button>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))