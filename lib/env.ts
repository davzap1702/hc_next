interface IEnv {
    base_url: string
}

export const env: IEnv = {
  base_url: process.env.NEXT_PUBLIC_API_URL!

};