import React from 'react'
import './DropDown.scss'

export function DropDown() {
  return (
    <div className="about__dropdown__container">
          <div className="about__description">
            <div className="title__dropdown__container">
              <h3>
                Description <img src="/src/assets/arrow-dropdown.svg" alt="" />
              </h3>
            </div>
            <div className="content__dropdown__container">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                perferendis nobis, illo enim animi, ratione eligendi, fugit non
                repellendus perspiciatis veritatis dolor in reprehenderit
                explicabo!
              </p>
            </div>
          </div>
        </div>
  )
}
