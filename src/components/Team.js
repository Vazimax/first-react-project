import React from 'react'
import TM from './TM'

function Team(){
    return (
        <div className="row">
            <TM 
            info={
                {
                    name : 'Bakr',
                    image : '/images/first.jpg',
                    position : 'Founder',
                    phone : "+713 438 901 142",
                    email : "bakr@gmail.com",
                    website : "bakr.com" ,
                }
            }
            />
            <TM 
            info={
                {
                    name : 'Jack',
                    image : '/images/second.jpg',
                    position : 'Co-founder',
                    phone : "+551 724 980 194",
                    email : "jack@gmail.com",
                    website : "jack.com" ,
                }
            }
            />
            <TM 
            info={
                {
                    name : 'Vazimax',
                    image : '/images/third.jpeg',
                    position : 'Boss',
                    phone : "+501 431 890 561",
                    email : "vazimax@gmail.com",
                }
            }
            />

        </div>
    )
}

export default Team