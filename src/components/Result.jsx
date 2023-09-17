
import { Box, styled } from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
    height: 36vh;
`


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
        <Container>
            <iframe
                srcDoc={src}
                title='OUTPUT'
                sandbox='allow-scripts'
                width= '100%'
                height="100%"
            />

        </Container>
    )
};

export default Result;
