import axios from 'axios';
import React from "react";
import "./Post.css";
import $ from 'jquery'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //   this.handleInputChange = this.handleInputChange.bind(this);
    }
    // const vegName = vegName.val()

    // if null use placeholder image

    componentDidMount() {
        axios.get('https://trefle.io/api/v1/plants/search?token=3pk9iwkeL7wAnJqrszRjMIdNfRaMqGyYvx156aJPj2g&q=')
            .then(json => json.data.results.map(result => (
                {
                    image: result.data.image_url
                })))
            .then(newData => console.log(newData))
            }

        render() {
            return (
                <div className="container">
                    <div className="pageTitle"><center><h1>New Post</h1></center></div>

                    <form>
                        <input className="form-control form-control-lg" type="text" placeholder="Post Title" />

                        <div><br></br></div>

                        <div className="row">
                            <div className="form-group col-6">
                                <label className="fieldLabel" for="exampleFormControlSelect1">Plant Name</label>
                                <select className="vegName form-control" id="vegName">
                                    <option>Carrots</option>
                                    <option>Beets</option>
                                    <option>Blueberries</option>
                                    <option>Raddish</option>
                                    <option>Raspberries</option>
                                    <option>Kale</option>
                                    <option>Eggplant</option>
                                    <option>Grapes</option>
                                    <option>Apples</option>
                                    <option>Arugula</option>
                                    <option>Basil</option>
                                    <option>Broccoli</option>
                                    <option>Cabbage</option>
                                    <option>Cauliflower</option>
                                    <option>Green Beans</option>
                                    <option>Lettuce</option>
                                    <option>Parsley</option>
                                    <option>Pears</option>
                                    <option>Potatoes</option>
                                    <option>Tomatoes</option>
                                    <option>Rhubarb</option>
                                    <option>Squash</option>
                                    <option>Zucchini</option>
                                </select>

                                <div><br></br></div>

                                <div className="form-check form-check-inline">
                                    <label className="fieldLabel" for="sqFootage">Sq. Footage</label>
                                    <div className="col-sm-5">
                                        <input className="form-control" id="sqFootage" />
                                    </div>
                                    <small className="fieldLabel" id="sqFootageInline" className="text-muted">sq. ft. </small>
                                </div>

                                <div><br></br></div>

                                <div className="form-check form-check-inline">
                                    <label className="fieldLabel" for="date-planted">Date Planted</label>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Date: </label>
                                            <div>
                                                <DatePicker />
                                            </div>
                                        </div>
                                        <input className="form-control" id="date-planted" placeholder="MM/DD/YYYY" />
                                    </div>
                                </div>

                            </div>

                            <div className="col-1"></div>


                            <div className="card col-5" >

                                <img src="https://via.placeholder.com/100x30" className="card-img-top responsive" alt="..." />
                                <div className="card-body">
                                    <p className="fieldLabel card-text">Plant Image</p>
                                </div>
                            </div>

                        </div>

                        <div><br></br></div>

                        <div id="crop-status">
                            <label className="fieldLabelCrop" for="crop-status">Crop Status</label>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="fieldLabel form-check-label" for="inlineRadio1">
                                    Just planted
                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1"
                                />
                                <label className="fieldLabel form-check-label" for="inlineRadio1">
                                    <i className="fas fa-seedling"></i> Seedling
                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio3"
                                    value="option3"
                                />
                                <label className="fieldLabel form-check-label" for="inlineRadio3">
                                    <i className="fas fa-carrot"></i>Ready for Harvest
                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1"
                                />
                                <label className="fieldLabel form-check-label" for="inlineRadio1">Harvested</label>
                            </div>
                        </div>

                        <div><br></br></div>

                        <div className="form-group">
                            <label className="fieldLabel" for="exampleFormControlTextarea1">Field Notes</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Last watered, observations..."
                            ></textarea>
                        </div>

                        <div><br></br></div>

                        <center><button type="submit" className="btn btn-primary mb-2">Post</button></center>
                    </form>
                </div>
            )
        }
        };
        

        export default Post;
