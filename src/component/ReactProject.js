import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import img1proj from "../assets/img/3.jpeg"
import img11 from "../assets/img/porto1.jpeg"
import img22 from "../assets/img/jens.png"
import img33 from "../assets/img/plant.png"
import img44 from "../assets/img/react2.jpeg"
import img55 from "../assets/img/react3.jpeg"
import img66 from "../assets/img/gost temlate 4.png"

function ReactProject() {
  return (

    <div className='ReactProject' id='ReactProject'>
      

      <div className='ReactProject-contaner'>
        
        {/* {BoxBig.map((i) => ( */}

          <div className='box'>
            <div className='img-box'>
              <img src={img11} alt='img1' />
          </div>

          <div className='overTheText'></div>

          <div className='box-text'>
              <h3> Portofolio 1</h3>
              <span>  HTML & CSS & JS </span>
              <button > <a href='https://saradrwish.github.io/myportofolio2022march/' target='_blank'> visit</a>  </button>
            </div>
          </div>

        {/* ))} */}

           {/* {BoxBig.map((i) => ( */}

          <div className='box'>
            <div className='img-box'>
              <img src={img22} alt='img1' />
          </div>

          <div className='overTheText'></div>

          <div className='box-text'>
              <h3> Jeans template</h3>
              <span> HTML & CSS </span>
              <button > <a href='https://saradrwish.github.io/template1/' target='_blank'> visit</a>  </button>
            </div>
            
          </div>

        {/* ))} */}

           {/* {BoxBig.map((i) => ( */}

          <div className='box'>
            <div className='img-box'>
              <img src={img33} alt='img1' />
          </div>
          <div className='overTheText'></div>
          <div className='box-text'>
               <h3> Plant template </h3>
              <span> HTML & CSS & Bootstrap </span>
              <button > <a href='https://saradrwish.github.io/temp1_bootstrab_plant/' target='_blank'> visit</a>  </button>
            </div>
            
          </div>

        {/* ))} */}

           {/* {BoxBig.map((i) => ( */}

          <div className='box'>
            <div className='img-box'>
              <img src={img44} alt='img1' />
          </div>
                    <div className='overTheText'></div>

          <div className='box-text'>
               <h3> react emplate 2  </h3>
              <span> React js </span>
              <button > <a href='https://github.com/SaraDrwish/srpo-react' target='_blank' > visit</a>  </button>
            </div>
            
          </div>

        {/* ))} */}

           {/* {BoxBig.map((i) => ( */}

          <div className='box'>
            <div className='img-box'>
              <img src={img55} alt='img1' />
          </div>
          <div className='overTheText'></div>
          <div className='box-text'>
               <h3>  react tmp3</h3>
              <span> React js </span>
              <button > <a href='https://github.com/SaraDrwish/reactProj3'  target='_blank' > visit</a>  </button>
            </div>
            
          </div>

        {/* ))} */}

           {/* {BoxBig.map((i) => ( */}

          <div className='box'>
            <div className='img-box'>
              <img src={img66} alt='img1' />
          </div>
           <div className='overTheText'></div>
          <div className='box-text'>
               <h3> Gost temlate</h3>
              <span>  HTML & CSS </span>
              <button > <a href='https://saradrwish.github.io/template3ghost/'  target='_blank' > visit</a>  </button>
            </div>
            
          </div>

        {/* ))} */}

              </div>     
        </div>  
      
    
        )
        
}

export default ReactProject
