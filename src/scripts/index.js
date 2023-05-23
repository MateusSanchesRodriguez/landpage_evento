AOS.init();

// 28/05/2023 as 15H

const dataDoEvento = new Date("May 28, 2023 15:00:00");
//const dataDoEvento = new Date("May 22, 2023 15:00:00");
const timeStampDoEvento = dataDoEvento.getTime();


const contadorDoEvento = setInterval(() => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaHoraEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaHoraEvento / diasEmMs)
    const horasAteOEvento = Math.floor((distanciaHoraEvento % diasEmMs) / horasEmMs)
    const minAteOEvento = Math.floor((distanciaHoraEvento % horasEmMs) / minutosEmMs)
    const secAteOEvento = Math.floor((distanciaHoraEvento % minutosEmMs) / 1000)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minAteOEvento}m ${secAteOEvento}s`

    if (distanciaHoraEvento < 0) {
        clearInterval(contadorDoEvento)
        document.getElementById('contador').remove()
        document.getElementById('expirado').innerHTML = 'acabou 😔'
    }
}, 1000);


