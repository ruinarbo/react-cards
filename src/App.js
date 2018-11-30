import React, { Component } from 'react';
import './SamsungReactCard.css'
import logo from './yelp.png';
export default class SamsungReactCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <article className="card">
        <CardHeader image={'https://s3-media2.fl.yelpcdn.com/bphoto/NfeFZQXrvH5r051M3Lr3uA/o.jpg'}/>
        <CardBody title={'DishDash'} text={'190 S Murphy Ave Sunnyvale, CA 94086'}/>
      </article>
    )
  }
}
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
        <img className="logo" src={logo} alt="My logo" />
      </header>
    )
  }
}
class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="category"> Middle Eastern, Mediterranean</p> 
        <p className="body-title">{this.props.title}</p>
        <p className="body-content">{this.props.text}</p>
      </div>
    )
  }
}
class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Show more ...
      </button>
    )
  }
}

