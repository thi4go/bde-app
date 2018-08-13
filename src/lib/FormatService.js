

function formatDate (date) {

  let fDate = date.substring(0, 10)

  let day   = fDate.substring(8, 10)
  let month = getMonth(fDate.substring(5, 7))

  fDate = day + ' de ' + month

  return fDate
}


function getMonth (month) {
  switch (month) {

    case '01':
      return 'Janeiro'

    case '02':
      return 'Fevereiro'

    case '03':
      return 'Março'

    case '04':
      return 'Abril'

    case '05':
      return 'Maio'

    case '06':
      return 'Junho'

    case '07':
      return 'Julho'

    case '08':
      return 'Agosto'

    case '09':
      return 'Setembro'

    case '10':
      return 'Outubro'

    case '11':
      return 'Novembro'

    case '12':
      return 'Dezembro'
    
    default:
      return 'Invalid Month'
  }
}

export default {
  formatDate
}