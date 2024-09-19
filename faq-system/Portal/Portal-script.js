document.addEventListener('DOMContentLoaded', function() {
    const showMoreWeeklyButton = document.getElementById('show-more-weekly');
    const moreWeeklyTopics = document.getElementById('more-weekly-topics');
    const showMoreMonthlyButton = document.getElementById('show-more-monthly');
    const moreMonthlyTopics = document.getElementById('more-monthly-topics');

    showMoreWeeklyButton.addEventListener('click', function() {
        if (moreWeeklyTopics.style.display === 'none') {
            moreWeeklyTopics.style.display = 'block';
            showMoreWeeklyButton.textContent = '閉じる';
        } else {
            moreWeeklyTopics.style.display = 'none';
            showMoreWeeklyButton.textContent = 'もっと見る';
        }
    });

    showMoreMonthlyButton.addEventListener('click', function() {
        if (moreMonthlyTopics.style.display === 'none') {
            moreMonthlyTopics.style.display = 'block';
            showMoreMonthlyButton.textContent = '閉じる';
        } else {
            moreMonthlyTopics.style.display = 'none';
            showMoreMonthlyButton.textContent = 'もっと見る';
        }
    });
});
