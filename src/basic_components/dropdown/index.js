import React, {Component} from 'react';

export default class DropDown extends Component{
  static defaultProps = {
    headerClassName: 'dropdown',
    buttonClassName: 'btn btn-default dropdown-toggle'
  }

  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render(){
    const childrenElement =
      <ul className="dropdown-menu" style={{display: this.state.show ? 'block' : 'none'}}>
      {this.props.dropdownList.map( (element, index) =>
        <li key={index} onClick={(event) => {this.toggle();this.props.setIndex(index);}}>
          <a href="#">{element}</a>
        </li>
      )}
    </ul>

    let headerElement =
      <li className={this.props.headerClassName}>
        <a
          className={"dropdown-toggle"}
          onClick={this.toggle}
        >
          {this.props.innerComponent}
          {this.props.innerComponent2}
        </a>
        {childrenElement}
      </li>

    if(this.props.wrapElement === 'div'){
      headerElement =
        <div className={this.props.headerClassName}>
          <button
            className={this.props.buttonClassName}
            onClick={this.toggle}
            aria-expanded={"false"}
          >
            {this.props.innerComponent}
          </button>
          {childrenElement}
        </div>
    }
    return(
      headerElement
    )
  }
}