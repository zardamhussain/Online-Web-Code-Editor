import { useContext  } from "react";
import Editor from "./Editor";
import { Box, styled } from '@mui/material';
import { DataContext } from "../context/DataProvider";

const Container = styled(Box)`
    display: flex;
    background: #060606;
    height: 55h;
`
const Body = () => {
    const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
    return (
        <Container>
            <Editor heading='HTML' icon ='/' color='red' value={html} onchange={setHtml} />
            <Editor heading='CSS' icon = '*' color='blue' value={css} onchange={setCss}/>
            <Editor heading='JS' icon = '{}' color='yellow' value={js} onchange={setJs}/>
        </Container>
    )
}

export default Body;
