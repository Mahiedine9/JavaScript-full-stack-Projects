const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authentication.middleware');

const userController = require('../controllers/user.controller');

router.get('/', userController.home );
router.get('/me', authMiddleware.validToken, userController.me);
router.put('/me', authMiddleware.validToken, userController.update);
router.post('/takeTicket/:showId/:userId', userController.takeTicket);
router.get('/tickets/:user_id', userController.tickets);
router.delete('/removeTicket/:ticketId/:userId/:showId',  userController.removeTicket);




module.exports = router;
