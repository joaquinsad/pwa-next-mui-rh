import HomePage from "@/src/home/Home";
import { Stack } from "@mui/material";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function Home() {
  return (
    <Stack>
      <div className="content">
        <Image
          src={
            "https://acdn.mitiendanube.com/stores/390/473/products/casitas-nordicas-lisas-x41-4c4778322e1a9e34ed16346605617253-1024-1024.jpg"
          }
          alt={"casita"}
          width={390}
          height={300}
        />
      </div>
      <div className="content">
        <h3>hola bienvenido a mi pagina web api</h3>
      </div>
      <div className="content">
        <Button variant="contained" size="small">
          siguiente
        </Button>
      </div>
      <footer className="content">
        <h5>¿no quieres ver esto?</h5>
        <Link href={""}>SALTAR</Link>
      </footer>
    </Stack>
  );
}
