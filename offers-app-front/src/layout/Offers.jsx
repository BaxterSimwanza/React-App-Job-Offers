import React, { /*useState,*/ useEffect } from "react";
import { connect } from "react-redux"

function Offers(props) {

  //const [ offers, setOffers ] = useState([])

  useEffect(()=>{
    console.log(props)
  })

  return (
    <div>
      <h3>Offers</h3>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return state.posts
}

export default connect (mapStateToProps)(Offers)
