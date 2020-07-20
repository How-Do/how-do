import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BarChart from './BarChart';
import ChartTwo from './ChartTwo';

const Profile = () => {

  return (
    // isAuthenticated && (
    //   <div>
    //     <img src={user.picture} alt={user.name} />
    //     <h2>{user.name}</h2>
    //     <p>{user.email}</p>
    //     <h3>User Metadata</h3>
    //     {userMetadata ? (
    //       <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
    //     ) : (
    //       ""
    //     )}
    //   </div>
    // )
    <div className="chart-card-container">
      <div className="outer-chart-container"> <BarChart/></div>
      <div className="outer-chart-container"> <ChartTwo/></div>
    </div>
  );
};

export default Profile;