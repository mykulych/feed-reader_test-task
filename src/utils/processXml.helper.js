export const processXml = (xmlData) => {
  const xmlDocument = new DOMParser().parseFromString(xmlData, "text/xml");
  const items = xmlDocument.getElementsByTagName("item");
  const itemsArray = Array.from(items);
  const data = itemsArray.map((item) => {
    const title = item.querySelector("title").textContent;
    const description = item.querySelector("description").textContent;
    const pubDate = item.querySelector("pubDate").textContent;
    return { title, description, pubDate };
  });
  return data;
};
