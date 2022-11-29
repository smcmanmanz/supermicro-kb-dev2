import React from "react"
import "../style.css"
import { BrowserRouter as Route, useNavigate } from 'react-router-dom'

export default function Components(){
    
    const navigate = useNavigate();

    const navigateResult = () => {
        navigate('/Search');
    };

    return (
        <div>
            {/* <Header /> */}
            <div className="search_wrap search_wrap_5">
                <div className="search_box">
                    <input type="text" className="input" placeholder="Enter SKU, Components ..." />
                    <div class="btn">
                        <button onClick={navigateResult}>Search</button>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="resultsSpace">
                    <div class="result">
                        <h2> Components Page</h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>
                    <div class="result">
                        <h2> </h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>
                    <div class="result">
                        <h2> </h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>
                    <div class="result">
                        <h2> </h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>
                    <div class="result">
                        <h2> </h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>
                    <div class="result">
                        <h2> </h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>
                    <div class="result">
                        <h2> </h2>
                        <a>                   </a>
                        <p>                   </p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}