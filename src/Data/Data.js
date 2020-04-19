import Photo1 from '../Photos/GoodFork1.jpeg'
import Photo2 from '../Photos/GoodFork2.jpg'
import Photo3 from '../Photos/Elephant/Elephant1.JPG'
import Photo7 from '../Photos/Elephant/Elephant.JPG'
import Photo4 from '../Photos/MildredTemple/Temple.JPG'
import Photo8 from '../Photos/MildredTemple/Temple1.JPG'
import Photo5 from '../Photos/EarlyBird/EarlyBird.JPG'
import Photo9 from '../Photos/EarlyBird/EarlyBird1.JPG'
import Photo6 from '../Photos/PeterPan/peterpan1.JPG'
import Photo10 from '../Photos/PeterPan/peterpan2.JPG'

const photos = [
    {photo:Photo1,
     text:"The Good Fork",
     photos:[
        {photo:Photo1,
         text:"Interior of The Good Fork"
        },
        {photo:Photo2,
         text:"Heuvos Rancherritos"
        },
      ],
     url:"/thegoodfork",
     name:"The Bad Fork",
     relativeLocation:"West Toronto",
     address:"1550 Dundas St W, Toronto, ON M6K 1T5",
     commute:"30 minute commute from downtown core",
     foodValue:"approx. $15 for large portions + fresh food",
     blurb:"This place is such a gem, one of the new favourite brunch places in the city as it has such a great menu, and value for food. It is quite out of the way to get to, but if you are in the area I highly recommend you check out the other stores nearby!"
    },
 
    {
    photo:Photo3,
    photos:[
        {photo:Photo7,
         text:"Eggs Benny"
        },
        {photo:Photo3,
         text:"Interior"
        },
      ],
    text:"Elephant Grind Coffee",
    url:'/elephantgrindcoffee',
    name:"Elephant Grind Coffee",
    relativeLocation:"Leslie + 16th",
    address:"",
    commute:"Depends",
    foodValue:"Regular Brunch Pricing",
    blurb:"Very cute spot, reminds me a lot of Alchemy Coffee, putting an asian twist on classic brunch dishes. Overall food is good, very unique flavours. Not that memorable, but if you are interesed in their menu would recommend checking out."
    },
    {
        photo:Photo4,
        photos:[
            {photo:Photo8,
             text:"Interior of The Good Fork"
            },
            {photo:Photo4,
             text:"Heuvos Rancherritos"
            },
          ],
        text:"Mildreds Temple",
        url:'/mildredstemple',
        name:"Mildreds Temple",
        relativeLocation:"King St. W (very west)",
        address:"",
        commute:"Depends",
        foodValue:"Regular Brunch Pricing",
        blurb:"Very cute spot, reminds me a lot of Alchemy Coffee, putting an asian twist on classic brunch dishes. Overall food is good, very unique flavours. Not that memorable, but if you are interesed in their menu would recommend checking out."
        },
        {
            photo:Photo6,
            photos:[
                {photo:Photo10,
                 text:"Food"
                },
                {photo:Photo6,
                 text:"Interior"
                },
              ],
            text:"PeterPan",
            url:'/peterpan',
            name:"PeterPan",
            relativeLocation:"King St. W (very west)",
            address:"",
            commute:"Depends",
            foodValue:"Regular Brunch Pricing",
            blurb:"Very cute spot, reminds me a lot of Alchemy Coffee, putting an asian twist on classic brunch dishes. Overall food is good, very unique flavours. Not that memorable, but if you are interesed in their menu would recommend checking out."
            },
            {
                photo:Photo5,
                photos:[
                    {photo:Photo5,
                     text:"Food"
                    },
                    {photo:Photo9,
                     text:"Interior of Early Bird - very small space"
                    },
                  ],
                text:"Early Bird",
                url:'/earlybird',
                name:"Early Bird",
                relativeLocation:"King St. W (very west)",
                address:"",
                commute:"Depends",
                foodValue:"Regular Brunch Pricing",
                blurb:"Very cute spot, reminds me a lot of Alchemy Coffee, putting an asian twist on classic brunch dishes. Overall food is good, very unique flavours. Not that memorable, but if you are interesed in their menu would recommend checking out."
                },
                    

    ]


 export default photos