import React from 'react';
import icon from '../../assets/images/icon.png';
import update from '../../assets/images/update1.png';

export function UpdateSection() {
  const objItem = [{
    icon,
    title: 'Monitor',
    text: 'Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.',
  }, {
    icon,
    title: 'Maintenance',
    text: 'Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.',
  }, {
    icon,
    title: 'Repair',
    text: 'Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.',
  }, {
    icon,
    title: 'Replace',
    text: 'Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.',
  }];
  return (
    <div className="update">
      <div className="update-content-left">
        <div className="box-title-update">
          <div className="sectionsubtitle">
              update
          </div>
          <div className="sectiontitle"> 
            It starts with an upgrade
          </div>
        </div>
        <img src={update}/>
      </div>
      <div className="update-content-right">
        {objItem && (objItem.map((element) => (
          <div className="card-update">
            <img src={element.icon} />
            <div className="card-update-content">
              <div className="content-body-title" style={{ marginBottom: '16px' }}>
                {element.title}
              </div>
              <div className="content-body-text">
                {element.text}
              </div>
            </div>
          </div>
        )))
        }
      </div>
    </div>
  );
}