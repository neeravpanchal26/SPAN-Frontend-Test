// Default imports
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

// Custom imports
import {connect} from 'react-redux';
import {GetCategories} from '../../actions/action';

class Sidenav extends Component {
    // Form load
    componentDidMount() {
        this.props.GetCategories();
    }

    renderSideNav = () => {
        const {categories} = this.props;
        return categories
            .map(
                data => (
                    <NavLink className="list-group-item" id={data.slug}
                             to={'/carousel/' + data.slug}>{data.title}</NavLink>
                )
            );
    }

    renderPreviewGrid = () => {
        const {preview_images} = this.props;
        return preview_images
            .map(
                res => (
                    <div className='col-4'>
                        <div className='card'>
                            <img id={res.id} src={res.urls.full} className='card-img-top'/>
                        </div>
                    </div>
                )
            )
    };

    render() {
        const {preview_images} = this.props;
        return (
            // HTML here
            <div className='row'>
                <ul className="list-group col-4">{this.renderSideNav()}</ul>
                <div className='col-8'>
                    <div className='row'>
                        {preview_images ? this.renderPreviewGrid() : (<span> Loading images...</span>)}
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, {GetCategories})(Sidenav);