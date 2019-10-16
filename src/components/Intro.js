import React from 'react';

class Intro extends React.Component {

    render (){
        return (
           <p>{this.props.introDescription}</p>
        );
    }
}


export default Intro;