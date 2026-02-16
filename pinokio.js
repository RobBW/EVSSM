module.exports = {
  version: "2.0",
  title: "EVSSM Deblurring",
  description: "Efficient Visual State Space Model for Image Deblurring",
  icon: "icon.png", // Optional: add an icon file to your repo
  menu: async (kernel, info) => {
    // Check if the environment exists to determine if it's installed
    let installed = await kernel.exists("env") 
    if (installed) {
      return [
        { default: true, text: "Start Deblurring", href: "start.json", icon: "fa-solid fa-play" },
        { text: "Update", href: "install.json", icon: "fa-solid fa-sync" },
        { text: "Install", href: "install.json", icon: "fa-solid fa-plus" }
      ]
    } else {
      return [{ default: true, text: "Install", href: "install.json", icon: "fa-solid fa-plus" }]
    }
  }
}