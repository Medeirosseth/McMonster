import React from "react";
import "./Mural.scss";

export default function Murals() {
  return (
    <div className="murals" id="murals">
      <div className="portfolio" id="portfolio">
        <div class="gallery">
          <div class="gallery__column">
            <figure className="gallery__thumb">
              <img
                src="assets/Mural/One.jpg"
                alt="Skeleton"
                class="gallery__image"
              />
              <figcaption className="gallery__caption">Skeleton Guy</figcaption>
            </figure>
            <figure className="gallery__thumb">
              <img
                src="assets/Mural/Two.jpg"
                alt="another"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Piece</figcaption>
            </figure>
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Three.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Piece</figcaption>
            </figure>
          </div>

          <div class="gallery__column">
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Four.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Peice</figcaption>
            </figure>
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Five.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of piece </figcaption>
            </figure>
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Six.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Peice</figcaption>
            </figure>
          </div>
          <div class="gallery__column">
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Seven.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Peice</figcaption>
            </figure>
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Eight.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Peice</figcaption>
            </figure>
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Nine.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Peice</figcaption>
            </figure>
          </div>

          <div class="gallery__column">
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Ten.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Peice</figcaption>
            </figure>
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Eleven.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Peice</figcaption>
            </figure>
            <figure class="gallery__thumb">
              <img
                src="assets/Mural/Twelve.jpg"
                alt="TITLE GOES HERE"
                class="gallery__image"
              />
              <figcaption class="gallery__caption">Name of Peice</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
