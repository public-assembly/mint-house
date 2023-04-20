export const CONFIG = {
  appName: process.env.NEXT_PUBLIC_PROJECT_NAME,
  url: 'https://mint-house-two.vercel.app',
  ogImage: '/og-image.png',
  // headerLogo: Header,
  // footerLogo: Footer,
  shortName: process.env.NEXT_PUBLIC_PROJECT_NAME,
  headline: `create what's missing`,
  appDescription: 'onchain curation for new media',
  aboutSubHeading: '',
  footerLinks: {
    app: {
      title: process.env.NEXT_PUBLIC_PROJECT_NAME,
      links: [
        {
          value: 'https://www.public---assembly.com/',
          label: 'Website',
          image: '/pa-footer-white-logo.svg',
        },
      ],
    },
  },
};
