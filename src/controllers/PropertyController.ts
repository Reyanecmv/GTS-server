import {Request, Response} from 'express';
import { PropertyService } from '../providers/PropertyService'

const propertyService = PropertyService.getInstance();


//Return all alerts form database.
export let allProperties = (req: Request, res: Response) => {
  propertyService.get().then(response => {
    res.send(response);
  })
}

//Add alert
export let addProperty = (req: Request, res: Response) => {
     res.send(propertyService.insert(req.body));
}

export let deleteProperty = (req: Request, res: Response) => {
  res.send(propertyService.remove(req.query));
}
