const announcementController = require('../controllers/announcementController');
const express = require('express');
const router = express.Router();

router.post('/announcements', announcementController.createAnnouncement);
router.get('/announcements', announcementController.getAllAnnouncements);
router.get('/announcements/:id', announcementController.getAnnouncement);
router.delete('/announcements/:id', announcementController.deleteAnnouncement);
module.exports = router;

