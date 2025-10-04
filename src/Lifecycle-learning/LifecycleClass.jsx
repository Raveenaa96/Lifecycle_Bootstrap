import { Component } from "react";

export class LifecycleClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
        console.log("1.Constructor")
    }
    // componentDidMount() {
    //      console.log("2.didMount")
    // }
    // componentDidUpdate() {
    //      console.log("3.didUpdate")
    // }
    // componentWillUnmount() {
    //      console.log("4.willUnmount")
    // }
    render() {
        console.log("5.render")
        return <div>
            <div className="heading">
                <h1>Class Component Life Cycle</h1>
            </div>
            <div className="counter">
        <p>count:{this.state.count}</p>
        <button className="btn btn-primary" onClick={this.setState({count:this.state.count+1})}>ADD</button>
            </div>
        </div>
    }
}