import React from "react";

function Post() {
  return (
    <div className="container">
        <center><h1>New Post</h1></center>

     <form>  
            <input className="form-control form-control-lg" type="text" placeholder="Post Title"/>

            <div><br></br></div>

            <div className="row">
                <div className="form-group col-6">
                    <label for="exampleFormControlSelect1">Plant Name</label>
                    <select className="form-control" id="exampleFormControlSelect1">
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
                        <label for="sqFootage">Sq. Footage</label>
                        <div className="col-sm-5">
                        <input className="form-control" id="sqFootage"/>
                        </div>
                        <small id="sqFootageInline" className="text-muted">Sq. feet </small>
                    </div>
            
                    <div><br></br></div>
            
                    <div className="form-check form-check-inline">
                        <label for="date-planted">Date Planted</label>
                        <div className="col-sm-6">
                            <input className="form-control" id="date-planted" placeholder="MM/DD/YYYY"/>
                        </div>
                    </div>
            
                </div>

                <div className ="col-1"></div>

                <div className="card col-5" style="width: 18rem">
                    <img src="https://via.placeholder.com/100x30" className="card-img-top responsive" alt="..." />
                    <div className="card-body">
                    <p className="card-text">Crop Image</p>
                    </div>
                </div>
        
            </div>

            <div><br></br></div>

            <div id="crop-status">
                <label for="crop-status">Crop Status</label>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label className="form-check-label" for="inlineRadio1">
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
                <label className="form-check-label" for="inlineRadio1">
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
                <label className="form-check-label" for="inlineRadio3">
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
                <label className="form-check-label" for="inlineRadio1">Harvested</label>
                </div>
            </div>

            <div><br></br></div>

            <div className="form-group">
                <label for="exampleFormControlTextarea1">Field Notes</label>
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
  );
}

export default Post;
