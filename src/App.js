// Here the counter value should be displayed and the Counter.js is like backend updating on request from Parent (App.js).
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.mountText=React.createRef();
    this.updateText=React.createRef();
    this.valueText=React.createRef();
    this.result=React.createRef();
  }

  componentDidMount(){
    this.mountText.current.innerHTML="TRUE";
  };
  componentDidUpdate(prevProps, prevState){
    this.updateText.current.innerHTML=prevState.counter;
    this.result.current.innerHTML=this.state.counter;
    this.valueText.current.innerHTML=this.state.counter;
  };


  increment = ()=>{
    this.setState((prevState) => (
        
        
        { 
        counter: prevState.counter + 1,
     }))

     

  }
  decrement = ()=>{
    this.setState((prevState) => ({ 
        counter: prevState.counter - 1
     }))
  }

  render() {
    return (
      <div className="App">
        <div className="res">
          {" "}
          <button onClick={this.decrement}>-</button> <p ref={this.result}>0</p> <button onClick={this.increment}>+</button>{" "}
        </div>

        <div className="grid-box">
          <p className="text">ParentDidMount </p>
          <p ref={this.mountText}>FALSE</p>
          <p className="text">Previous value(App)</p>
          <p ref={this.updateText}>FALSE</p>
          <p className="text">Value </p> <p ref={this.valueText}>0</p>
        </div>

        <hr />

        <Counter counterval={this.state.counter} />
      </div>
    );
  }
}
