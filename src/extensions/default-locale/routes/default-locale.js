module.exports = [
  {
    method: "GET",
    path: "/default-locale",
    handler: "DefaultLocale.updateDefaultLocale",
    config: {
      policies: [],
      auth: false,
    },
  },
];
