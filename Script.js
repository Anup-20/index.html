// Fetch the XML data
fetch('biochar.xml')
  .then(response => response.text())
  .then(xmlData => {
    // Parse the XML data
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

    // Extract the content from the XML document
    const sections = xmlDoc.getElementsByTagName('section');

    // Insert the content into the HTML document
    const biocharContent = document.getElementById('biochar-content');
    for (const section of sections) {
      biocharContent.appendChild(section);
    }
  })
  .catch(error => console.error('Error fetching XML data:', error));
