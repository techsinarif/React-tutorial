import { twinCards } from "./config";

const TwinCard = () => {
  return (
    <div className="flex mx-auto w-5/6 flex-wrap justify-between">
      {
        twinCards.map((item, index) => {
          return (
            <div key={index} className="m-5 xxs:w-[100%] lg:w-[45%] relative group">
              <img src={item.imgSrc} alt="Support hub images" className="w-full" />
              <div className="hidden absolute top-0 bg-transparent-dardBlue text-white border-b-2 border-solid p-[50px] h-[calc(100%-96px)] text-2xl font-thin overflow-auto group-hover:block">
                {
                  item.content.length > 0 ? (
                    item.content.map((contentItem, contentindex) => {
                      return (
                        <p className="pb-8" key={contentindex}>{contentItem}</p>
                      )
                    })
                  ) : null
                }
              </div>
              <article className="absolute bottom-0 w-full bg-transparent-dardBlue p-5 text-center">
                <h1 className="text-white text-2xl font-medium uppercase">{item.title}</h1>
                <h6 className="text-white text-base font-thin uppercase">{item.subTitle}</h6>
              </article>
            </div>
          )
        })
      }
    </div>
  )
};

export default TwinCard;