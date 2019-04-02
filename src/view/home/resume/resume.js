import React, { Component } from 'react';
import './resume.module.scss';

class Resume extends Component {
    componentDidMount () {
        let s = document.createElement('script')
        s.src = '/react-cli/build/public/canvas.js'
        document.body.appendChild(s)
    }

    render () {
        return (
            <div className='body' styleName='body'>
                <canvas className='canvas' />
                <div className='ui'>
                    <input className='ui-input' type='text' />
                    <span className='ui-return'>↵</span>
                </div>

                <div className='overlay'>
                    <div className='tabs'>
                        <div className='tabs-panels'>
                            <div className='tabs-panel ui-details'>
                                <div className='ui-details-content' />
                            </div>

                            <div className='tabs-panel ui-share'>
                                <div className='ui-share-content' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
