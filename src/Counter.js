class Counter extends React.Component {
  constructor() {
    super();

    this.mountText=React.createRef();
    this.updateText=React.createRef();
    this.valueText=React.createRef();
  }

  componentDidMount(){
      this.mountText.current.innerHTML="TRUE";
  };
  componentDidUpdate(prevprops,prevstate){
      console.log(this.props.counterval)

    this.updateText.current.innerHTML=prevprops.counterval;
    this.valueText.current.innerHTML=this.props.counterval;

  };

  render() {
    return (
      <div className="Counter">
        <div className="grid-box">
          <p className="text">ChildDidMount </p>
          <p ref={this.mountText}>FALSE</p>
          <p className="text">Previous value(Counter) </p>
          <p ref={this.updateText}>FALSE</p>
          <p className="text">Value </p> <p ref={this.valueText}>0</p>
        </div>
      </div>
    );
  }
}
