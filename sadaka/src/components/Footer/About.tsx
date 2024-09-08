import { aboutUs } from "./config";

const About = () => {
  return (
    <div className="xxs:w-[90%] lg:w-1/4 m-5 text-white">
      <h1 className="text-2xl font-thin border-solid border-b-2 mb-5 px-0 py-2">About Us</h1>
      <article>
      {
        aboutUs[0].about.map((item, index) => {
          return (
            <p key={index} className="text-xl mb-5 font-thin">{item}</p>
          )
        })
      }
      </article>
    </div>
  )
};

export default About;