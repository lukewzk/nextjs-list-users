import styled from "@mui/material/styles/styled";
import Colors from "../../colors/colors";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";

export const DialogContentStyled = styled(DialogContent)({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  columnGap: "1rem",
});

export const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    //
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    borderRadius: "0.5rem",
    padding: "1.5rem",
  },
}));

export const BoxStyled = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: "2rem",
  padding: "0 1.5rem",
  alignItems: "center",
});

export const TextBlack = styled("p")({
  fontSize: "0.875rem",
  marginBottom: "0.5rem",
  color: Colors.black,
});

export const TextGrey = styled("p")({
  fontSize: "0.875rem",
  marginBottom: "0.5rem",
  color: Colors.secondaryGrey,
});

export const NameText = styled("h5")((props) => ({
  fontSize: "2rem",
  color: Colors.black,
  fontWeight: "700",
  margin: "0",

  [props.theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
}));
