import * as React from 'react';

type Page3Props = {
    mode: string;
}

function Page3({mode}: Page3Props) {
    return (
        <div id="pg3"
            style={{
            backgroundColor: mode === 'dark' ? "#121212" : "#ffffff",
            color: mode === 'light' ? "#121212" : "#ffffff",
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            maxWidth: '100%',
            position: 'relative',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }}>

        </div>
    )
}

export default Page3;