import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
import { faMusic } from '@fortawesome/free-solid-svg-icons'


const Navbar = (props) => {

    const {libraryActive, setLibraryActive} = props;

    return(
        <nav>
            <h1>
                Soul
            </h1>
            <button onClick={() => setLibraryActive(!libraryActive)} className="library-icon">
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Navbar;