module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/css');
  eleventyConfig.addPassthroughCopy('./src/assets');

  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget('./src/css');

  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return dateObj;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
