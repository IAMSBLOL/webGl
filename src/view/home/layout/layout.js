import React, { Component } from 'react';
import './layout.module.scss';
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types';
import Navigation from '../../../container/navigation'

class Layout extends Component {
    render () {
        console.log(this.props)
        const { route } = this.props
        return (
            <div styleName='Layout' className='Layout'>
                <Navigation />
                {renderRoutes(route.routes)}
            </div>
        );
    }
}

Layout.propTypes = {
    route: PropTypes.any.isRequired
}

export default Layout;
