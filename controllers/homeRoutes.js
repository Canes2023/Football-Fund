const routes = require('express').Router();
const { Project, User, Donation } = require('../models');

routes.get('/', async (req, res) => {
  try {
    const donationData = await Donation.findAll();
    const donations = donationData.map((donation) => donation.get({ plain: true }));
    // const totalDonations = parseInt(donations.reduce((total, donation) => total + donation.amount,  0));
    // res.render('home', { totalDonations });
    res.render('home', { donations });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = routes;