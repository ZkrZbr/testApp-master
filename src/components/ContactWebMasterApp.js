import React from 'react';
import AddContact from './AddContact';
import Header from './Header';
import ImageSection from './ImageSection';
import OptionModel from './OptionModel';

export default class ContactWebMasterApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: false
        };
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: false
        }));
    };

    setOption = () => {
        this.setState(() => ({
            selectedOption: true
        }));
    };
    render(){
        return (
            <div id="Contact_Form">
                <div className="Contact_Form_Overlay">
                    <div className="Contact_Form_Box">
                        <div className="Contact_Form_Content">
                            <div className="row">
                                <div className="col-md-6 logo">
                                    <ImageSection />
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <Header />
                                        <AddContact setOption={this.setOption} />
                                        <OptionModel
                                            selectedOption={this.state.selectedOption}
                                            handleClearSelectedOption={this.handleClearSelectedOption}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

