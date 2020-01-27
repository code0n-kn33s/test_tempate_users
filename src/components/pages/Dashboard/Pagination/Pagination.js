import * as React from 'react'

import UsersListItem from '../UsersListItem'
import Numbers from './Numbers'

class Pagination extends React.Component {
  state = {
    currentPage: 1
  };

  handleClick = (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    });
  }

  getCurrentList = () => {
    const { list, listPerPage } = this.props
    const { currentPage } = this.state

    const indexOfLastList = currentPage * listPerPage
    const indexOfFirstList = indexOfLastList - listPerPage
    const currentList = list.slice(indexOfFirstList, indexOfLastList)

    return currentList
  }

  handleArrowLeft = () => {
    if (this.state.currentPage !== 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      })
    }
  }

  handleArrowRight = () => {
    const { list, listPerPage } = this.props

    if (this.state.currentPage !== (list.length / listPerPage)) {
      this.setState({
        currentPage: this.state.currentPage + 1
      })
    }
  }

  getPageNumbers = () => {
    const { list, listPerPage } = this.props
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(list.length / listPerPage); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers
  }

  render() {
    const { currentPage } = this.state

    return (
      <div className="pagination">
        <UsersListItem currentList={this.getCurrentList()} />
        <Numbers
          pageNumbers={this.getPageNumbers()}
          activePage={currentPage}
          handleClick={this.handleClick}
          handleArrowLeft={this.handleArrowLeft}
          handleArrowRight={this.handleArrowRight}
        />
      </div>
    );
  }
}

Pagination.defaultProps = {
  list: []
}

export default Pagination