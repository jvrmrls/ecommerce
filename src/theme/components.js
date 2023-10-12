const components = {
  MuiButton: {
    variants: [
      {
        props: { variant: "contained", color: "primary" },
        style: {
          backgroundColor: "#E7E7E8",
          fontWeight: "600",
          color: "#0E0E10",
          padding: "8px 32px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "#E7E7E8",
          },
        },
      },
      {
        props: { variant: "outlined", color: "primary" },
        style: {
          boxShadow: "none",
          border: "1px solid #E7E7E8",
          color: "#0E0E10",
          textTransform: "none",
          padding: "8px 32px",
          borderRadius: "8px",
          "&:hover": {
            boxShadow: "none",
            border: "1px solid #E7E7E8",
          },
        },
      },
    ],
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        textTransform: "none !important",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        display: "grid",
        gridTemplateColumns: "24px 1fr 24px",
        gridGap: "24px",
        padding: "0 24px",
        height: "70px",
        alignItems: "center",
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        fontSize: "24px",
        width: "24px",
        height: "24px",
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px",
          backgroundColor: "#F3F3F3",
          border: "none",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          fontSize: "14px",
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        // backgroundColor: "#F3F3F3",
        // borderRadius: "16px",
        padding: "8px 12px",
        border: "none",
        fontSize: "14px",
        margin: "0px",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
      },
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: {
        color: "#9F9F9F",
        "&.Mui-selected": {
          color: "#614FE0",
        },
        "& .MuiBottomNavigationAction-label": {
          fontSize: "12px",
          "&.Mui-selected": {
            fontSize: "12px",
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        padding: "8px 0px",
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        textTransform: "none",
        minHeight: "24px",
        "& .MuiTabs-indicator": {
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          "& > div": {
            maxWidth: "4px",
            width: "100%",
            backgroundColor: "#614FE0",
          },
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: "none",
        padding: "16px",
        color: "#9F9F9F",
        minHeight: "24px",
        maxHeight: "24px",
        "&.Mui-selected": {
          color: "#0E0E10",
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: "16px 16px 0px 0px ",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        margin: 0,
        minHeight: "200px",
        "& .MuiDialogTitle-root": {
          minHeight: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: "regular",
          textAlign: "center",
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: "8px",
        minWidth: "48px",
        minHeight: "48px",
        padding: "8px 16px",
        fontSize: "14px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #DBDBDB",
        "& .MuiChip-label": {
          padding: "0px",
          fontWeight: "bold",
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: "14px",
      },
    },
  },
};

export default components;