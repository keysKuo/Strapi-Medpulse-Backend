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
      cards: {
        fields: ['heading', 'body', 'href'],
        populate: {
          img: {
            fields: ['url']
          }
        }
      },
      pricings: {
        fields: ['title', 'subtitle1', 'subtitle2'],
        populate: {
          benefits: {
            fields: ['label', 'checked']
          }
        }
      }
    }
  }

/*
  /api/combos?filters[href][$eq]=...&populate[banner][fields][0]=heading&populate[banner][fields][1]=body&populate[banner][fields][2]=href&populate[banner][populate][background][fields][0]=url&populate[cards][fields][0]=heading&populate[cards][fields][1]=body&populate[cards][fields][2]=href&populate[cards][populate][img][fields][0]=url&populate[pricings][fields][0]=title&populate[pricings][fields][1]=subtitle1&populate[pricings][fields][2]=subtitle2&populate[pricings][populate][benefits][fields][0]=label&populate[pricings][populate][benefits][fields][1]=checked
*/