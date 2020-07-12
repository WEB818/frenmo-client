import React from "react";
import Eggs from "../../images/eggs.jpg";
import DogHike from "../../images/doghike.jpg";
import Garden from "../../images/garden.jpg";
import FreeDirt from "../../images/freeDirt.jpg";
import Groceries from "../../images/groceries.jpg";
import Succulents from "../../images/succulents.jpg";
import "./PopularFrenmos.scss";

const imageArr = [
  { img: Eggs, title: "Fresh eggs" },
  { img: DogHike, title: "Take your dog for a hike" },
  { img: Garden, title: "Herb planters" },
  { img: FreeDirt, title: "Free dirt" },
  { img: Groceries, title: "Pick up groceries" },
  { img: Succulents, title: "Succulent cuttings" },
];
export default function PopularFrenmos() {
  return (
    <ul className="PopularFrenmo">
      {imageArr.map((img, i) => (
        <li key={i} className="PopularFrenmo">
          <div className="PopularFrenmo__image-container">
            <img
              src={img.img}
              alt={img.title}
              className={`PopularFrenmo__image image-${i}`}
            />
            <div className="PopularFrenmo__image-title">
              <h4>{img.title}</h4>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
