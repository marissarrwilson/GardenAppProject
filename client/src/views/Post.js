import axios from 'axios';
import "./Post.css";
import React, { useEffect, useState } from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Post() {
    const [ formData, setFormData ] = useState({})

    function handleChange( event ){
        const { name, value }= event.target
        setFormData( { ...formData, [name]: value })
    }

    async function handleSelectChange( event ){
        let image;
        const { name, value } = event.target
        console.log (event.target.value);
        // now change the image, grab the new one
        try {
        const response = await axios.get('https://trefle.io/api/v1/plants/search?token=3pk9iwkeL7wAnJqrszRjMIdNfRaMqGyYvx156aJPj2g&q=' + event.target.value)
        console.log(response)
        
        if(response){
            image = response.data.data[0].image_url // or wahtever the URL
        } 
        setFormData( { ...formData, [name]: value, image })
        }
        catch ( error ) {
            console.log(error.message)
            setFormData({...formData, [name]: ""})
        }
    }
    
    // useEffect( function(){
    //     // anything we need to load at start
    //     // const response = await axios.get('https://trefle.io/api/v1/plants/search?token=3pk9iwkeL7wAnJqrszRjMIdNfRaMqGyYvx156aJPj2g&q=coconut')

    //     // response.data.results.map(result => ({
    //     //         image: result.data.image_url
    //     //     }))
    // }, [] )

    return (
        <div className="container">
            <div className="pageTitle"><center><h1>New Post</h1></center></div>

            <form>
                <input value={formData.title} onChange={handleChange} name="title" className="form-control form-control-lg" type="text" placeholder="Post Title" />

                <div><br></br></div>
                
                <div className="row">
                    <div className="form-group col-6">
                        <label className="fieldLabel" for="exampleFormControlSelect1">Plant Name</label>
                        <input value={formData.name} onChange={handleSelectChange} name="name" type="text" class="form-control" id="exampleFormControlSelect1" 
                        placeholder="Enter your plant name here ..." />
                        
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

                        <img src={formData.image || "https://via.placeholder.com/100x30"} className="card-img-top responsive" alt="..." />
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
        

        export default Post;
