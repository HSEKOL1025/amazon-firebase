import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__img" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/WFH/WFH_DesktopHero_1500x600-5._CB432114062_.jpg" alt=""/>
            
<div className="home__row">
<Product
        id="123456"
        title=" SSD Western Digital WD Blue NVME SN550 250GB M.2 2280 PCIe Gen3 Internal Solid State Drive (WDS250G2B0C)"
        price={21.56}
        rating={4}
        image="https://m.media-amazon.com/images/I/71RFMl5CJaL._AC_UY218_.jpg"

         />

<Product
        id="123456"
        title="Harry Potter: The Complete Collection (1-7)."
        price={21.56}
        rating={4}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJ3V9pYbTfJ2zulOJrC0BQMTcjPH2DFoGBMvE5SXZMqLZFV0&s"

         />


</div>
       <div className="home__row">
       <Product
        id="123456"
        title="Kodak 60 cm (24 inch) HD Ready LED TV  24HDX100s (Black)"
        price={21.56}
        rating={4}
        image="https://m.media-amazon.com/images/I/71m5ZSLGZfL._AC_UY218_.jpg"


         />

        <Product
        id="123456"
        title=" Amazon Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
        price={21.56}
        rating={4}
        image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"

         />
          <Product
        id="123456"
        title="Amazfit Bip Lite Smart Watch (Black)"
        price={21.56}
        rating={4}
        image="https://m.media-amazon.com/images/I/61fslCAtlBL._AC_UL320_.jpg"


         />

       </div>
       <div className="home__row">
       <Product
        id="123456"
        title="Zotac Gaming GeForce GTX 1660 Twin Fan"
        price={21.56}
        rating={4}
        image="https://m.media-amazon.com/images/I/61CcD1QbROL._AC_UY218_.jpg"

         />
       </div>
          
        </div>
        
    )
}

export default Home
