import React, { Component } from 'react'
import { Carousel } from 'antd'
import './style.scss'

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-carousel-wrapper">
                    <Carousel autoplay>
                        <div><img src={require('./images/1.jpg')} alt="" /></div>
                        <div><img src={require('./images/2.jpg')} alt="" /></div>
                        <div><img src={require('./images/3.jpg')} alt="" /></div>
                        <div><img src={require('./images/4.jpg')} alt="" /></div>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Home