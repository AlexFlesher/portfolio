document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        '"Comparison is the thief of joy." - Theodore Roosevelt',
        " 'You can't control the wind but you can adjust the sail' - Jim Rohn",
        " 'Life isn't about waiting for the storm to pass. It's about learning to dance in the rain' - Vivian Greene",
        " 'The best time to plant a tree was 20 years ago. The second best time is now' - Chinese Proverb",
    ];

    let currentIndex = 0;

    const quoteDisplay = document.getElementById('quote-display');
    const prevButton = document.getElementById('left-button').querySelector('img');
    const nextButton = document.getElementById('right-button').querySelector('img');

    function updateQuote(direction) {
        if (direction === 'next') {
            currentIndex += 1;
            if (currentIndex > quotes.length - 1) {
                currentIndex = 0;
            }
        } else {
            currentIndex -= 1;
            if (currentIndex < 0) {
                currentIndex = quotes.length - 1;
            }
        }

        quoteDisplay.querySelector('h1').innerText = quotes[currentIndex];
    }

    prevButton.addEventListener('click', () => updateQuote('prev'));
    nextButton.addEventListener('click', () => updateQuote('next'));

    quoteDisplay.querySelector('h1').innerText = quotes[currentIndex];
});
