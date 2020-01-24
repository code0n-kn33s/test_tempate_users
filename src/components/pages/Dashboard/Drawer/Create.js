import React from 'react'
import { connect } from 'react-redux'
import { usersActions } from '../../../../actions'

import { message } from 'antd'

class Edit extends React.Component {
  state = {
    id: '',
    name: '',
    age: '',
    salary: '',
    loaded: false
  }

  componentDidMount() {
    message.info('Start editing user...')
  }

  componentWillUnmount() {
    this.isEdited && message.warn('Exit. Without changes...')
  }

  sendData = (e) => {
    e.preventDefault()

    this.props.sendRequestToCreate(
      {
        employee_name: this.state.name,
        employee_salary: this.state.salary,
        employee_age: this.state.age,
        profile_image: ''
      }
    )

    message
      .loading('Send request to create..', 2)
      .then(() => message.success('Create is finished', 4))
  }

  handleChange = (e) => {
    let key = e.target.name
    let value = e.target.value

    this.setState({
      [key]: value
    })
  }

  render() {
    const { creating } = this.props
    const { name, age, salary } = this.state

    return (
      <div className="user-account-edit">
        <h2>CREATE USER</h2>
        <form className="form-container" onSubmit={this.sendData}>
          <label className="form-label">
            <div className="form-label-text">
              <span>Name</span>
            </div>
            <div className="form-label-input">
              <input
                type="text"
                required
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
                type="number"
                required
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
                type="number"
                required
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
                className={creating ? "form-button unactive" : "form-button"}
                type="submit"
              >
                {
                  creating ? 'Creating...' : 'Edit'
                }

                {
                  creating &&
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
  creating: state.users.isCreate
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendRequestToCreate: (body) => {
      dispatch(usersActions.createUser(body, ownProps.history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)