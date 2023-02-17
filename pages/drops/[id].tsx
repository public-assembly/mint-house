import { VStack } from "@chakra-ui/react";
import DropInfoBox from "@/components/DropInfoBox";
import DropCarousel from "@/components/DropCarousel";

const MintPage = () => {
  return (
    <VStack
      h="100%"
      justifyContent={["flex-start", null, null, "space-between"]}
    >
      <DropCarousel />
      <DropInfoBox />
    </VStack>
  );
};

export default MintPage;
