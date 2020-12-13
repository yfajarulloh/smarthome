import update_img from '../../assets/images/update_img.png';
import icon from '../../assets/images/icon-call.png';
import imgHome from '../../assets/images/home.png';

function Services() {
  const objItem = [{
    icon,
    title: 'Mobile Command Management'
  }, {
    icon,
    title: 'Mobile Command Management'
  }, {
    icon,
    title: 'Mobile Command Management'
  }, {
    icon,
    title: 'Mobile Command Management'
  }, {
    icon,
    title: 'Mobile Command Management'
  }, {
    icon,
    title: 'Mobile Command Management'
  }, {
    icon,
    title: 'Mobile Command Management'
  }, {
    icon,
    title: 'Mobile Command Management'
  }, {
    icon,
    title: 'Mobile Command Management'
  }]
  return (
    <div className="services">
      <div className="section-subtitle text-center">
        SERVICES  
        </div>
      <div className="section-title text-center">
        Bring more systems into the network
        </div>
      <p className="section-paragraph text-center">
        Find out just how far Siphome can lead your home into next-gen intelligence.
        </p>
      <img className="image-home" src={imgHome} />
      <div className="item-services-group">
        {objItem && (objItem.map(element =>(
          <div className="card-service">
            <img src={element.icon} />
            <div className="content-body-title">
              {element.title}
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  );
}
export default Services;