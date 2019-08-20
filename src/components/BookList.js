import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className='book-list' style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
            <li style={{background: theme.ui}}></li>
            <li style={{background: theme.ui}}></li>
            <li style={{background: theme.ui}}></li>
        </ul>
    </div>
    );
}


export default BookList;