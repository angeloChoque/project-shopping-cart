import {
  Box,
  Breadcrumbs,
  Button,
  Container,
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

  return (
    <Container>
      <Box mb={6} mt={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Adidas</Typography>
        </Breadcrumbs>
      </Box>
      <Paper sx={{ borderRadius: "12px", p: 2 }}>
        <Grid container spacing={5} direction={"row"}>
          <Grid item xl={7.5}>
            <Grid container direction={"column"}>
              <Grid item>
                <img src="../../img_phone.jpg" width={750} height={500} />
              </Grid>
              <Grid item>sss</Grid>
            </Grid>
          </Grid>
          <Grid item xl={4.5}>
            <Grid container direction={"column"}>
              <Grid item>
                <Paper sx={{ borderRadius: "12px", p: 2 }}>
                  <Stack spacing={1.5}>
                    <Typography variant="body2" color={"rgba(0,0,0,.55)"}>
                      New | 40 sold
                    </Typography>
                    <Typography fontSize={"22px"} fontWeight={"bold"}>
                      Honor 50 Phone - 50gb 8g ram Model :48l9mn
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
                      <Typography fontSize={"36px"}>$/ 256</Typography>
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
                          {" "}
                          more information
                        </Link>
                      </Box>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} pt={2}>
                      <Typography fontSize={"15px"}>
                        <strong style={{ color: "#00a650" }}>
                          Free shipping{" "}
                        </strong>{" "}
                        nationwide
                      </Typography>
                      <Typography fontSize={"14px"} color={"rgba(0,0,0,.55)"}>
                        know the times and ways of shipment.{" "}
                      </Typography>
                      <Link sx={{ textDecoration: "none" }} fontSize={"15px"}>
                        calculate when it arrives.{" "}
                      </Link>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography fontSize={"15px"}>
                        <strong style={{ color: "#00a650" }}>
                          Free return{" "}
                        </strong>{" "}
                      </Typography>
                      <Typography fontSize={"14px"} color={"rgba(0,0,0,.55)"}>
                        You have 30 days from the time you receive it.{" "}
                      </Typography>
                      <Link sx={{ textDecoration: "none" }} fontSize={"15px"}>
                        learn more.{" "}
                      </Link>
                    </Box>
                    <Typography fontSize={18} py={3}>
                      Color: <strong> IE5680</strong>
                    </Typography>
                    <Box display={"flex"}>
                      <Typography fontSize={18}>sizes:</Typography>
                      <strong style={{ marginLeft: 8, fontSize: 18 }}>
                        {" "}
                        47
                      </strong>
                    </Box>
                    <FormControl sx={{ mt: 1 }} fullWidth>
                      <Select
                        labelId="select-size-label"
                        id="select-size"
                        fullWidth
                        sx={{ borderRadius: ".375em" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Small</MenuItem>
                        <MenuItem value={20}>Medium</MenuItem>
                        <MenuItem value={30}>Large</MenuItem>
                      </Select>
                      <Box mt={1} display={"flex"}>
                        <FaMobileScreenButton />
                        <Typography variant="body2" color="text.secondary">
                          Choose the size
                        </Typography>
                      </Box>
                    </FormControl>
                    <Box display={"flex"} py={4}>
                      <Typography>
                        Quantity:
                        </Typography>
                        un select
                    </Box>
                    <Button variant="contained">Buy Now</Button>
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
