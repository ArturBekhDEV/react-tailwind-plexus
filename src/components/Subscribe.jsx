import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-center text-white ">
      <h1>Join Our Community</h1>
      <div className="py-4 text-black ">
        <input
          className="p-1 mr-5 sd: my-4"
          type="email"
          placeholder="Enter your email"
        />
        <button className="bg-sky-600">Subscribe</button>
      </div>
      <div className="flex items-center justify-center">
        <input type="checkbox" />
        <p>Yes, I agree to receive email communication.</p>
      </div>
    </div>
  );
};

export default Subscribe;
