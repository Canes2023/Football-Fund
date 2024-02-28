const routes = require('express').Router();
const { Project, User, Donation } = require('../models');

routes.get('/', async (req, res) => {
  try {
    const donationData = await Donation.findAll({
      aggregate: ['SUM', 'amount', "totalDonations"],
    });
    const donations = donationData.map((donation) => donation.get({ plain: true }));
    // const totalDonations = parseInt(donations.reduce((total, donation) => total + donation.amount,  0));
    // res.render('home', { totalDonations });
    let totalDonations = 0;
    donations.forEach((donation) => {
      let num = parseInt(donation.amount);
      totalDonations += num;
    });
    res.render('home', { donations, totalDonations });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = routes;