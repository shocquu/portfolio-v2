import React, { useEffect } from 'react';

const LazyComponent = ({ children }) => {
    // https://codesandbox.io/s/suspense-transition-hqq0i?from-embed=&file=/src/index.js
    const [dataPromise, setDataPromise] = React.useState();

    useEffect(() => {
        setDataPromise(
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1500);
            }).then(() => setDataPromise())
        );
    }, []);

    if (dataPromise) {
        throw dataPromise;
    }

    return children;
};

export default LazyComponent;
