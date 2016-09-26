import React from "react";

class Product extends React.Component{
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  hasWatermark: React.PropTypes.bool,
  producer: React.PropTypes.string,
  color: React.PropTypes.oneOf(["white", "eggshell-white", "salmon"]).isRequired,
  weight: function(props, propName){
    const weight= props[propName]

    if (weight===undefined){
      return new Error("weight is undefined")
    }
     if (typeof weight!=="number"){
      return new Error("not a number")
    }
     if (weight < 80 || weight > 300){
      return new Error("wrong weight number")
    }
  }
}

// function weightCheck(props, weight, product){
//     let weightValue = props[weight]
//       if (!typeof weightValue === 'number'){
//         if(!weightValue > 80 && !weightValue < 300){
//           return new Error(weight + "is invalid")
//         }
//       }
//     return new Error("weight invalid")
// }

module.exports= Product
