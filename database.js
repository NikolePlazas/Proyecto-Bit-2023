import {connect} from "mongoose";

(async () => {
    try{
        const db = await connect ("mongodb://atlas-sql-642465c0f0d8547825d61578-yilcw.a.query.mongodb.net/QSD_2023_Prueba?ssl=true&authSource=admin/tiendaweb-mongo");
        console.log("Database connected to", db.connection.name);
    }catch (error){
        console.error(error);
    }
})();