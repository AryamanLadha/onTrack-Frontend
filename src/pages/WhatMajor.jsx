import { makeStyles } from "@mui/styles";
import AutoDropdown from "../components/AutoDropdown";
import PageButton from "../components/PageButton";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
  },

  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100rem",
    height: "9.4rem",
    marginTop: "20.4rem",
    marginBottom: "12.4rem",
  },

  title: {
    font: theme.font.title,
    color: theme.color.black,
    textAlign: "center",
   margin: "0 0 0 0.9rem",
    fontWeight: "bold",
  },

  subtitle: {
    textAlign: "center",
    font: theme.font.subtitle,
    marginTop: "1.8rem",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "34.6rem",
  },


  prompt: {
    textAlign: "center",
    font: theme.font.subtitle,
    marginTop: "auto",
    padding: "0.67rem",
  },
}));

function WhatMajor({majmin}) {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <header className={classes.header}>
        <h1 className={classes.title}>Enter Your 
        { 
           majmin === "majors"
            ? " Major(s)"
            : " Minor(s)"
        }

        </h1>
        <span className={classes.subtitle}>Insert some subtitle here.</span>
      </header>
        <div> 
        {
            majmin === "majors"
            ?  <AutoDropdown whichPage={"majors"} />
            : <AutoDropdown whichPage={"minors"} />
        }
        </div>
      
      
      <footer className={classes.footer}>
        {
            majmin === "majors"
            ?  <PageButton text={"next"} size={"short"} page = {"majors"} />
            :  
              <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "99rem",
                justifyContent: "space-between",
              }}
              >
              <PageButton text="Back" size="short" page = {"minors"} />
              <PageButton text="Next" size="short" page = {"minors"} />
          </div>
        }
        
      </footer>

    </div>
  );
}

export default WhatMajor;
