import React from "react";

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHot: true,
            haveWind: false
        }
        this.changeWeather = this.changeWeather.bind(this);
    }

    render() {
        const { isHot, haveWind } = this.state;
        return (
            <h1 onClick={this.changeWeather}>
                今天天气{ isHot ? '炎热' : '凉爽' }，{ haveWind ? '有风' : '没风'}
            </h1>
        )
    }

    changeWeather() {
        const { isHot, haveWind } = this.state;
        this.setState ({
             isHot: !isHot,
             haveWind: !haveWind
        })
    }
}

export default Weather;