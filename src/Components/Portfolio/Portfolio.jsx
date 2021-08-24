import React from "react";
import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="gallery">
        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/DevilOnYourBack.png"
              alt="Skeleton"
              class="gallery__image"
            />
            <figcaption className="gallery__caption">
              Devil On Your Back
            </figcaption>
          </figure>
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/Don'tTellMe.jpg"
              alt="another"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Dont Tell Me</figcaption>
          </figure>
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/Eight.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of Piece</figcaption>
          </figure>
        </div>

        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/Eleven.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/Five.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of piece </figcaption>
          </figure>
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/Four.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of Peice</figcaption>
          </figure>
        </div>
        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/Labyrinth.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/LadyJustice.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/LookingTheOtherWay.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of Peice</figcaption>
          </figure>
        </div>

        <div className="gallery__column">
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/SpatialAwareness.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/SwordOfFire.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure className="gallery__thumb">
            <img
              src="assets/Portfolio/TakeCare.jpg"
              alt="TITLE GOES HERE"
              className="gallery__image"
            />
            <figcaption className="gallery__caption">Name of Peice</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
