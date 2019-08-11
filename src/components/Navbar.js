import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;

    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <nav style={{ background: theme.ui, color: theme.syntax }}>
                <h1>Context App</h1>
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contacts</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar ;