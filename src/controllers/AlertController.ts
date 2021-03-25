import {Request, Response} from 'express';
import { AlertService } from '../providers/AlertService'

const alertService = AlertService.getInstance();


//Return all alerts form database.
export let allAlerts = (req: Request, res: Response) => {
  alertService.get().then(response => {
    res.send(response);
  })
}

//Add alert
export let addAlert = (req: Request, res: Response) => {
     console.log(req.body);
     res.send(alertService.insert(req.body));
}
