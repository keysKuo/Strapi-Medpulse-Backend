module.exports = {
    filters: {
      href: {
        $eq: '...',
      },
    },
    populate: {
      posts: {
        fields: ['title', 'subtitle', 'href', 'tag'],
        populate: {
          thumb: {
            fields: ['url']
          }
        }
      }
    }
  }

/*
  /api/blogs?filters[href][$eq]=...&populate[posts][fields][0]=title&populate[posts][fields][1]=subtitle&populate[posts][fields][2]=href&populate[posts][fields][3]=tag&populate[posts][populate][thumb][fields][0]=url
*/