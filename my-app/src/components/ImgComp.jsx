import { Component } from 'react'
export default class ImgComp extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
               <img src= {this.props.img} alt={this.props.alt}></img>
            </div>
        )
    }
}