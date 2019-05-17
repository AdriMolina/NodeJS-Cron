//Cron
// herramienta que te permite ejecutar algo en un horario.
// Esto se hace normalmente utilizando la sintaxis cron
const CronJob = require('cron').CronJob

/*
Rangos que puedes agregar en lugar de los *
Segundos: 0-59
Minutos: 0-59
Horas: 0-23
Día del mes: 1-31
Meses: 0-11 (enero-diciembre)
Día de la semana: 0-6 (dom-sáb)*/

const job = new CronJob('* * * * * *',() => {
    console.log('Veras este mensaje cada segundo');

}, null, true, 'America/Mexico');

job.start();
job.stop();