$(document).ready(function() {
    $('#donation-form').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get donation amount from the form
        let amount = $('#amount').val();
        if ($('#custom-amount').val() !== '') {
            amount = $('#custom-amount').val();
        }

        // Send AJAX request to donate
        // $.ajax({
        //     url: 'http://localhost:3001/api/donations', // Specify the URL for your donation endpoint
        //     method: 'POST',
        //     data: { amount: amount },
        //     success: function(response) {
        //         // Update the current total on success
        //         $('#current-total').text(response.totalDonations);
        //     },
        //     error: function(err) {
        //         console.error('Error:', err);
        //     }
        // });
        fetch('/api/donation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount }),
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            $('#current-total').text(`$${data.amount}`);
        })
    });
});