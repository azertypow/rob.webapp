export function formatDateFromString(date: string) {

    const dateInstance = new Date(date)

    return {
        'year': dateInstance.getFullYear()
    }
}
