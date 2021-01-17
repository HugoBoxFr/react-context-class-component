import React, { Component, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

// class version
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
    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                <li style={{ background: theme.ui }}>kings</li>
                <li style={{ background: theme.ui }}>queens</li>
                <li style={{ background: theme.ui }}>final</li>
            </ul>
        </div>
    )
}

export default BookList;
