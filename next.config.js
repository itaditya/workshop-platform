const rehypePrism = require('@mapbox/rehype-prism');
var mermaid = require('remark-mermaid');
const mdx = require('@next/mdx');

const withMDX = mdx({
  options: {
    remarkPlugins: [mermaid],
    rehypePlugins: [rehypePrism],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
