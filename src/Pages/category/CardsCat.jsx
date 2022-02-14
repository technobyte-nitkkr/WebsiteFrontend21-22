import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextInfoContent from "@mui-treasury/components/content/textInfo"
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog"
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over"
import "./CardsCat.css";
import cx from "clsx"
import { Col } from "react-bootstrap";


const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "0 auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    // boxShadow: "0px 0px 20px 0px rgba(220, 212, 221, 0.6)",
    position: "relative",
    width: "85%",
    overflow: "initial",
    background: "rgba(255,255,255,0.8)",
    display: "flex",
    flexDirection: "column",

    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  cardcontent: {
    width: "75%",
    display:'flex',
    flexDirection:"column",
    alignContent:'center',
    justifyContent:'center',
    fontFamily : "Poppins ",

    [breakpoints.down("md")]: {
      width: "90%",
      margin:'0 auto',
    },
  },
  media: {  
    objectFit: "cover",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    width: "85%",
    height: "auto",
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundColor: "#ffffff",
    position: "relative",
    [breakpoints.up("md")]: {
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      backgroundImage: "linear-gradient(147deg, #ffffff 0%, #ffffff 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.0,
    },
  },

  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}))

function CardsCat(props) {
  const category = props.name;
  const styles = useStyles()
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles()
  const shadowStyles = useOverShadowStyles()

  return (
    <Col Col xl={4} md={4} sm={6} xs={12} >
    <div  className="bodycard">
      
      <Link to={`/events/${category}`}>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia className={styles.media} image={props.img} />
        <CardContent className={styles.cardcontent} >
          <TextInfoContent
            heading={props.name}
            classes={contentStyles}
          />
          <Button style={{background: "#8a39e1", fontSize: "15px",padding: "4px", color: "white", borderRadius: "10px", textTransform: "none"}}>
            Know More
          </Button>
        </CardContent>
      </Card>
      </Link>
      
    </div>
    </Col>
  );
}

export default CardsCat;
