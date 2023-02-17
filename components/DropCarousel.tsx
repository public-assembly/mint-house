import { Box, Image } from "@chakra-ui/react";

const DropCarousel = () => {
  return (
    <Box px="2rem" mb="2rem">
        <Image
          minH={200}
          maxH={[400, 500, 650, 1000]}
          width="auto"
          overflow="hidden"
          border="1px solid black"
          borderRadius="9999px"
          sx={{ aspectRatio: 1, boxShadow: "2px 2px 5px #0000008A" }}
          src="/fallback_media.webp"
          alt="Image"
        />
    </Box>
  );
};

export default DropCarousel;
