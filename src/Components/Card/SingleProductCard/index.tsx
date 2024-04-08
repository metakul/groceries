import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddToCartButton from '../../Buttons/AddToCartButton';
import { CartProduct } from '../../../utils/types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  modalTitle: string;
  modalContent: React.ReactNode;
  cartProduct:CartProduct
}

const SingleProduct: React.FC<CustomModalProps> = ({
  open,
  onClose,
  modalTitle,
  modalContent,
  cartProduct
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >

      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalTitle}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {modalContent}
        </Typography>
        <div className="h-9 w-[90px] flex justify-around">

      <AddToCartButton product={cartProduct}/>
        </div>
      </Box>
    </Modal>
  );
};

export default SingleProduct;
