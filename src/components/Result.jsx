
import { Box } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataProvider';


const Result = () => {
    const { html, css, js } = useContext(DataContext);
    const [src, setSrc] = useState('');
    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `;

    useEffect(()=> {
        const time = setTimeout(()=>setSrc(srcCode), 1000);
        return () => clearTimeout(time);
    }, [html, css, js]);

    return (
        <Box>
            <iframe
                srcDoc={src}
                title='OUTPUT'
                sandbox='allow-scripts'
                width= '100%'
                height="100%"
            />

        </Box>
    )
};

export default Result;
