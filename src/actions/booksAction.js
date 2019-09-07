
export function fetchData() {
  return dispatch => {
      fetch(`http://localhost:8000/books`)
      .then(function (res) {
        return res.json()
      })
      .then((bookData)  => {
        dispatch({
            type: 'fetchBooks',
            payload: bookData
        })
      })
  }
}

export function addBook(formData) {
  const id = formData[0].id;
  return dispatch => {
    fetch(`http://localhost:8000/book/${id}`,{
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

export function updBook(formData) {
  const id = formData[0].id;
  return dispatch => {
    fetch(`http://localhost:8000/book/${id}`,{
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
            //   type: 'updBook',
            //   payload: formData[0]
            // })
            );
  }
}

export function delBook(id) {
  return dispatch => {
    fetch(`http://localhost:8000/book/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/text',
      }
    })
    .then(res => res.json())
    .then(
      response => alert(response),
      dispatch({
        type: 'deleteBooks',
        payload: id
      })
    )
  }
}

