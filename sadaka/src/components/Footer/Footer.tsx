import About from './About';
import Tweet from './Tweet';
import Contact from './Contact';

const Footer = () => {
  return (
    <>
      <div className="w-full h-9 bg-primaryHeader"></div>
      <div className="w-full bg-secondaryHeader">
        <div className="w-5/6 flex flex-wrap mx-auto my-0 justify-between">
          <About />
          <Tweet />
          <Contact />
        </div>
        <div className="w-full bg-primaryHeader text-right">
          <p className="text-white text-base w-5/6 mx-auto px-3 py-1">Designed by Techs'n Arif</p>
        </div>
      </div>
    </>
  )
};

export default Footer;