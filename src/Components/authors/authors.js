import React from 'react'

import { Button } from 'react-bootstrap'

import { connect } from 'react-redux'

import { fetchData } from '../../actions/authorsAction'

import { delAuthor } from '../../actions/authorsAction'

import propTypes from 'prop-types'


class Authors extends React.Component {

  componentWillMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>
          <div className="container mt-5">
            {this.props.authorData.map(authors =>
            <div key = {authors.id}>              
              <img src = {authors.img} alt="img" width="30%" />
              <div>
                <Button variant = "danger"
                onClick = {() => this.props.delAuthor(authors.id)}>Delete
                </Button>
              </div>
            </div>
            )}
          </div>
      </div>
    );
  }
}
Authors.propTypes = {
  fetchData: propTypes.func.isRequired,
  authorData: propTypes.array.isRequired,
  delAuthor: propTypes.func.isRequired
}

const mapStateToProps = state => ({
  authorData: state.get.authorsImage
})
export default connect(mapStateToProps, { fetchData, delAuthor })(Authors);