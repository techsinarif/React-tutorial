const Contact = () => {
  return (
    <div className="xxs:w-[90%] lg:w-1/4 m-5 text-white">
      <h1 className="text-2xl font-thin border-solid border-b-2 mb-5 px-0 py-2">Contact Us</h1>

      <label htmlFor="name" className="block mb-1" >Name</label>
      <input type="text" id="name" placeholder="Name" className="w-full text-base h-[40px] mb-5 bg-primaryHeader border-solid border-2 border-white px-3 outline-none" />

      <label htmlFor="email" className="block mb-1">Email</label>
      <input type="email" id="email" placeholder="E-mail" className="w-full text-base h-[40px] mb-5 bg-primaryHeader border-solid border-2 border-white px-3 outline-none" />

      <label htmlFor="message" className="block mb-1">Message</label>
      <textarea name="message" id="message" placeholder="Message" className="w-full text-base h-[100px] mb-5 bg-primaryHeader border-solid border-2 border-white px-3 outline-none"></textarea>
      
      <div className="text-right">
        <button type="submit" className="text-base h-[40px] mb-5 bg-primaryHeader border-solid border-2 border-white px-3 outline-none uppercase">send message</button>
      </div>
    </div>
  )
};

export default Contact;