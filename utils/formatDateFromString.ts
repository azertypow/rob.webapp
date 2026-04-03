export function formatDateFromString(date: string) {

    const dateInstance = new Date(date)

    return {
        'year': dateInstance.getFullYear()
    }
}

export function formatDateWithAndStart(dateStart?: string, dateEnd?: string): string {
  const dateStartYear = dateStart ? new Date(dateStart).getFullYear() : null
  const dateEndYear   = dateEnd ? new Date(dateEnd).getFullYear()     : null

  if( !dateStartYear && !dateEndYear) return 'Ongoing'
  else if( !dateStartYear) return `${dateEndYear}`
  else if( !dateEndYear) return `${dateStartYear} – ⁂`
  else if( dateStartYear === dateEndYear) return `${dateStartYear}`
  return `${dateStartYear} – ${dateEndYear.toString().slice(-2)}`
}
