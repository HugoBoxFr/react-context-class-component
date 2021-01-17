import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext';


// class context version
// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;

//         return (
//             <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>kings</li>
//                     <li style={{ background: theme.ui }}>queens</li>
//                     <li style={{ background: theme.ui }}>final</li>
//                 </ul>
//             </div>
//         )
//     }
// }

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    console.log(books)

    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {books.map(book => {
                    return <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                })}
            </ul>
        </div>
    )
}

export default BookList;
