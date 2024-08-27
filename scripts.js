document.getElementById('submitButton').addEventListener('click', function() {
    const nameInput = document.getElementById('teacherName').value.trim();
    const errorDiv = document.getElementById('error');
    const revealContent = document.getElementById('revealContent');
    const personalMessage = document.getElementById('personalMessage');

    if (nameInput === "") {
        errorDiv.classList.remove('hidden');
        revealContent.classList.add('hidden');
    } else {
        errorDiv.classList.add('hidden');

        // Personalized messages for specific names
        const messages = {
            "Deepshika": "Dear Mr. John, thank you for your unwavering support and guidance. You have truly made a difference in my life.",
            "Jane": "Dear Ms. Jane, your passion for teaching and dedication to your students are truly inspiring. Happy Teachers' Day!",
            "Smith": "Dear Professor Smith, your wisdom and encouragement have been a light in my journey. Thank you!"
            // Add more names and messages as needed
        };

        // Default message if the name is not in the list
        const defaultMessage = "Dear " + nameInput + ", thank you for being an amazing teacher! Happy Teachers' Day!";

        // Display the personalized message or default message
        personalMessage.textContent = messages[nameInput] || defaultMessage;

        revealContent.classList.remove('hidden');
    }
});
