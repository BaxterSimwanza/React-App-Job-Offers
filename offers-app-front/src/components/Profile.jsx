import { GET_USER } from "../redux/actions/usersActions";
import React, { useEffect } from "react";
import { connect } from "react-redux"

function Profile(props) {

    useEffect(()=>{
        props.getUser()
    }, [])

    return (
        <div>
            <h3>Profile</h3>
            {props.users.map(user => <h5>{user.name}</h5>)}
        </div>
    )
}

const mapStateToProps = ({users}) => {
    return {users}
}

const mapDispatchToProps = (dispatch) => {
    return {
      getUser : () => dispatch({ type : GET_USER })
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Profile)
