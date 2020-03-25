import React, {/* useState,*/ useEffect } from "react";
import { connect } from "react-redux"
import Offer from "./Offer"

function Offers(props) {

  /*
  const [ offers, setOffers ] = useState([])

  const changeState = () =>{
    console.log("Posts inside component ", props.posts)
    setOffers(props.posts)
  }
  */

  useEffect(()=>{
    //changeState()
    props.getAllPosts()
    console.log("props.Posts inside useEffect ", props.state.posts)
  },[])

  return (
    <div>
      <h3>Offers</h3>

      {props.state.posts.map(post => (<Offer key= {post._id} post={post} />))}
      
    </div>
  );
}

const mapStateToProps = (state)=>{
  console.log("Posts mapStateToProps ", state)
  return {state}
}

const mapDispatchToProps = (dispatch)=>{
 return {
  getAllPosts : () => dispatch({type: "GET_ALL_POSTS"})
 }
}



export default connect (mapStateToProps, mapDispatchToProps)(Offers)
