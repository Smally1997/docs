module.exports = {
  description: "Official Documentation for Red County Roleplay",
  base: "/",
  head: [
    [
      "link",
      {
        href:
          "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i",
        rel: "stylesheet",
        type: "text/css"
      }
    ]
  ],

  themeConfig: {
    logo: "/logo.png",
    displayAllHeaders: true,
    sidebarDepth: 1,

    nav: [
      { text: "Home", link: "https://redcountyrp.com" },
      { text: "Docs", link: "https://docs.redcountyrp.com" },
      { text: "Version", link: "/", items: [{ text: "1.0", link: "/1.0/" }] }
    ],

    sidebar: {
      "/3.0/": require("./3.0")
    }
  }
};
