import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      paddingLeft: 50,
      fontFamily: 'Dancing Script',
      fontSize: 35,
      fontWeight:600
    },
    menuItem: {
        paddingRight: 50
    },
    menuSign:{
        backgroundColor:"#000000ff",
        opacity: 0.5,
        color:"#FFF"
    },
  }));

  export default useStyles;
