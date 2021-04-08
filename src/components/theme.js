import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({

})
const drawerWidth = 600;
theme.props = {
  MuiButton: {

  }
}

theme.overrides = {

  MuiButton: {
    root: {
    height: '100%',
    width: `100%`,
    fontSize: "30px",
    backgroundColor: "#fff",
    color: '#211C17',
    fontFamily: "Helvetica",
    '&:hover': {
      opacity: `0.9`,
      color: '#fff',
      backgroundColor: "#DB1200",
      transform: 'translateY(-4px)',
      boxShadow: '0px 6px 12x 0px rgba(0,0,0,0.04)'
    },
    transition: "all 0.5s",
    boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.04)',

    },
    containedSecondary: {
      color: "#211C17",
      backgroundColor: "#fff",
      fontSize: "20px",

        boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.04)',

      '&:hover': {
        opacity: `0.9`,
        color: '#fff',
        backgroundColor: "#DB1200",
        transform: 'translateY(-4px)',
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.04)'
      },
    },
    contained: {
      color: "black",
      '&:hover': {
        opacity: `0.9`,
        color: '#fff',
        backgroundColor: "#DB1200",
        transform: 'translateY(-4px)',
        boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.04)'
      },
    },

  },
  MuiAppBar: {
   colorPrimary: {
     color: "#211C17"
   }
  },
  MuiTypography: {
    root: {
    color: '#fff',
    fontFamily: "Helvetica",

    },
    body1: {
      color: "#fff"
    },
    colorTextSecondary : {
      color: "#fff"
    },
  },
  MuiListItemIcon: {
    root: {
      color: "#fff"
    }
  },
  MuiListItemText: {
    primary: {
      color: "#fff"
    }
  },
  MuiButtonBase: {
    root: {
    backgroundColor: "#fff",
    color: '#211C17',
    fontFamily: "Helvetica",
    '&:hover': {
      opacity: `0.9`,
      color: '#fff',
      backgroundColor: "#DB1200",
      transform: 'translateY(-4px)',
      boxShadow: '0px 4px 8px 0px rgba(255,255,255,255.02)'

    },
    marginRight: "10px",
    transition: "all 0.5s",
    boxShadow: '0px 1px 2px 0px rgba(255,255,255,255.02)',

    }
  },
  MuiListSubheader: {
    root: {
      color: "#fff"
    },
  },
  MuiFormControl: {
    root: {
      color: "#211C17",
      backgroundColor: "#red"
    },
  },

  MuiFormLabel: {
    root: {
      color: "#fff",

        "&:focused": {
          color: "#fff"
        }
    },
    focused: {
      color: "#fff"
    }
  },

  MuiBox: {
    root: {
      color: 'white',
      backgroundColor: "#211C17"
    },
  },
  MuiIconButton: {
    root: {
    backgroundColor: "#fff",
    color: '#211C17',
    fontFamily: "Helvetica",
    '&:hover': {
      opacity: `0.9`,
      color: '#fff',
      backgroundColor: "#DB1200",
      transform: 'translateY(-4px)',
      boxShadow: '0px 6px 10px 0px rgba(0,0,0,0.04)'

    },
    marginRight: "10px",
    transition: "all 0.5s",
    boxShadow: '0px 6px 8px 0px rgba(0,0,0,0.04)',

    }
  },
  MuiTooltip : {
    popperInteractive: {
      marginRight: '10px',
      backgroundColor: "#DB1200",
      '&:hover': {
        opacity: `0.9`,
        color: '#211C17',
        backgroundColor: "#DB1200"
      },
    },
    tooltip: {
      marginRight: '10px',
    color: 'white',
    backgroundColor: "#8e0e00",
    '&:hover': {
      opacity: `0.9`,
      color: '#211C17',
      backgroundColor: "#DB1200"
    },
    transition: "all 0.4s",
    }
  },

  MuiPaper: {
    root: {
      backgroundColor: '#211C17',
      color: '#fff'
    }
  },
  MuiDivider: {
    root: {
      backgroundColor: '#fff'
    }
  },
  MuiInput: {
    root: {
    marginRight: '10px',
    marginLeft: '10px',
    color:'#fff',
    height: '55px',
    fontSize: '20px',

    },
    focused: {
      marginRight: '10px',
      marginLeft: '10px',
      height: '55px',
      fontSize: '20px',
    },
    underline: {
        borderBottom: '2px solid #fff',
      '&:after': {
        borderBottom: '2px solid #DB1200',
      },
    }

  },
  MuiInputBase: {
    root: {
      backgroundColor: '#211C17'
    }
  },
  MuiListItem: {
    root: {
      backgroundColor: "#211C17"
    },
    gutters: {
      color: "black"
    },
    button: {
      color: "#DB1200",
      '&:hover': {
        opacity: `0.9`,
        color: '#211C17',
        backgroundColor: "#DB1200"
      },
    }
  },
  MuiTabs: {
    flexContainer: {
      backgroundColor: "#8D0E00"
    }
  },
  MuiList: {
    root: {
      height: "100%",
      marginTop: "5px",
      backgroundColor: '#211C17',
      color: "#211C17"
    }
  },
  MuiInputLabel: {
    root: {
      marginRight: '10px',
    background: '#211C17',
    color:'#fff',
    paddingLeft: '10px',
    fontSize: '20px',
    boxShadow: '2px 10px -14px 14px #FFF'
    }

  },


}

export default theme;