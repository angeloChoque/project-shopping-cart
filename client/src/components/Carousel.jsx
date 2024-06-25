import { useState, useEffect } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useMediaQuery from "@mui/material/useMediaQuery";

const Carousel = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["carousel1.webp", "carousel2.webp", "carousel3.webp",
  ];
  const imagesResponsive = [
    "carousel1_responsive.webp",
    "carousel2_responsive.webp",
    "carousel3_responsive.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <Stack spacing={2} alignItems="center" bgcolor="white">
      <Stack direction="row" spacing={-5} alignItems="center">
        <IconButton
          sx={{
            backgroundColor: "Black",
            color: "White",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
          onClick={prevImage}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Box maxWidth="100%">
          <img
            src={(matches ? imagesResponsive : images)[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: "100%" }}
          />
        </Box>
        <IconButton
          sx={{
            backgroundColor: "Black",
            color: "White",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
          onClick={nextImage}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
export default Carousel;
