import React, { useState } from 'react';
import SkeletonLoader from "@/components/loaders/skeleton-loader";

const Iframe = ({ url }) => {
    const [loading, setLoading] = useState(true);

    const handleIframeLoad = () => {
        setLoading(false);
    };

    return (
        <div>
            {loading &&<div>
                <SkeletonLoader/>
                <SkeletonLoader/>
                <SkeletonLoader/>
            </div>
               }
            <iframe
                style={{ width: '100%',height:'90vh', border: 'none', outline: 'none', display: loading ? 'none' : 'block'  }}
                src={url}
                width={'100%'}
                onLoad={handleIframeLoad}
            ></iframe>
        </div>
    );
};

export default Iframe;
