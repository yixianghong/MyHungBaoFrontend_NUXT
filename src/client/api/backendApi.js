const API_MODULE = `/api`

export function getNews(api) {
    return async function () {
        const path = `${API_MODULE}/getNews`
        try {
            const { data } = await api.get(path)
            if (data.status !== 'success') {
                return Promise.reject(data)
            }
            return data.data
        } catch (err) {
            return Promise.reject(err)
        }
    }
}


