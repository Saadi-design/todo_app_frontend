import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
class Header extends React.Component {

    render() {
        return (
            <h1 className= 'h1'>
                <header> Miles to go    <FontAwesomeIcon icon={faShoePrints}/></header>
                
            </h1>

        );
    }
}


export default Header;