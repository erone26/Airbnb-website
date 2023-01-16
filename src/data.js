import SwimImage from "./Images/image 12.png"
import WeddingImage from "./Images/wedding-photography 1.png"
import MountainBikeImage from "./Images/mountain-bike 1.png"


export default [

    {
        id: 1,
        image: {SwimImage},
        title: "life Lessons with katie Zaferes",
        description: "Take life lessons with katie Zaferes",
        price: 136,
        coverImg: "image 12.png",
        stats: {
            rating: 5.0,
            reviewcount: 6,
        },
        location: "Online",
        country: "Moldova",
        openSpots: 27,
    },
    
    {
        id: 3,
        image: {MountainBikeImage},
        title: "Learn Mountain Biking!",
        description: "Learn Mountain Biking with Bob Ross!!",
        price: 50,
        coverImg: "wedding-photography 1.png",
        stats: {
            rating: 4.8,
            reviewcount: 2,
        },
        location: "In person",
        country: "USA",
        openSpots: 20,
    },

    {
        id: 3,
        image: {WeddingImage},
        title: "Learn wedding photography",
        description: "Learn wedding photography with Bob Ross!!",
        price: 125,
        coverImg: "wedding-photography 1.png",
        stats: {
            rating: 5.0,
            reviewcount: 30,
        },
        location: "In person",
        country: "Russia",
        openSpots: 45,
    }
]