const rehypePrism = require('@mapbox/rehype-prism');
const mdx = require('@next/mdx');

const withMDX = mdx({
  options: {
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
