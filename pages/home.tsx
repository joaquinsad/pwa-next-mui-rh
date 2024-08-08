import Home from "@/src/home/Home";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Icon, Link, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Email,
  Face,
  Face2Rounded,
  InsertChart,
  InsertComment,
  PersonOffOutlined,
  PersonOutline,
  SearchRounded,
} from "@mui/icons-material";

export default function BasicTextFields() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">BUSCAR</Button>
      <h4>REVISA NUESTRAS HABITACIONES</h4>
      <Stack direction="row" spacing={3}>
        <img
          src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="habitacion 1"
          width={450}
          height={250}
        />
        <img
          src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="habitacion 1"
          width={450}
          height={250}
        />
        <img
          src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="habitacion 1"
          width={450}
          height={250}
        />
      </Stack>
      <h4>MAS HABITACIONES</h4>
      <img
        src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="habitacion 1"
        width={450}
        height={250}
      />
      <Stack direction="row" spacing={3}>
        <BottomNavigationAction label="Search" icon={<SearchRounded />} />
        <BottomNavigationAction label="mail" icon={<Email />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Perfil" icon={<Face />} />
      </Stack>
    </Stack>
  );
}
