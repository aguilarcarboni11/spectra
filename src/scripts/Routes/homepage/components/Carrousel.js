import React, {useState, useEffect} from 'react'
import ArrowButton from '../../../misc/ArrowButton'

const Carrousel = () => {
  const [index,setIndex] = useState(0)
  const carrouselPhotos = []
  //const images = require('../../../../assets/fotos/fotos-prias/')

  for (var i = 1; i < 15; i++) {
    var string = i.toString()
    carrouselPhotos.push({path: string.concat('.JPG'), key: i})
  }

  const nextSlide = () => {
    if (index !== carrouselPhotos.length-2) {
      setIndex(index+1);
    } else {
      setIndex(0);
    }
  }

  const prevSlide = () => {
    if (index === 0) {
      setIndex(carrouselPhotos.length-2);
    } else {
      setIndex(index - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div className='carrouselAndTextContainer'>
      <div className='carrouselContainer'>
        <div className='carrouselPhotos'>
        {carrouselPhotos.slice(index,index+2).map((image, count) => (
          <div className='carrouselPhotoContainer' key={count}>
            <img src={require("../../../../assets/fotos/fotos-prias/" + image.path)} alt={'Diapositiva' + image.key} className='carrouselPhoto'></img>
          </div>
        ))}
        </div>
      </div>
      <div className='carrouselSubtitleContainer'>
        <ArrowButton id = 'left' onClick={prevSlide} height={2} width={2}/>
        <p className='subtitle'> Biblioteca de fotos del PRIAS</p>
        <ArrowButton id = 'right' onClick={nextSlide} height={2} width={2}/>
      </div>
    </div>

  )
}

export default Carrousel