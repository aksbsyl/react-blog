import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { Scrollbars } from "react-custom-scrollbars";

import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";
import {
  FavoriteBorder,
  FormatListBulletedOutlined,
  ImageAspectRatio,
} from "@material-ui/icons";
import image from "../blog/blog1.jpg";
import { BlogModal } from "./BlogModal";
import IconButton from "@material-ui/core/IconButton";
import i from "./Blog.css";
import { ToggleButton } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    // backgroundPosition: "center",
    // display: "flex",
    // position: "center",
    // justifyContent: "center",
    // alignItems: "center",
    // color: "#3370ff", //Used blue contactus
    // color: "#357EC7", //Windows blue

    color: "#6698FF",
    fontWeight: 1000,
    font: "Nunito Sans",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(${image}) `,
    border: "1px solid white",
    // width: "650px",
    height: "550px",
    backgroundSize: "cover",
    backgroundPosition: "center",

    // padding: 0,

    display: "flex",
    position: "center",
    justifyContent: "center",
    // alignItems: "center",
    color: "#3370ff",
    fontSize: "1em",
    fontWeight: 800,

    [theme.breakpoints.down("sm")]: {
      height: 0,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    "@media all and (-ms-high-contrast: none)": {
      display: "none",
    },
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const blogDetails = [
  {
    name: "Yurnero Sven ",
    imageurl:
      "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    cardmediatitle: "Contemplative Reptile",
    title: "Coding- A way of life",
    shortdescription:
      " The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun.",
    description:
      "    The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun. The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun. The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun. The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun. The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun. The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun. The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun. The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun. The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun.",
    avatarsrc:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    date: "August 5, 2020",
    email: "yurnero@gmail.com",
    usestate: "false",
  },
  {
    name: "Mira Chan ",
    imageurl:
      "https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    cardmediatitle: "Contemplative Reptile",
    title: "React Router",
    shortdescription:
      " The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun.",
    description:
      "    The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun.",
    avatarsrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
    date: "August 5, 2020",
    email: "mira@gmail.com",
  },
  {
    name: "Nami Chan",
    imageurl:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    cardmediatitle: "Contemplative Reptile",
    title: "Life is beautiful",
    shortdescription:
      " The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun.",
    description:
      "    The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun.",
    avatarsrc:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    date: "August 5, 2020",
    email: "nami@gmail.com",
  },
  {
    name: "Invo ker",
    imageurl:
      "https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    cardmediatitle: "Contemplative Reptile",
    title: "Modern day life",
    shortdescription:
      " The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun.",
    description:
      "    The most traditional page on any blog is the About page. This page tells new visitors to your blog what it is about, who you are and why you have a blog about theparticular topic. Depending on your niche and your    style, the information you provide can be “all business” or personal and fun.",
    avatarsrc:
      "https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
    date: "August 5, 2020",
    email: "voker@gmail.com",
  },
];

export default function Blog() {
  const classes = useStyles();

  // const [activeTab, setActiveTab] = useState("1");

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  function callOpenModal(index) {
    setSelectedId(index);
  }

  const [showButton, setShowButton] = useState(false);
  const clickButton = () => {
    setShowButton((prev) => !prev);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="Blog">
      <AppBar className={classes.appBar} position="static">
        {/* <Toolbar> */}
        <Box className={classes.appBar} mx="auto">
          <Typography variant="h4" className={classes.appBar}>
            Nepal Academy Blog
          </Typography>
        </Box>
        {/* </Toolbar> */}
      </AppBar>
      <Box className={classes.hero} mx="auto">
        <Typography variant="h4"></Typography>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {blogDetails.map((blogwriters, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key="index">
                <Card>
                  <CardActionArea
                    className={classes.card}
                    onClick={() => {
                      openModal();
                      callOpenModal(index);
                    }}
                  >
                    <CardMedia
                      className={classes.media}
                      image={blogwriters.imageurl}
                      title={blogwriters.cardmediatitle}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {blogwriters.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {blogwriters.shortdescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Avatar src={blogwriters.avatarsrc} />
                      <Box ml={2}>
                        <Typography variant="subtitle2" component="p">
                          {blogwriters.name}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          component="p"
                        >
                          {blogwriters.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <IconButton>
                        <FavoriteBorder></FavoriteBorder>
                      </IconButton>

                      {/* <div class="container">
                        <i
                          id="btn"
                          onClick={handleClick}
                          className={click ? "fas fa-heart" : "far fa-heart"}
                        ></i>
                      </div> */}
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={3} />
        </Box>
      </Container>
      <div>
        <BlogModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      </div>
    </div>
  );
}
