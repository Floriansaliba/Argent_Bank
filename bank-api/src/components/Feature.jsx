
import React from "react"

const Feature = ({imageSource, titleContent, textContent}) =>{


    return(
        <div className="feature-item">
            <img src={imageSource} alt="" className="feature-icon"></img>
            <h3 className="feature-item-title">{titleContent}</h3>
            <p>
            {textContent}
            </p>
        </div>
    )
}

export default Feature
