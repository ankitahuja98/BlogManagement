import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog } from "../store/blogSlice";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function ResponsiveDialog({ Dailog, setDailog }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blog = useSelector((state) =>
    state.blogs.blogs.find((b) => b.id === id)
  );

  const handleClose = () => {
    setDailog(false);
  };

  const deletefunc=()=> {
    dispatch(deleteBlog(blog.id));
    toast.success("Blog deleted successfully");
    navigate("/");
  }

  return (
    <>
      <Dialog
        open={Dailog}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText style={{ color: "black", fontWeight: "600" }}>
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            style={{
              color: "black",
              fontWeight: "600",
              border: "2px solid black",
            }}
          >
            No
          </Button>
          <Button
            onClick={deletefunc}
            autoFocus
            style={{ color: "red", fontWeight: "600", border: "2px solid red" }}
          >
            Yes, Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
