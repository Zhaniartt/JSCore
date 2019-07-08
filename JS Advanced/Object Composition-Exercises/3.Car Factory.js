function solve(params) {
    let volume;
    switch (params.power) {
        case 90:
            volume = 1800
            break;
        case 120:
            volume = 2400
            break;
        case 200:
        volume = 3500
        break;
    }   
    const carriages = {
        hatchback: { type: 'hatchback', color: params.color },
        coupe: { type: 'coupe', color: params.color }
      }
    const wheels =Array.from({ length: 4 }, () =>
    params.wheelsize % 2 === 1 ? params.wheelsize : params.wheelsize - 1
  )
  return {
      model:params.model,
      engine:{power: params.power,volume},
      carriage:carriages[params.carriage],
      wheels
  }
}
console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }))