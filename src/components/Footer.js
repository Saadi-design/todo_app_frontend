import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
class Footer extends React.Component {

    render() {
        return (
            <h6 className='h6'>
                <footer><FontAwesomeIcon icon={faComments} />
                    The woods are lovely, dark and deep,<br />
                    but I have promises to keep,<br />
                    and miles to go before I sleep...
                    <FontAwesomeIcon icon={faComments} />
                </footer>

            </h6>

        );
    }
}


export default Footer;