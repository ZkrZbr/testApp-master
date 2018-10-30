import React from 'react';
import Model from 'react-modal';

const OptionModel = (props) => {
    return (
        <Model
            isOpen={props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.handleClearSelectedOption}
            closeTimeoutMS={200}
            ariaHideApp={false}
            className="model"
        >
            <h1 className="model--title mx-3 my-2">Contacts Successfully Added</h1>
            <input className="model--btn" type="button" value="Okey" onClick={props.handleClearSelectedOption}/>
        </Model>
    );
};
export default OptionModel;