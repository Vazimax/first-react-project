import React from 'react'

function Header() {

    const client = "Scientist"
    const info = {
        name : "Bakr",
        last : "Habti"
    }

    // if(client === 'Entrepreneur'){
    //     title = "I love Entrepreneurship"
    // }else {
    //     title = 'I love Science'
    // }


    return(
        <div className="navbar bg-dark text-white">
            Hello {`${info.name} ${info.last}`}
            <h1>I love{client === 'Enterpreneur' ? ' Entrepreneurship' : ' science'}</h1>
        </div>
    );
}

export default Header;