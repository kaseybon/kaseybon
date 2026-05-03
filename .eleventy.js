module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/public": "." });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src/pages",
      output: "dist"
    }
  }
};
