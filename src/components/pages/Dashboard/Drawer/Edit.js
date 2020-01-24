import React from 'react'
import { connect } from 'react-redux'
import { usersActions } from '../../../../actions'

import { Avatar, message } from 'antd'

class Edit extends React.Component {
  state = {
    id: '',
    name: '',
    age: '',
    salary: '',
    avatar: '',
    loaded: false
  }

  static getDerivedStateFromProps(props, state) {
    if (state.loaded === false) {
      return {
        id: props.user.id,
        name: props.user.employee_name,
        age: props.user.employee_age,
        salary: props.user.employee_salary,
        loaded: true
      }
    } else {
      return null
    }
  }

  componentDidMount() {
    message.info('Start editing user...')
  }

  componentWillUnmount() {
    this.isEdited && message.warn('Exit. Without changes...')
  }

  sendData = (e) => {
    e.preventDefault()

    this.props.sendRequestToUpdate(
      this.props.user.id,
      {
        id: this.state.id,
        employee_name: this.state.name,
        employee_salary: this.state.salary,
        employee_age: this.state.age,
        profile_image: "",
        gender: "male",
        costumAvatar: this.props.user.costumAvatar
      },

    )

    message
      .loading('Send request to update..', 2)
      .then(() => message.success('Update is finished', 4))
  }

  handleChange = (e) => {
    let key = e.target.name
    let value = e.target.value

    this.setState({
      [key]: value
    })
  }

  render() {
    const { updating, user } = this.props
    const { name, age, salary } = this.state

    return (
      <div className="user-account-edit">
        <Avatar src={user.costumAvatar} />
        <form className="form-container" onSubmit={this.sendData}>
          <label className="form-label">
            <div className="form-label-text">
              <span>Name</span>
            </div>
            <div className="form-label-input">
              <input
                type="text"
                className="form-input"
                name="name"
                onChange={this.handleChange}
                value={name}
              />
            </div>
          </label>
          <label className="form-label">
            <div className="form-label-text">
              <span>Age</span>
            </div>
            <div className="form-label-input">
              <input
                type="text"
                className="form-input"
                name="age"
                onChange={this.handleChange}
                value={age}
              />
            </div>
          </label>
          <label className="form-label">
            <div className="form-label-text">
              <span>Salary</span>
            </div>
            <div className="form-label-input">
              <input
                type="text"
                className="form-input"
                name="salary"
                onChange={this.handleChange}
                value={salary}
              />
            </div>
          </label>
          <div className="form-label">
            <div className="form-label-text"></div>
            <div className="form-label-input">
              <button
                className={updating ? "form-button unactive" : "form-button"}
                type="submit"
              >
                {
                  updating ? 'Creating...' : 'Edit'
                }

                {
                  updating &&
                  (
                    <svg className="spinner" viewBox="0 0 50 50">
                      <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>
                  )
                }
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.users.dataSingle,
  isLoaded: state.users.isLoadedSingle,
  isEdited: state.users.isEdited,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendRequestToUpdate: (id, body) => {
      dispatch(usersActions.editUser(id, body, ownProps.history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)