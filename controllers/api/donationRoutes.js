const router = require('express').Router();

// Import your Donation model if you have one
const { Donation } = require('../../models');

// Route to handle donations
console.log("Donation route");
router.post('/', async (req, res) => {
  try {
    // Extract donation information from request body
    const { amount } = req.body;

    // Create a new donation in the database
    const newDonation = await Donation.create({
      amount,
    });

    // Respond with a success message or the new donation object
    // res.status(200).json(newDonation);
  } catch (err) {
    // Handle any errors
    console.error(err, "Error in donation route");
    res.status(500).json(err);
  }
});
router.get('/alldonations', async (req, res) => {
  try {
    const donationData = await Donation.findAll();
    // const totalDonations = parseInt(donationData.reduce((total, donation) => total + donation.amount, 0));
    res.status(200).json({ donationData });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;