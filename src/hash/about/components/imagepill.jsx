import React from 'react'

function ImagePill({src}) {
  return (
    <div className="heroImage">
        <div
            style={{
                background: `linear-gradient(191.11deg, #F2509E 17.38%, #EE778B 21.95%, #6324EB 36.67%, #9747FF 53.27%, #3FCDEC 77.51%), url(${src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto',
                backgroundBlendMode: 'hue, normal',
                borderRadius: '1000px',
                width: '100%',
                height: '100%',
            }}
        ></div>
    </div>
  )
}

export default ImagePill