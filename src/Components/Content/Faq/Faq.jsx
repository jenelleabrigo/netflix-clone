import React, { useState } from "react";
import "./Faq.scss";

const Faq = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="l-faq">
      <div className="u-layout">
        <div className="l-faq__inner">
          <h1 className="l-faq__inner__heading">Frequently Asked Questions</h1>
          <div className="l-faq__inner__item">
            <div className="l-faq__inner__item__q" onClick={() => setOpen((prev) => !prev)}>
              <p className="l-faq__inner__item__q__txt">What is Netflix?</p>
            </div>
            <div className={`l-faq__inner__item__a ${open && "show"}`}>
              <p className="l-faq__inner__item__a__txt">
                Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br />
                <br />
                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies
                are added every week!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
