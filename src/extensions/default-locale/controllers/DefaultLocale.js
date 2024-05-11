module.exports = {
    async updateDefaultLocale(ctx) {
      const { locale } = ctx.request.body;
        console.log('pass')
      if (!locale) {
        return ctx.badRequest('Locale is required');
      }
  
      const { i18n } = strapi.plugins;
  
      try {
        await i18n.services.setDefaultLocale(locale);
        return ctx.send({ message: 'Default locale updated successfully' });
      } catch (error) {
        return ctx.internalServerError(error.message);
      }
    },
  };