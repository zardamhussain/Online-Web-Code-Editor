
import { useState } from 'react';
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as CodeMirror} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css'

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`;

const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
`;

const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Editor = ({ heading, icon, color, value, onchange }) => {

    const [open, setOpen] = useState(true);

    return (
        <Container style={ open ? null : { flexGrow: 0 }}>
            <Header>
                <Heading>
                    <Box component='span'
                        style={{
                            background: color,
                            display: 'flex',
                            height: '20px',
                            width: '20px',
                            placeContent: 'center',
                            marginRight: 5,
                            paddingBottom: 2,
                            borderRadius: 5,
                            color: '#000'
                        }}
                    >{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    fontSize='small'
                    style={ {alignSelf: 'center'}}
                    onClick = { () => setOpen(prevState => !prevState)}/>
            </Header>
            <CodeMirror
                className='controlled-editor'
                value={value}
                onBeforeChange={(editor, data, value) => { onchange(value); }}
                options={{
                    theme: 'material',
                    lineNumbers: true
                }}/>
        </Container>
    )
}

export default Editor;
