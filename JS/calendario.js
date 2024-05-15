// calendario

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: ['dayGrid'],
      // opciones de calendario aquí
      
      locale: 'es',
      selectable: true,
      select: function(info) {
        // Maneja el evento de selección de fecha aquí
        // Por ejemplo, podrías mostrar un modal para que el usuario agregue un evento a esa fecha
        alert('Seleccionaste: ' + info.startStr + ' hasta ' + info.endStr);
      }
    });
  
    calendar.render();
  });
  