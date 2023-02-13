const Card = {
  baseStyles: (props: any) => ({
    // borderRadius: props.borderRadius || 8,
    body: {
      p: props.p || props.padding || 4,
    },
  }),
  variants: {
    elevated: (props: any) => ({
      container: {
        bg: 'blackAlpha.100',
        borderRadius: props.borderRadius || 8,
      },
    }),
    outline: (props: any) => ({
      container: {
        bg: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: props.borderColor || 'blackAlpha.300',
        borderRadius: props.borderRadius || 15,
        overflow: 'hidden',
      },
    }),
    ghost: (props: any) => ({
      container: {
        bg: 'white',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: props.borderColor || 'blackAlpha.200',
        borderRadius: props.borderRadius || 15,
        overflow: 'hidden',
        boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.15)',
      },
    }),
    hoverGhost: (props: any) => ({
      container: {
        bg: 'white',
        borderRadius: props.borderRadius || 15,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: props.borderColor || 'gray.200',
        overflow: 'hidden',
        _hover: {
          boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.10)',
        },
      },
    }),
  },
  defaultProps: {
    variant: 'elevated',
    // p: 4,
  },
};

export default Card;
