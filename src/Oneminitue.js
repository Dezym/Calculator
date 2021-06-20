import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Oneminitue() {
  return (
    <>
      <h1 className="text-center text-danger my-5">Hello, WelCome To My World</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card" >
              <img src="https://picsum.photos/id/237/200/301" className="card-img-top" alt="" height="200px" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" >
              <img src="https://picsum.photos/id/257/201/306" className="card-img-top" alt="" height="200px"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card" >
                <img src="https://picsum.photos/id/239/300/350" class="card-img-top" alt="" height="200px"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
</div>
              </div>
            </div>
          </div>
    
    </>
        );
}

        export default Oneminitue;
