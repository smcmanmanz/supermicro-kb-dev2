
import React from "react";


class SidebarCheckbox extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e){
    this.props.onFilterChange(e);
  }

  render(){
    return (
      <div className="sidebar">
        <header>
         {'Categories'}
        </header>
        {this.props.categories.map(category => (
          <li key={category}>
            <label>
              <input 
                onChange={this.handleChange}
                type="checkbox"
                value={category} />
              {category}
            </label>
          </li>
        ))}
      </div>
    );
  };
  
}
  export default SidebarCheckbox;