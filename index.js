document.addEventListener('DOMContentLoaded', function () {
  
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const salesData = [5000, 9500, 3000, 4500, 1000];

    const ctxBar = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Monthly Sales',
                data: salesData,
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });

});
