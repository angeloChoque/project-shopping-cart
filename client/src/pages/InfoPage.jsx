import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Link,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { CiCreditCard1 } from "react-icons/ci";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IoHammerOutline } from "react-icons/io5";
import { MdOutlineMemory } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { CiBatteryFull } from "react-icons/ci";
import { IoIosFingerPrint } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductRequest } from "../api/products";
import { useShoppingContext } from "../context/shoppingContext";

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

const InfoPage = () => {
  const value = 3.5;
  const [imageHeight, setImageHeight] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedSize, setSelectedSize] = useState(""); 

  const params = useParams();
  const [products, setProducts] = useState([]);
  const imgRef = useRef(null);
  const { product } = useShoppingContext();

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const aspectRatio = 16 / 9;
      const calculatedWidth = Math.min(700, windowWidth * 0.8);
      const calculatedHeight = calculatedWidth / aspectRatio;
      setImageHeight(calculatedHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (params.id && product.length > 0) {
      const selected = product.find((item) => item._id === params.id);
      setSelectedProduct(selected);
    }
  }, [params.id, product]);

  useEffect(() => {
    if (params.id) {
      getProductRequest(params.id)
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    }
  }, [params.id]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <Container>
      <Box mb={6} mt={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="/">
            Shop
          </Link>
          <Link underline="hover" href="/">
            Phone
          </Link>
          <Typography color="text.primary">{products.NameProduct}</Typography>
        </Breadcrumbs>
      </Box>
      <Paper sx={{ borderRadius: "12px", p: 2 }}>
        <Grid container spacing={5} direction={"row"}>
          <Grid item xs={12} md={7.5}>
            <Grid container direction={"column"}>
              <Grid item xs={12}>
                <img
                  ref={imgRef}
                  src={selectedProduct.imageUrl}
                  style={{
                    maxWidth: "100%",
                    height: imageHeight,
                    objectFit: "cover",
                  }}
                />
              </Grid>
              <Divider sx={{ mt: 5 }} />
              <Grid item xs={12}>
                <Accordion sx={{ boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ fontSize: "1.2rem" }}
                  >
                    Product Features:
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={2}>
                      <Grid item xs={12} xl={6}>
                        <Box display="flex" alignItems="center">
                          <FaMobileScreenButton
                            style={{ marginRight: 8, fontSize: "20px" }}
                          />
                          <Typography>Brand: {products.Brand}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mt={2}>
                          <IoHammerOutline style={{ marginRight: 8 }} />
                          <Typography>Material: {products.Material}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mt={2}>
                          <IoIosFingerPrint style={{ marginRight: 8 }} />
                          <Typography>
                            FingerprintSensor:{" "}
                            {products.FingerprintSensor ? "sí" : "no"}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} xl={6}>
                        <Box display="flex" alignItems="center">
                          <MdOutlineMemory style={{ marginRight: 8 }} />
                          <Typography>Memory: {products.Memory}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mt={2}>
                          <IoPhonePortrait style={{ marginRight: 8 }} />
                          <Typography>Camera: {products.Camera}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mt={2}>
                          <CiBatteryFull style={{ marginRight: 8 }} />
                          <Typography>Battery: {products.Battery}</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ fontSize: "1.2rem" }}
                  >
                    Description:
                  </AccordionSummary>
                  <AccordionDetails>{products.Description}</AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4.5}>
            <Grid container direction={"column"}>
              <Grid item>
                <Paper sx={{ borderRadius: "12px", p: 2 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="body2" color={"rgba(0,0,0,.55)"}>
                      New | 40 sold
                    </Typography>
                    <Typography fontSize={"22px"} fontWeight={"bold"}>
                      {products.NameProduct} - {products.characteristics}
                    </Typography>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography
                        variant="body2"
                        color={"rgba(0,0,0,.55)"}
                        sx={{ mr: 1, mt: 0.4 }}
                      >
                        {labels[value]}
                      </Typography>
                      <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        icon={
                          <StarIcon
                            style={{ fontSize: "16px", color: "blue" }}
                          />
                        }
                        emptyIcon={
                          <StarIcon
                            style={{ fontSize: "16px", opacity: 0.55 }}
                          />
                        }
                      />
                      <Typography
                        variant="body2"
                        color={"rgba(0,0,0,.55)"}
                        sx={{ ml: 1, mt: 0.4 }}
                      >
                        (6)
                      </Typography>
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                      <Typography fontSize={"36px"}>
                        ${products.Price}
                      </Typography>
                      <Typography fontSize={"18px"} color={"#00a650"} ml={1}>
                        34% OFF
                      </Typography>
                    </Box>
                    <Box
                      pt={2}
                      alignItems={"flex-start"}
                      display={"flex"}
                      flexDirection={"row"}
                    >
                      <CiCreditCard1 style={{ fontSize: "22px" }} />
                      <Box display={"flex"} flexDirection={"column"} ml={1}>
                        <Typography fontSize={"16px"}>
                          12 installments
                        </Typography>
                        <Stack flexDirection={"row"}>
                          <FaCcVisa
                            style={{ fontSize: "36px", marginRight: 8 }}
                          />
                          <FaCcMastercard style={{ fontSize: "36px" }} />
                        </Stack>
                        <Link sx={{ textDecoration: "none" }} fontSize={"14px"}>
                          more information
                        </Link>
                      </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} pt={2}>
                      <Typography fontSize={"15px"}>
                        <strong style={{ color: "#00a650" }}>
                          Free shipping{" "}
                        </strong>
                        nationwide
                      </Typography>
                      <Typography fontSize={"14px"} color={"rgba(0,0,0,.55)"}>
                        know the times and ways of shipment.
                      </Typography>
                      <Link sx={{ textDecoration: "none" }} fontSize={"15px"}>
                        calculate when it arrives.
                      </Link>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography fontSize={"15px"}>
                        <strong style={{ color: "#00a650" }}>
                          Free return{" "}
                        </strong>
                      </Typography>
                      <Typography fontSize={"14px"} color={"rgba(0,0,0,.55)"}>
                        You have 30 days from the time you receive it.
                      </Typography>
                      <Link sx={{ textDecoration: "none" }} fontSize={"15px"}>
                        learn more.
                      </Link>
                    </Box>
                    <Typography fontSize={18} py={3}>
                      Color: <strong> IE5680</strong>
                    </Typography>
                    <Box display={"flex"}>
                      <Typography fontSize={18}>sizes:</Typography>
                      <strong style={{ marginLeft: 8, fontSize: 18 }}>
                        {selectedSize || "None"}{" "}
                      </strong>
                    </Box>
                    <FormControl sx={{ py: 3 }} fullWidth>
                      <Select
                        labelId="select-size-label"
                        fullWidth
                        sx={{ borderRadius: ".375em" }}
                        value={selectedSize}
                        onChange={handleSizeChange} 
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Small">Small</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Large">Large</MenuItem>
                      </Select>
                      <Box mt={1} display={"flex"}>
                        <FaMobileScreenButton />
                        <Typography variant="body2" color="text.secondary">
                          Choose the size
                        </Typography>
                      </Box>
                    </FormControl>
                    <Button
                      variant="contained"
                      sx={{ py: 1.5, textTransform: "none" }}
                    >
                      Buy Now
                    </Button>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default InfoPage;
