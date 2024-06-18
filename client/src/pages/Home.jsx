import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Carousel from "../components/Carousel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "react-multi-carousel/lib/styles.css";
import Carousels from "react-multi-carousel";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Home = () => {
  return (
    <>
      <Carousel />
      <Container>
        <Typography variant="h4" py={4}>
          Top Sellers of the Week
        </Typography>
        <Carousels responsive={responsive} >
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../../carousel3_responsive.jpg"
              title="Phone"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                iPhone 15 Pro Max 256GB
              </Typography>
              <Typography variant="body2" color="text.secondary">
                128 GB - A17 Pro chip - 6 core GPU - 48MP Main camera - color:
                gold
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
              <Button variant="contained">$ 1099</Button>
              <Button variant="contained" size="small">
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../../carousel1_responsive.webp"
              title="Phone"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy S22
              </Typography>
              <Typography variant="body2" color="text.secondary">
                128 GB - A17 Pro chip - 6 core GPU - 48MP Main camera - color:
                gold
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
              <Button variant="contained">$ 1099</Button>
              <Button title="add to cart" variant="contained" size="small">
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../../img_phone.jpg"
              title="Phone"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Honor 70
              </Typography>
              <Typography variant="body2" color="text.secondary">
                128 GB - A17 Pro chip - 6 core GPU - 48MP Main camera - color:
                gold
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
              <Button href="/info" variant="contained">$ 999</Button>
              <Button title="add to cart" variant="contained" size="small">
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../../img_mackbook.webp"
              title="macbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                MacBook Air 5ta gen
              </Typography>
              <Typography variant="body2" color="text.secondary">
                128 GB - A17 Pro chip - 6 core GPU - 48MP Main camera - color:
                gold
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
              <Button variant="contained">$ 1599</Button>
              <Button title="add to cart" variant="contained" size="small">
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
        </Carousels>
        <Typography variant="h4" my={5}>
          TV´s
        </Typography>
        <Carousels responsive={responsive} swipeable>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../../tv_1.png"
              title="Phone"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                iPhone 15 Pro Max 256GB
              </Typography>
              <Typography variant="body2" color="text.secondary">
                128 GB - A17 Pro chip - 6 core GPU - 48MP Main camera - color:
                gold
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
              <Button variant="contained">$ 1099</Button>
              <Button variant="contained" size="small">
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../../tv_2.jpg"
              title="Phone"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Samsung Galaxy S22
              </Typography>
              <Typography variant="body2" color="text.secondary">
                128 GB - A17 Pro chip - 6 core GPU - 48MP Main camera - color:
                gold
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
              <Button variant="contained">$ 1099</Button>
              <Button title="add to cart" variant="contained" size="small">
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../../tv_3.png"
              title="Phone"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Honor 70
              </Typography>
              <Typography variant="body2" color="text.secondary">
                128 GB - A17 Pro chip - 6 core GPU - 48MP Main camera - color:
                gold
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
              <Button variant="contained">$ 999</Button>
              <Button title="add to cart" variant="contained" size="small">
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="../../img_mackbook.webp"
              title="macbook"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                MacBook Air 5ta gen
              </Typography>
              <Typography variant="body2" color="text.secondary">
                128 GB - A17 Pro chip - 6 core GPU - 48MP Main camera - color:
                gold
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "end" }}>
              <Button variant="contained">$ 1599</Button>
              <Button title="add to cart" variant="contained" size="small">
                <ShoppingCartIcon />
              </Button>
            </CardActions>
          </Card>
        </Carousels>
      </Container>
    </>
  );
};

export default Home;
