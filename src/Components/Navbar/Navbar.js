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
    Link,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
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
                        <Toolbar className={classes.toolbar}>
                            <Typography
                                variant="h5"
                                component="p"
                                color="textSecondary"
                                className={classes.title}
                            >
                                <Link href="/" className={classes.link}>
                                    Veggino
                                </Link>
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
                                    <Link
                                        className={classes.listItem}
                                        variant="text"
                                        component={Link}
                                        to="/"
                                        color="default"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        className={classes.listItem}
                                        variant="text"
                                        component={Link}
                                        to="/Blog"
                                        color="default"
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        className={classes.listItem}
                                        variant="text"
                                        component={Link}
                                        to="/Contact"
                                        color="default"
                                    >
                                        Contact
                                    </Link>
                                    <Link
                                        className={classes.listItem}
                                        variant="text"
                                        component={Link}
                                        to="/Products"
                                        color="default"
                                    >
                                        Products
                                    </Link>
                                    <Button
                                        className={classes.menuSign}
                                        variant="text"
                                        href="/login"
                                    >
                                        SignIn
                                    </Button>
                                    <span style={{ fontWeight: 600, fontSize: 25, padding: 5 }}>|</span>
                                    <Button
                                        className={classes.menuSign}
                                        variant="text"
                                        href="/signup"
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

