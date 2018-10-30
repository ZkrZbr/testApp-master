import React from 'react';

const Header = (props) => {
    return (
        <h3 className="ml-4 mb-4">
            {props.title}
        </h3>
    );
};

Header.defaultProps = {
    title: "Contact US",
};

export default Header;