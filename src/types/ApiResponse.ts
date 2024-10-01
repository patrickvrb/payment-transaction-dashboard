export type ApiResponse<T> = {
    code: number,
    errorMessage?: string,
    response: T
}