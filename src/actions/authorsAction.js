export function fetchData() {
  return dispatch => {
    fetch('http://localhost:8000/authors')
    .then(function (res) {
      return res.json()
    })
    .then((authorData)  => {
      dispatch({
          type: 'fetchAuthors',
          payload: authorData
      })
    })
  }
}

export function addAuthor(formData) {
  const id = formData[0].id;
  return dispatch => {
    fetch(`http://localhost:8000/author/${id}`,{
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res=>res.json())
    .then(response => alert(response));
  }
}

export function updAuthor(formData) {
  const id = formData[0].id;
  return dispatch => {
    fetch(`http://localhost:8000/author/${id}`,{
              method: 'PUT',
              body: JSON.stringify(formData),
              headers: {
              'Content-Type': 'application/json',
              },
            })
          .then(res=>res.json())
          .then(
            response => alert(response),
            // dispatch({
            //   type: 'updAuthor',
            //   payload: formData[0]
            // })
            )
  }
}

export function delAuthor(id) {
  return dispatch => {
    fetch(`http://localhost:8000/author/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/text',
      }
    })
    .then(res => res.json())
    .then(
      response => alert(response),
      dispatch({
        type: 'deleteAuthors',
        payload: id
      })
    )
  }
}