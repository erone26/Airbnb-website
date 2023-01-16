import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import Card from "./Components/Card";
import SwimImage from "./Images/image 12.png"
import WeddingImage from "./Images/wedding-photography 1.png"
import MountainBikeImage from "./Images/mountain-bike 1.png"
import DataFile from "./data"


export default function App() {
  console.log(DataFile)
  const data = DataFile.map(element => {
    return <Card
              img={SwimImage}
              rating={element.stats.rating}
              reviewCount={element.stats.reviewcount}
              country={element.country}
              title={element.title}
              price={element.price}
            />
  })

  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <div className="card-elements">
        {data}
      </div>
      
    </div>
  );
    
}

{/* <Card
      img={Cardimage}
      rating="5.0"
      reviewCount="6"
      country="Moldova"
      title="Life Lessons with Katie Zaferes"
      price={136}
      
      />

 */}
