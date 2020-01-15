import { API, cantUserInitial } from "../const/const"

export const getRandomUser = async () => {
    const response = await fetch(`${API.url}?results=${cantUserInitial}`)
    const response_1 = await response.json()
    return response_1
}