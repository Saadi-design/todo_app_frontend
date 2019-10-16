import React from 'react';

class Intro extends React.Component {

    render (){
        return (
           <p>{this.props.taskDescription}</p>
        );
    }
}


export default Intro;