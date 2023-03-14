import {
  useToast as useChakraToast,
  ToastProps,
  AlertStatus,
} from '@chakra-ui/react';

const ToastBase = ({
  toast,
  title,
  description,
  status,
  id,
  duration,
  isClosable,
}: ToastProps & { status: AlertStatus; toast: any }) => {
  toast({
    title,
    description,
    status,
    id,
    duration: duration ?? 3000,
    isClosable: isClosable ?? true,
    position: 'top-right',
    variant: 'solid',
    // render
  });
};

const useToast = () => {
  const toast = useChakraToast();

  return {
    success(props: ToastProps) {
      ToastBase({ ...props, status: 'success', toast });
    },
    error(props: ToastProps) {
      ToastBase({ ...props, status: 'error', toast });
    },
    warning(props: ToastProps) {
      ToastBase({ ...props, status: 'warning', toast });
    },
    info(props: ToastProps) {
      ToastBase({ ...props, status: 'info', toast });
    },
  };
};

export default useToast;
