import data from '../../../config.json' with { type: "json" };

type ConfigData = typeof data;

const config: ConfigData = data;

export default config