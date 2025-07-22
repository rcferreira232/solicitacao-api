type Env = {
  port: number;
};

export const env: Env = {
  port: Number(process.env.PORT) || NaN,
};
