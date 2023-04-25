import{Router} from "express";
import Productos from '../models/Productos';

const router = Router();

router.get('/', (req, res) => {
    res.render("index");
});

router.post("/productos/agregar", async ( req, res) =>{
    const productos = Productos(req.body);
     console.log(productos);
    res.send("Almacenado");
});

router.get("/update", (req, res) => {
    res.render("editar");
});


export default router;