class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const onClick = () =>
      this.setState((oldState) => ({ count: oldState.count + 1 }));
    const button = React.createElement("button", { onClick }, "Adicionar + 1");
    const msg = `Count value is: ${this.state.count}`;
    return React.createElement("div", { className: "counter" }, button, msg);
  }
}

function CounterFn() {
  const [count, setCount] = React.useState(0);
  const onClick = () => setCount((oldCount) => oldCount + 1);
  const button = React.createElement("button", { onClick }, "Adicionar + 1");
  const msg = `Count value is: ${count}`;
  return React.createElement("div", { className: "counter" }, button, msg);
}

ReactDOM.render(
  React.createElement(CounterFn), // 1º argumento
  window.app // 2º argumento
);
