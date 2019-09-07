import React from 'react'

import { Button } from 'react-bootstrap'

import propTypes from 'prop-types'

import { connect } from 'react-redux';

import { fetchData } from '../../actions/booksAction'

import { delBook } from '../../actions/booksAction'


class Books extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>
        <div className="container mt-5">
          {this.props.booksData.map((books) =>
            <div key = {books.id}>
              <img src={books.img} alt="img" width="30%" />
              <div>
                <Button variant="danger" key={books.id}
                onClick = {() => {this.props.delBook(books.id)}}>Delete
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
Books.propTypes = {
  fetchData: propTypes.func.isRequired,
  booksData: propTypes.array.isRequired,
  delBook: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
  booksData: state.get.booksImage
})
export default connect(mapStateToProps, { fetchData, delBook })(Books);