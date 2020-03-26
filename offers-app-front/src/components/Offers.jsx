import { GET_ALL_POSTS } from "../redux/actions/postsActions"
import React, { useEffect } from "react";
import { connect } from "react-redux"
import Offer from "./Offer"

function Offers(props) {

  useEffect(()=>{
    props.getAllPosts()
  },[])

  return (
    <div>
      <h3>{props.subTitle}</h3>
      {props.posts.map(post => <Offer key={post._id} post={post} />)}
    </div>
  );
}

const mapStateToProps = ({posts})=>{
  return {posts}
}

const mapDispatchToProps = (dispatch) => {
  return {
   getAllPosts : () => dispatch({ type: GET_ALL_POSTS })
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Offers)

