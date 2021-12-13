import React from "react";


class ClassComp extends React.Component {
    render() {
        return <h1>Hello React { this.props.title }</h1>
    }
}

export default ClassComp;