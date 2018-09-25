module.exports = [
  {
    title: "Getting Started",
    collapsable: false,
    children: [""]
  },
  // {
  //   title: "Houses",
  //   collapsable: false,
  //   children: prefix("houses", ["", "furniture"])
  // },
  {
    title: "Vehicles",
    collapsable: false,
    children: prefix("vehicles", ["", "obtaining-a-vehicle"])
  },
  {
    title: "Misc",
    collapsable: false,
    children: prefix("misc", ["graffiti"])
  }
];

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
