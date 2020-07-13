import React, {useEffect} from "react";
import axios from "axios";

function Dashboard() {
    useEffect(()=> {
        axios.get()
    },[])

    return (
        <div className='dashboard'>
            <div className='categories'>
                <div className='each-category'>

                </div>

            </div>
            <div className='posts'>
                <div className='posts-category-title'>

                </div>

            </div>
        </div>
    )
}

export default Dashboard;