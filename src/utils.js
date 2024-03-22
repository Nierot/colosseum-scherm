class Utils {
  static date(date) {
    // Date is in format 'YYYY-MM-DD HH:MM:SS.000Z'
    // Return 'DD-MM-YYYY'

    const [year, month, day] = date.split(' ')[0].split('-')

    return `${day}-${month}-${year}`
  }
}