import React from 'react'
import SocialItem from './SocialItem.js'

function Social() {
    return(
      <ul className="list-group" >  
          <SocialItem  
            media = "facebook" 
            id = "facebook"
            image = "https://picsum.photos/50"
            />
          <SocialItem 
            media = "twitter" 
            id = "twitter" 
            image = "https://picsum.photos/50"
            />
          <SocialItem 
            media = "youtube" 
            id = "youtube" 
            image = "https://picsum.photos/50"
            />
      </ul>
    );
}

export default Social;