export const processXml = (xmlData) => {
  const xmlDocument = new DOMParser().parseFromString(xmlData, "text/xml");
  console.log("xmlDocument: ", xmlDocument)
  const items = xmlDocument.getElementsByTagName("item");
  const itemsArray = Array.from(items);
  const data = itemsArray.map((item) => {
    const title = item.querySelector("title").textContent;
    const description = item.querySelector("description").textContent;
    const link = item.querySelector("link").textContent;
    const pubDate = item.querySelector("pubDate").textContent;
    return { title, description, link, pubDate };
  });
  return data;
};
