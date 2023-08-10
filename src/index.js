import React from "react";
import ReactDOM from "react-dom";

const img1 = "https://picsum.photos/300";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Some Things
    </h1>
    <img src={img1 + "?grayscale"} alt="random" />
    <div>
      <img
        className="food-img"
        alt="food1"
        src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Crispy-Fried-Chicken_EXPS_TOHJJ22_6445_DR%20_02_03_11b.jpg"
      />
      <img
        className="food-img"
        alt="food2"
        src="https://www.vegrecipesofindia.com/wp-content/uploads/2022/06/how-to-cook-basmati-rice-2.jpg"
      />
      <img
        className="food-img"
        alt="food3"
        src="https://vismaifood.com/storage/app/uploads/public/daa/96d/7bc/thumb__700_0_0_0_auto.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
