import React from "react";
import { fetchColors } from "../../../utils/api";
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
    fetchColors().then(colors => {
      console.log("received colors", colors);
      this.setState({
        colors: colors
      });
    })
    .catch(e => {
      console.log('error in color', e);
      this.setState({
        error: true
      })
    })
  }

  handleChange(event) {
    console.log("log value", event.target.value);
    let newColor = event.target.value;
    this.props.onChange(newColor);
  }

  render() {
    if (this.state.error){
      throw new Error();
    }
    return (
      this.state.colors && (
        <select
          className="filter-dropdown"
          onChange={e => this.handleChange(e)}
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

// const Color = (props) => {
//     let { color, setColor, colors } = props;
//     let [currentColor, setCurrentColor] = useState('')
//     function handleChange(event) {
//         console.log('log value', event.target.value);
//         setColor(event.target.value);
//         setCurrentColor(event.target.value);
//     }
//     useEffect(() => {
//         console.log('fetching colors')
//         fetchColors().then(list => {
//          color
//         });

//     }, [color])

//         let  { error, loading, colors } = props;

//   }

export default Color;
