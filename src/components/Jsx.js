import React from "react";

const Jsx = () => {
    // return <h1>Hello from without importing React from 'react' and JSX</h1>
    return React.createElement('h1', null, 'Without JSX');
    // react 18 allows using JSX without import React for smaller app
    // but if we want to use createElement we must import React from 'react'
}

export default Jsx
