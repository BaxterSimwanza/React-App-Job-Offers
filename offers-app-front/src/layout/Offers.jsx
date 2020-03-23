import React, { /*useState,*/ useEffect } from "react";
import { connect } from "react-redux"

function Offers(props) {

  //const [ offers, setOffers ] = useState([])

  useEffect(()=>{
    props.getAllPosts()
  })

  return (
    <div>
      <h3>Offers</h3>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>{
 return{
  getAllPosts : () => dispatch({type: "GET_ALL_POST"})
 }
}

const mapStateToProps = (state)=>{
  return state
}

export default connect (mapStateToProps, mapDispatchToProps)(Offers)
