import { causes } from './config';

const Card = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-light">Our Causes</h1>
      <div className="flex mx-auto w-5/6 flex-wrap justify-between my-10">
        {
          causes.map((item, index) => {
            return (
              <div key={index} className="text-primaryHeader xxs:w-[90%] md:w-[40%] xl:w-[20%] m-5 border border-solid border-primaryHeader">
                <img src={item.imgSrc} alt="cause image src" className="w-full" />
                <article className="p-3">
                  <h1 className="text-center text-xl font-extralight uppercase mb-5">{item.title}</h1>
                  <p className="text-base font-thin mb-5">{item.detail}</p>
                  {
                    item.donateBtn ? <button className="bg-primaryHeader text-white w-full h-14 uppercase">Donate now</button> : null
                  }
                </article>
              </div>
            )
          })
        }
      </div>
    </>
  )
};

export default Card;