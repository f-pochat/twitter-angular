export type ErrorResponse = {
  error: {
    message: string;
    errors?: Error[],
    code: number
  }
}

type Error = {
  constraints: {
    [key: string]: string
  },
  property: string
}
