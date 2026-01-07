import React from 'react'
import CarouselImg1 from "../assets/hero1-deae5a1f.webp"
import CarouselImg2 from "../assets/carousel-2img.webp"
import CarouselImg3 from "../assets/carousel-3img.webp"
import CarouselImg4 from "../assets/carousel-4img.webp"
import FeaturedProducts from '../components/FeaturedProducts'

const carouselImages = [
  {
    id: 1,
    img: CarouselImg1,
  },
  {
    id: 2,
    img: CarouselImg2,
  },
  {
    id: 3,
    img: CarouselImg3,
  },
  {
    id: 4,
    img: CarouselImg4,
  },

]

function Home() {
  return (
    <div>
      <div className='container-element flex  items-center mt[100px] justify-between'>
        <div className='max-w-xl'>
          <h1 className=" text-7xl font-bold">We are changing the way people shop  </h1>
          <p className=" text-xl mt-6 mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
          <button className="btn btn-primary uppercase">our products</button>
        </div>

        <div className="carousel carousel-center bg-info-content rounded-box  max-w-md space-x-4 p-4">
          {carouselImages.map((elem) => (
            <div className="carousel-item" key={elem.id}>
              <img
                src={elem.img}
                className="rounded-box h-full w-80 object-cover" />
            </div>
          ))}

        </div>
      </div>
      <div className="container-element">
        <FeaturedProducts />
      </div>
    </div>
  )
}

export default Home
