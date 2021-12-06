import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component{
    static propTypes = {
        name: PropTypes.string.isRequired  // 同以下写法 
    }

    render() {
        const { name } = this.props;
        return (
            <h1>Hello, { name }</h1>
        )
    }
}
/* 
Greeting.propTypes = {
    name: PropTypes.string.isRequired // 限制name的值 为字符串类型且必须有
} */

export default Greeting;

        
