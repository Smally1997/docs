module.exports = [
  {
    title: "Getting Started",
    collapsable: false,
    children: ["introduction"]
  },
  {
    title: "Houses",
    collapsable: false,
    children: prefix("houses", ["", "furniture"])
  }
];

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
