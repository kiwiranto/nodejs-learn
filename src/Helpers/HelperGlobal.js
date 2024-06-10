export const formatResponse = ({ code, data, errorMessage, status }) => {
  return {
    status: status ?? true,
    error_message: errorMessage ?? "",
    code: code ?? "",
    data: data ?? null
  }
}
