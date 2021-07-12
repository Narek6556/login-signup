import { Component } from "react";
import Title from "./Title.jsx"

class Banner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="banner">
                <Title text={this.props.title}/>
            </div>
        );
    }
}

export default Banner;