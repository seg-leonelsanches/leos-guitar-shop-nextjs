/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
  },
  localePath: path.resolve('./public/locales')
};
