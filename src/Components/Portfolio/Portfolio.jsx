import React from "react";
import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div class="gallery">
        <div class="gallery__column">
          <figure className="gallery__thumb">
            <img src="assets/one.jpg" alt="Skeleton" class="gallery__image" />
            <figcaption className="gallery__caption">Skeleton Guy</figcaption>
          </figure>
          <figure className="gallery__thumb">
            <img src="assets/Two.jpg" alt="another" class="gallery__image" />
            <figcaption class="gallery__caption">Name of Piece</figcaption>
          </figure>
          <figure class="gallery__thumb">
            <img
              src="assets/Three.png"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of Piece</figcaption>
          </figure>
        </div>

        <div class="gallery__column">
          <figure class="gallery__thumb">
            <img
              src="assets/Four.jpg"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure class="gallery__thumb">
            <img
              src="assets/Five.jpg"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of piece </figcaption>
          </figure>
          <figure class="gallery__thumb">
            <img
              src="assets/Six.jpg"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of Peice</figcaption>
          </figure>
        </div>
        <div class="gallery__column">
          <figure class="gallery__thumb">
            <img
              src="assets/Seven.jpg"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure class="gallery__thumb">
            <img
              src="assets/Eight.jpg"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure class="gallery__thumb">
            <img
              src="assets/Nine.jpg"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of Peice</figcaption>
          </figure>
        </div>

        <div class="gallery__column">
          <figure class="gallery__thumb">
            <img
              src="assets/Ten.jpg"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure class="gallery__thumb">
            <img
              src="assets/Eleven.jpg"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of Peice</figcaption>
          </figure>
          <figure class="gallery__thumb">
            <img
              src="assets/Twelve.jpg"
              alt="TITLE GOES HERE"
              class="gallery__image"
            />
            <figcaption class="gallery__caption">Name of Peice</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
