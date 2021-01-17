import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

// class context version
// class ThemeToggle extends Component {
//     static contextType = ThemeContext;
    
//     render() {
//         const { toggleTheme } = this.context;

//         return (
//             <div>
//                 <button onClick={toggleTheme}>Theme</button>
//             </div>
//         )
//     }
// }

const ThemToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return ( 
        <div>
            <button onClick={toggleTheme}>Theme</button>
        </div>
    );
}
 
export default ThemToggle;
