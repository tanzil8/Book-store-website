'use client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from '../list.json'



export default function BookCart() {

  // const filterData = list.filter((data)=>data.category === "free")
  // console.log(filterData);

   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}
 



  return (
   <>
   <div className='max-w-screen-2xl container mx-auto px-2'>
    <h1 className='text-2xl font-bold'>
      Free Offered Courses
    </h1>
    <p className='text-1xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum iste commodi ut aut atque mollitia, nihil accusantium ex a possimus, voluptatum voluptates enim porro, vel aliquam ullam itaque cum!</p>
   </div>
   <div>
    <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
      </div>
   </>
  );
}
