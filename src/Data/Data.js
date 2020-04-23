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
import Photo11 from '../Photos/NextDoor/nd1.JPG'
import Photo12 from '../Photos/NextDoor/nd2.JPG'


const photos = [
    {photo:Photo1,
    color:"#F3D3A8",
     photos:[
        {photo:Photo1,
         text:"Interior of The Good Fork"
        },
        {photo:Photo2,
         text:"Heuvos Rancherritos"
        },
      ],
    exact:"/brunch/thegoodfork",
     url:"/thegoodfork",
     name:"The Good Fork",
     relativeLocation:"West Toronto",
     address:"1550 Dundas St W, Toronto, ON M6K 1T5",
     commute:"30 minute commute from downtown core",
     foodValue:"approx. $15 for large portions + fresh food",
     blurb:"This place is such a gem, one of the new favourite brunch places in the city as it has such a great menu, and value for food. It is quite out of the way to get to, but if you are in the area I highly recommend you check out the other stores nearby!"
    },
 
    {
    photo:Photo3,
    color:"#4d6659",
    photos:[
        {photo:Photo7,
         text:"Eggs Benny"
        },
        {photo:Photo3,
         text:"Interior"
        },
      ],
    url:'/elephantgrindcoffee',
    name:"Elephant Grind Coffee",
    relativeLocation:"Leslie + 16th",
    address:"10 East Wilmot St Unit 7, Richmond Hill, ON L4B 1G9",
    commute:"Depends",
    foodValue:"Regular Brunch Pricing",
    blurb:"Very cute spot, reminds me a lot of Alchemy Coffee, putting an asian twist on classic brunch dishes. Overall food is good, very unique flavours. Not that memorable, but if you are interesed in their menu would recommend checking out."
    },
    {
        photo:Photo4,
        color:"#d9d9d9",
        photos:[
            {photo:Photo8,
             text:"Interior of The Good Fork"
            },
            {photo:Photo4,
             text:"Heuvos Rancherritos"
            },
          ],
        url:'/mildredstemple',
        name:"Mildreds Temple",
        relativeLocation:"King St. W (very west)",
        address:"85 Hanna Ave #104, Toronto, ON M6K 3S3",
        commute:"Depends",
        foodValue:"Regular Brunch Pricing",
        blurb:"Very cute spot, reminds me a lot of Alchemy Coffee, putting an asian twist on classic brunch dishes. Overall food is good, very unique flavours. Not that memorable, but if you are interesed in their menu would recommend checking out."
        },
        {
            photo:Photo6,
            color:"#785b33",
            photos:[
                {photo:Photo10,
                 text:"Food"
                },
                {photo:Photo6,
                 text:"Interior"
                },
              ],
            url:'/peterpan',
            name:"Peter Pan",
            relativeLocation:"Close to Eaton",
            address:"373 Queen St W, Toronto, ON M5V 2A4",
            commute:"Depends",
            foodValue:"Regular Brunch Pricing",
            blurb:"Very cute spot, reminds me a lot of Alchemy Coffee, putting an asian twist on classic brunch dishes. Overall food is good, very unique flavours. Not that memorable, but if you are interesed in their menu would recommend checking out."
            },
            {
                photo:Photo5,
                color:"pink",
                photos:[
                    {photo:Photo5,
                     text:"Food"
                    },
                    {photo:Photo9,
                     text:"Interior of Early Bird - very small space"
                    },
                  ],
                url:'/earlybird',
                name:"Early Bird",
                relativeLocation:"Slightly West of Spadina",
                address:"613 Queen St W, Toronto, ON M5V 2B7",
                commute:"Depends",
                foodValue:"Regular Brunch Pricing",
                blurb:"Very cute spot, reminds me a lot of Alchemy Coffee, putting an asian twist on classic brunch dishes. Overall food is good, very unique flavours. Not that memorable, but if you are interesed in their menu would recommend checking out."
                },
                {
                  photo:Photo11,
                  color:"blue",
                  photos:[
                      {photo:Photo11,
                       text:"Food"
                      },
                      {photo:Photo12,
                       text:"Interior of Early Bird - very small space"
                      },
                    ],
                  url:'/nextdoor',
                  name:"Next Door",
                  relativeLocation:"Main St. Unionville",
                  address:"613 Queen St W, Toronto, ON M5V 2B7",
                  commute:"Depends",
                  foodValue:"Regular Brunch Pricing",
                  blurb:"Very cute spot, reminds me a lot of Alchemy Coffee, putting an asian twist on classic brunch dishes. Overall food is good, very unique flavours. Not that memorable, but if you are interesed in their menu would recommend checking out."
                  },
                    

    ]


export default photos;
