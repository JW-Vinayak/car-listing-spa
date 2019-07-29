import React from "react";
import { fetchColors } from "../../../utils/api";
import PropTypes from "prop-types";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetchColors()
      .then(colors => {
        this.setState({
          colors: colors
        });
      })
      .catch(e => {
        this.setState({
          error: true
        });
      });
  }

  handleChange(event) {
    let newColor = event.target.value;
    this.props.onChange(newColor);
  }

  render() {
    if (this.state.error) {
      throw new Error();
    }
    return (
      this.state.colors && (
        <select
          className="filter-dropdown"
          onChange={e => this.handleChange(e)}
          value={this.props.color}
        >
          <option name="default" value="">
            All car colors
          </option>
          {this.state.colors.map((color, index) => {
            return (
              <option name={color} value={color} key={index}>
                {color}
              </option>
            );
          })}
        </select>
      )
    );
  }
}

Color.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Color;
