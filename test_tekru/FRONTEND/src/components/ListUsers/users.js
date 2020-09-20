import React, { Component } from 'react'
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import deleteUser from "../../Redux/actions/actionUser"
import updateUser from "../../Redux/actions/actionUser"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Users = (props) => {
  const classes = useStyles();
  return (
    <div>
      {props.users.map(user =>
        <div style={{ display: 'flex' }}>
          <div style={{ margin: "1%" }}>{user.name}</div>
          <div style={{ margin: "1%" }}>{user.family_name}</div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={()=>props.deleteUser(props.user.id)}
          >
            Delete
      </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<EditIcon />}
            onClick={()=>props.updateUser(props.user.id,)}
          >
            Edit
      </Button>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = (state) => ({
  users: state.users.users
});
export default connect(mapStateToProps,{deleteUser,updateUser})(
  Users
);
