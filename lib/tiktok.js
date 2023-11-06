import axios from 'axios'
import cheerio from 'cheerio'

const clean = (data) => {
  let regex = /(<([^>]+)>)/gi;
  data = data.replace(/(<br?\s?\/>)/gi, " \n");
  return data.replace(regex, "");
};

async function shortener(url) {
  return url;
}

async function tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  let result = {
      creator: "Arifzyn",
      title: clean(response.data.desc),
      author: clean(response.data.author),
      nowm: await shortener((response.data.links[0].a || "").replace("https", "http")),
      watermark: await shortener((response.data.links[1].a || "").replace("https", "http")),
      audio: await shortener((response.data.links[2].a || "").replace("https", "http")),
      thumbnail: await shortener(response.data.cover)
  }
  return result;
}

export {
tiktok 
}