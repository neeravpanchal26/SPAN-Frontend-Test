// Default imports
import React, {Component} from 'react';

// Custom imports
import {connect} from 'react-redux';
import {GetImages} from '../../actions/action';
import $ from 'jquery';

class Carousel extends Component {
    // Form load
    componentDidMount() {
        // Getting question ID from router parameter
        const {topic} = this.props.match.params;
        this.props.GetImages(topic);

        $('#Controls').carousel({
            interval: 10000
        })

        $('.carousel .carousel-item').each(function () {
            var minPerSlide = 3;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }

                next.children(':first-child').clone().appendTo($(this));
            }
        });
    }

    renderImages() {
        const {images} = this.props;
        return images
            .map(
                res => (
                    <div class="carousel-item active">
                        <div className='col-4'>
                            <div className='card'>
                                <img id={res.id} src={res.urls.full} className='card-img-top'/>
                            </div>
                        </div>
                    </div>
                )
            )
    }

    render() {
        const {images} = this.props;
        return (
            <div className='row mx-auto my-auto'>
                <div id="Controls" class="carousel slide w-100" data-bs-ride="carousel">
                    <div class="carousel-inner W-100">
                        <div class="row">
                            {images ? this.renderImages() : (<span> Loading images...</span>)}
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#Controls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#Controls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect(mapStateToProps, {GetImages})(Carousel);