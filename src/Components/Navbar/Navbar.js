import React from "react";
import {
    // AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Button,
    useScrollTrigger,
    Slide,
    Menu,
    MenuItem,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <BrowserRouter>
                    <>
                        <Toolbar>
                            <Typography
                                variant="h5"
                                component="p"
                                color="textSecondary"
                                className={classes.title}
                            >
                                Veggino
                            </Typography>
                            {isMobile ? (
                                <>
                                    <IconButton
                                        color="textPrimary"
                                        className={classes.menuButton}
                                        edge="start"
                                        aria-label="menu"
                                        onClick={handleMenu}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchor}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        KeepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        open={open}
                                    >
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/about"
                                        >
                                            <Typography variant="h6"> About Us</Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/Blog"
                                        >
                                            <Typography variant="h6"> Blog </Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/Contact"
                                        >
                                            <Typography variant="h6"> Contact</Typography>
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => setAnchor(null)}
                                            component={Link}
                                            to="/Products"
                                        >
                                            <Typography variant="h6"> Products </Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <div style={{ marginRight: "2rem" }}>
                                    <Button
                                        className={classes.menuItem}
                                        variant="text"
                                        component={Link}
                                        to="/"
                                        color="default"
                                    >
                                        About Us
                                    </Button>
                                    <Button
                                        className={classes.menuItem}
                                        variant="text"
                                        component={Link}
                                        to="/Blog"
                                        color="default"
                                    >
                                        Blog
                                    </Button>
                                    <Button
                                        className={classes.menuItem}
                                        variant="text"
                                        component={Link}
                                        to="/Contact"
                                        color="default"
                                    >
                                        Contact
                                    </Button>
                                    <Button
                                        className={classes.menuItem}
                                        variant="text"
                                        component={Link}
                                        to="/Products"
                                        color="default"
                                    >
                                        Products
                                    </Button>
                                    <Button
                                        className={classes.menuSign}
                                        variant="text"
                                        component={Link}
                                        to="/Products"
                                        color="default"
                                    >
                                        SignIn
                                    </Button>
                                    <span style={{fontWeight:600, fontSize:25,padding:5}}>|</span>
                                    <Button
                                        className={classes.menuSign}
                                        variant="text"
                                        component={Link}
                                        to="/Products"
                                        color="default"
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            )}
                        </Toolbar>
                    </>
                </BrowserRouter>
            </HideOnScroll>
        </div>
    );
};

export default Navbar;

