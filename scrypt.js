document.addEventListener('DOMContentLoaded', () => {
    const donationForm = document.getElementById('donationForm');
    const totalDonationsElement = document.getElementById('totalDonations');
    let totalDonations = 0;

    donationForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (name && amount > 0) {
            // Update total donations
            totalDonations += amount;
            totalDonationsElement.textContent = `$${totalDonations.toFixed(2)}`;

            // Show a thank you message
            alert(`Thank you, ${name}, for your generous donation of $${amount.toFixed(2)}!`);

            // Reset the form
            donationForm.reset();
        } else {
            alert('Please enter a valid name and donation amount.');
        }
    });
});