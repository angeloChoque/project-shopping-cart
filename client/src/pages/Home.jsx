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
import { useNavigate } from "react-router-dom";
import { useShoppingContext } from "../context/shoppingContext";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 500 }, items: 2 },
  mobile: { breakpoint: { max: 500, min: 0 }, items: 1 },
};

const Home = () => {
  const navigate = useNavigate();
  const { addToCart, product } = useShoppingContext();

  const smartphones = product.filter(
    (Product) => Product.TypeProduct === "Smartphone"
  );
  const televisions = product.filter(
    (Product) => Product.TypeProduct === "Television"
  );

  return (
    <>
      <Carousel />
      <Container>
        <Typography variant="h4" py={4}>
          Top Sellers - Smartphones
        </Typography>
        <Carousels responsive={responsive}>
          {smartphones.map((product) => (
            <Card key={product._id} sx={{ maxWidth: 350 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={product.imageUrl}
                title={product.NameProduct}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.NameProduct}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.characteristics}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "end" }}>
                <Button
                  variant="contained"
                  onClick={() => navigate(`/info/${product._id}`)}
                >
                  ${product.Price}
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCartIcon />
                </Button>
              </CardActions>
            </Card>
          ))}
        </Carousels>
        <Typography variant="h4" my={5}>
          TV´s
        </Typography>
        <Carousels responsive={responsive} swipeable>
          {televisions.map((product) => (
            <Card key={product._id} sx={{ maxWidth: 350 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={product.imageUrl}
                title={product.NameProduct}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.NameProduct}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.characteristics}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "end" }}>
                <Button
                  variant="contained"
                  onClick={() => navigate(`/info/${product._id}`)}
                >
                  ${product.Price}
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCartIcon />
                </Button>
              </CardActions>
            </Card>
          ))}
        </Carousels>
      </Container>
    </>
  );
};

export default Home;
