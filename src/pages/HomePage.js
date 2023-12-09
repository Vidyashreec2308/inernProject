import React from 'react';
import '../style/HomePageStyle.css'; 
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page-container">
        <button className="customer-care"></button>
       <div className="notification-circle"></div>
       <div className="notification-text">4</div>
       <div className="logo-container"></div>
       <div className='dashboard-layout'>
       </div>
       <div className="dashboard-heading">
        <div className='dashboard-text'>Employee Productivity Dashboard</div>
       </div>
       <table className='week-progress'>
        <tr>
            <td>Productivity on Monday 
                <div className='progress-bar'></div>
            </td>
            <td className='percentage'>4%</td>
        </tr>
        <tr>
            <td>Productivity on Tuesday
            <div className='progress-bar'></div>
            </td>
            <td className='percentage'>92%</td>
        </tr>
        <tr>
            <td>Productivity on Wednesday
            <div className='progress-bar'></div>
            </td>
         
            <td className='percentage'>122%</td>
        </tr>
        <tr>
            <td>Productivity on Thursday
            <div className='progress-bar'></div>
            </td>
        
            <td className='percentage'>93%</td>
        </tr>
        <tr>
            <td>Productivity on Friday
            <div className='progress-bar'></div>
            </td>
        
            <td className='percentage'>4%</td>
        </tr>
        <tr>
            <td>Productivity on Saturday
            <div className='progress-bar'></div>
            </td>
        
            <td className='percentage'>89%</td>
        </tr>
        <tr>
            <td>Productivity on Sunday
            <div className='progress-bar'></div>
            </td>
            <td className='percentage'>98%</td>
        </tr>
       </table>
       <div className="rectangle-bottom"></div>
       <Link to="/employee-list">
        <button className='employee-list'></button>
      </Link>
      <Link to="/">
        <button className='home'></button>
      </Link>
    </div>
    
  );
};

export default HomePage;
