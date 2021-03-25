

import { Router } from 'express';

import HomeController from '../controllers/Api/Home';
import * as alertController from '../controllers/AlertController';
import * as propertyController from '../controllers/PropertyController';

const router = Router();

router.get('/', HomeController.index);

router.get('/alerts', alertController.allAlerts);
router.put('/alert', alertController.addAlert);
router.get('/properties', propertyController.allProperties);
router.put('/property', propertyController.addProperty);
router.delete('/property', propertyController.deleteProperty);

export default router;
