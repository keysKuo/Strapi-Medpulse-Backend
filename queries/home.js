module.exports = {
  populate: {
    banner: {
      fields: ['heading', 'body', 'href'],
      populate: {
        background: {
          fields: ['url']
        }
      }
    },
    dich_vu_cung_cap: {
      fields: ['heading', 'body', 'href'],
      populate: {
        img: {
          fields: ['url']
        }
      }
    },
    doi_tac: {
      fields: ['name'],
      populate: {
        img: {
          fields: ['url']
        }
      }
    },
    feedbacks: {
      fields: ['customer', 'major', 'location', 'body'],
      populate: {
        img: {
          fields: ['url']
        }
      }
    },
    reviews: {
      fields: ['title', 'subtitle', 'href', 'createdAt', 'tag'],
      populate: {
        thumb: {
          fields: ['url']
        }
      }
    },
  }
}

/*
  /api/trang-chus?populate[banner][fields][0]=heading&populate[banner][fields][1]=body&populate[banner][fields][2]=href&populate[banner][populate][background][fields][0]=url&populate[dich_vu_cung_cap][fields][0]=heading&populate[dich_vu_cung_cap][fields][1]=body&populate[dich_vu_cung_cap][fields][2]=href&populate[dich_vu_cung_cap][populate][img][fields][0]=url&populate[doi_tac][fields][0]=name&populate[doi_tac][populate][img][fields][0]=url&populate[feedbacks][fields][0]=customer&populate[feedbacks][fields][1]=major&populate[feedbacks][fields][2]=location&populate[feedbacks][fields][3]=body&populate[feedbacks][populate][img][fields][0]=url&populate[reviews][fields][0]=title&populate[reviews][fields][1]=subtitle&populate[reviews][fields][2]=href&populate[reviews][fields][3]=createdAt&populate[reviews][fields][4]=tag&populate[reviews][populate][thumb][fields][0]=url
*/