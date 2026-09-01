const fs = require('fs');
const html = fs.readFileSync('Design/index.html', 'utf8');

// Extract the header tag content (since it's minified, we use string matching)
const headerStart = html.indexOf('<header');
const headerEnd = html.indexOf('</header>') + '</header>'.length;

if (headerStart !== -1 && headerEnd !== -1) {
  const headerHtml = html.substring(headerStart, headerEnd);
  fs.writeFileSync('header.html', headerHtml);
  console.log('Header extracted');
} else {
  console.log('Header not found');
}

// Do the same for footer
const footerStart = html.indexOf('<footer');
const footerEnd = html.indexOf('</footer>') + '</footer>'.length;

if (footerStart !== -1 && footerEnd !== -1) {
  const footerHtml = html.substring(footerStart, footerEnd);
  fs.writeFileSync('footer.html', footerHtml);
  console.log('Footer extracted');
} else {
  console.log('Footer not found');
}
