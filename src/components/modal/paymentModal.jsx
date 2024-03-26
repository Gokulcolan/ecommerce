import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PaymentDialog(props) {
  const { open, setOpen } = props;
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const thankRedirect = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div style={{ textAlign: "center", padding: "20px 20px" }}>
          <CheckCircleOutlineIcon sx={{ fontSize: "80px", color: "green" }} />
          <DialogTitle> Your Order has been placed </DialogTitle>

          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Thanks for shopping with us
            </DialogContentText>
            <DialogContentText id="alert-dialog-slide-description">
              sit back and relax as your order is on its way
            </DialogContentText>
          </DialogContent>
          <button onClick={thankRedirect} className="modalBtn">
            Thank you
          </button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
