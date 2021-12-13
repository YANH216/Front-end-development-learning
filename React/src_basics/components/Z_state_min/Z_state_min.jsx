import React, { Component } from "react";

class Weather extends Component {
    state = {
        isHot: true,
        haveWind: false
    }

    render() {
        const { isHot, haveWind } = this.state;
        return (
            <>
                <h1>
                今天天气{ isHot ? '炎热' : '凉爽' }，{ haveWind ? '有风' : '没风'}
                </h1>
                <button onClick={this.changeWeather}>changeWeather</button>
            </>
        )
    }

    changeWeather = () => {
        const { isHot, haveWind } = this.state;
        this.setState({
            isHot: !isHot,
            haveWind: !haveWind
        })
    }
    
}

export default Weather;