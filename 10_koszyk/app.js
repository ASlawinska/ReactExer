class App extends React.Component {
    state={
        avaliableProducts: 7,
    }
    render() {
        return(
            <>
                <button disabled>-</button>
                <span> 0 </span>
                <button>+</button>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))