module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    url: env("MY_STRAPI_URL", "http://localhost:1337/admin"), // Thêm dòng này
    serveAdminPanel: true,
    autoOpen: false,
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  cron: { enabled: true },
});
