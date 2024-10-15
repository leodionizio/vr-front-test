type Config = {
  apiBaseUrl: string;
};

export const config: Config = {
  apiBaseUrl: process.env.BASE_URL || "http://localhost:3000",
};
