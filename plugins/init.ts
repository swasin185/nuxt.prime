export default defineNuxtPlugin((nuxtApp) => {
  console.log("Default Date Format");
  Date.prototype.toString = function () {
    return this.getHours() == 0
      ? this.toLocaleDateString("sv-SE")
      : this.toLocaleString("sv-SE");
  };
});