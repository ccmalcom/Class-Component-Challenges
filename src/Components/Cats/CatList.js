import React, { Component } from 'react';

class CatList extends Component {
  render(){
    return (
      <div>
        <h2>Cat Breeds</h2>
        <hr />
      {this.props.breeds.map((cat) =>{
        return <Cats passingCat={cat} />
      })}
    </div>
  )
}
}

const Cats = (props) =>{
  return(
    <div>
      <h5>{props.passingCat}</h5>
    </div>
  )
}

export default CatList;
