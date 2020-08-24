/* eslint-disable no-unused-vars */

import { SkynetClient } from "./client.js";
import { defaultOptions } from "./utils.js";

const defaultConvertOptions = {
  ...defaultOptions("/skynet/skyfile"),
};

SkynetClient.prototype.convert = async function (srcSiaPath, destSiaPath, customOptions = {}) {
  const opts = { ...defaultConvertOptions, ...this.customOptions, ...customOptions };

  throw new Error("Unimplemented");
};
