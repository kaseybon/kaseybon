const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/public": "." });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents));


  return {
    dir: {
      input: "src/pages",
      output: "dist"
    }
  }
};
