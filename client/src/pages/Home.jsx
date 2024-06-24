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
import { useEffect, useState } from "react";
import { getProductsRequest } from "../api/products";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const imageUrls = {
    Smartphone: [
      "carousel3_responsive.jpg",
      "carousel1_responsive.webp",
      "img_phone.jpg",
      "google_pixel.webp",
    ],
    Television: ["tv_1.png", "tv_2.jpg", "tv_3.png"],
  };

  useEffect(() => {
    getProductsRequest()
      .then((res) => {
        const updatedProducts = res.data.map((product, index) => {
          let imageUrl = "";
          if (imageUrls[product.TypeProduct]) {
            imageUrl =
              imageUrls[product.TypeProduct][
                index % imageUrls[product.TypeProduct].length
              ];
          }
          return {
            ...product,
            imageUrl,
          };
        });
        setProducts(updatedProducts);
      })
      .catch((err) => console.error(err));
  }, []);

  const smartphones = products.filter(
    (product) => product.TypeProduct === "Smartphone"
  );
  const televisions = products.filter(
    (product) => product.TypeProduct === "Television"
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
                <Button variant="contained" size="small">
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
                <Button variant="contained" size="small">
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
