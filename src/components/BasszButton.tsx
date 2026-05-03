import { Button, styled, type ButtonProps } from '@mui/material';

type BasszButtonProps = ButtonProps & React.ComponentPropsWithoutRef<'a'>;

const BasszButton = styled(Button)<BasszButtonProps>({
  fontSize: '1.5rem',
  backgroundColor: '#d40201',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#a30101',
  },
  '&.Mui-disabled': {
    backgroundColor: '#bdbdbd',
    color: '#fff',
  },
  '&.Mui-disabled:hover': {
    backgroundColor: '#bdbdbd',
  },
});

export default BasszButton;
