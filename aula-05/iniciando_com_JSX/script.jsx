class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.timerID = null

    this.state = {
      date: new Date(),
      clockName: "Clock"
    }
  }

  componentDidMount() {
    console.log("Clock", "Sempre que o componente for montado")
    this.timerID = setInterval(() => this.tickTak(), 1000)
  }

  componentWillUnmount() {
    console.log("Clock", "Sempre que o componente for desmontado")
    clearInterval(this.timerID)
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log(nextState.clockName, this.state.clockName)
    return nextState.clockName !== this.state.clockName
  }

  tickTak() {
    this.setState({
      date: new Date()
    })
  }

  changeClockName(name) {
    this.setState({ ...this.state, clockName: name })
  }

  render() {
    return (
      <div>
        <h1>The {this.state.clockName}</h1>
        <h2>Now is: {this.state.date.toLocaleString()}</h2>
        <input type="text" onChange={e => this.changeClockName(e.target.value)} value={this.state.clockName} />
      </div>
    )
  }
}

// children;
function App() {
  const [showClock, setShowClock] = React.useState(false)

  React.useEffect(() => {
    // console.log("App","Sempre que o componente for montado")
  })

  React.useEffect(() => {
    // console.log("App","Na primeira vez que o componente é montado")
  }, [])

  React.useEffect(() => {
    // console.log("App","Sempre que uma das variaveis do array no segundo argumento mudar")
  }, [showClock])

  return (
    <main>
      {
        showClock ? 
          <Clock></Clock> :
          null
      }
      <button onClick={() => setShowClock(!showClock)}>Show Clock?</button> 
    </main>
  );
}

ReactDOM.render(
  <App />, // 1º argumento
  window.app // 2º argumento
);
