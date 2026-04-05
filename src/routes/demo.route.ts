import { Route} from "express"

const router = new Route()


router.route("/").get((req,res)=>res.json({message:"Hello"}))