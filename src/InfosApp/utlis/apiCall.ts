type ApiConfig<P = {}> = { // payload - P
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: P
}

export const apiCall = async <R, P = {}>(url: string, options?: ApiConfig<P>) => { // response - R (odpowiedź) , payload - P (załącznik do request)
    const baseUrl = 'http://localhost:3000';

    const response = await fetch(`${baseUrl}/${url}`, {
        method: options?.method || 'GET',
        body: options?.body ? JSON.stringify(options.body) : undefined
    });
    return response.json() as Promise<R>
} 