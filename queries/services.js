module.exports = {
    filters: {
      href: {
        $eq: '...',
      },
    },
    populate: {
      banner: {
        fields: ['heading', 'body', 'href'],
        populate: {
          background: {
            fields: ['url']
          }
        }
      },
      contents: {
        fields: ['heading', 'body', 'href'],
        populate: {
          img: {
            fields: ['url']
          }
        }
      }  
    }
  }

/*
  /api/services?filters[href][$eq]=...&populate[banner][fields][0]=heading&populate[banner][fields][1]=body&populate[banner][fields][2]=href&populate[banner][populate][background][fields][0]=url&populate[contents][fields][0]=heading&populate[contents][fields][1]=body&populate[contents][fields][2]=href&populate[contents][populate][img][fields][0]=url
*/