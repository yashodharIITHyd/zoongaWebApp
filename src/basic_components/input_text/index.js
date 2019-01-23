import React, {Component} from 'react';

const defaultProps = {
    type: 'text',
    defaultValue: '',
    style: {},
    className: '',
    placeholder: ''
  };

export default class InputText extends Component{
  static defaultProps = defaultProps

  onChange = (value) => {

  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.defaultValue !== this.props.defaultValue
  }

  render(){
    const onChange = this.props.onChange || this.onChange;

    let
      props = defaultProps;

    for(let key in defaultProps){
      if (key in this.props){
        props[key] = this.props[key];
      }
    }

    return(
      <input {...props} onChange={event => { onChange(event.target.value)}}/>
    )
  }
}