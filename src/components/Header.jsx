import { Toolbar, AppBar, styled } from "@mui/material";

const BlackAppBar = styled(AppBar)`
    background: black;
    height: 9vh;
`

const Header = () => {
    return (
        <BlackAppBar position="static">
            <Toolbar> <h3>CODE</h3> </Toolbar>
        </BlackAppBar>
    )
};

export default Header;
