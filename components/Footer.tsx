import { CONFIG } from '@/config';
import { HStack, Link } from '@chakra-ui/react';
import _ from 'lodash';
import Image from 'next/image';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <HStack justifyContent={'center'} alignItems='center' h='4rem' spacing={10}>
      {_.map(_.get(CONFIG, 'footerLinks.app.links'), (link) => (
        <Link as={NextLink} href={link.value} target='_blank' passHref>
          <Image
            src={link.image}
            width={50}
            height={50}
            alt='public assembly logo'
          />
        </Link>
      ))}
    </HStack>
  );
};

export default Footer;
