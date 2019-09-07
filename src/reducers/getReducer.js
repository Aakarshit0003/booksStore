const initialState = {
    booksImage: [],
    authorsImage: [],
    user: ''
}

export default function(state = initialState,action) {
    switch(action.type) {
        case 'fetchBooks' :
            return { 
                ...state,
                booksImage: action.payload
            }
        case 'fetchAuthors' :
            return {
                ...state,
                authorsImage: action.payload
            }
        case 'deleteBooks' :
            let bookState = JSON.parse(JSON.stringify(state.booksImage));
            bookState = bookState.filter(books => books.id !== action.payload)
            return {
                ...state,
                booksImage: bookState                
            }
        case 'deleteAuthors' :
            let authorState = JSON.parse(JSON.stringify(state.authorsImage));
            authorState = authorState.filter(authors => authors.id !== action.payload)
            return {
                ...state,
                authorsImage: authorState
        }
        case 'login' :
            let loginUser = action.payload.username;
            return {
                ...state,
                user: loginUser
            }
        case 'signup' :
            let signUser = action.payload.username;
            return {
                ...state,
                user: signUser
            }
        case 'logout' :
            return {
                ...state,
                user: ''
        }
        // case 'updAuthor' :   
        // const idAuthor = parseInt(action.payload.id);
        // let authorState = JSON.parse(JSON.stringify(state.authorsImage));
        // authorState = authorState.filter(authors => {
        //     if(authors.id === idAuthor) {
        //         return action.payload 
        //     } else {
        //     return authors;
        //     }
        // })
        // return {
        //     ...state, authorsImage:authorState
        // }
        // case 'updBook' :    
        // console.log('here');            
        // const idBook = parseInt(action.payload.id);
        // let bookState = JSON.parse(JSON.stringify(state.booksImage));
        // bookState = bookState.filter(books => {
        //     if(books.id === idBook) {
        //         return action.payload 
        //     } else {
        //     return books;
        //     }
        // })
        // return {
        //     ...state, booksImage:bookState
        // }
        default:
            return state;
    }
}