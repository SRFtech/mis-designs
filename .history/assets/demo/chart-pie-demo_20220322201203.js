// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Eastlands", "Ngewe", "Kangemi", "TatuCity", "Mathare", "Kibera", "Korogocho"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32, 12.0, 6.05, 13.06],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#7225A3', '#0b2811', '#873a', '#28a745'],
    }],
  },
});
