// import { useState } from 'react';
import './bootstrap.css';
import Create from './Components/crud/Create';
// import './App.scss';
// import getId from './Functions/getId';


function App() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Create></Create>
                    </div>
                    <div className="col-8">
                        One of three columns
                    </div>
                </div>
            </div>
        </>
    );


}
export default App;