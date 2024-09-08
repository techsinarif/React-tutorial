import { tweets } from "./config";

const Tweet = () => {
  return (
    <div className="xxs:w-[90%] lg:w-1/4 m-5 text-white">
      <h1 className="text-2xl font-thin border-solid border-b-2 mb-5 px-0 py-2">Last Tweets</h1>
      <article>
        {
          tweets[0].tweet.map((item, index) => {
            return (
              <p key={index} className="text-xl mb-5 font-thin pb-5 border-b-2 border-dotted">{item}</p>
          )
          })
        }
      </article>
    </div>
  )
};

export default Tweet;