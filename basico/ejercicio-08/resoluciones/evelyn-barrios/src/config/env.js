export const config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  apiKey: process.env.API_KEY || 'default_dev_key',
  speedUnit: process.env.MAX_SPEED_UNIT || 'kmh'
};
