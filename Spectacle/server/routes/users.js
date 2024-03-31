const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authentication.middleware');

const userController = require('../controllers/user.controller');

router.get('/', userController.home );
router.get('/me', authMiddleware.validToken, userController.me);
router.put('/me', authMiddleware.validToken, userController.update);
router.post('/takeTicket/:showId/:userId', authMiddleware.validToken, userController.takeTicket);
router.get('/tickets/:user_id',authMiddleware.validToken, userController.tickets);
router.delete('/removeTicket/:ticketId/:userId', authMiddleware.validToken, userController.removeTicket);




module.exports = router;
