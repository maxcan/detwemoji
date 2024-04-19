function replaceEmoji() {
  const emojiElements = document.querySelectorAll('img');
  emojiElements.forEach(element => {
    const eleSrc = element.getAttribute('src');
    if (!eleSrc || !eleSrc.match(/.*twimg.com\/emoji/i)) return;
    const emojiText = element.getAttribute('alt');
    if (emojiText) {
      const textNode = document.createTextNode(emojiText);
      element.parentNode.replaceChild(textNode, element);
    }
  });
}

// Run the replaceEmoji function when the page loads
window.addEventListener('load', replaceEmoji);

// Run the replaceEmoji function when new content is added to the page (e.g., infinite scroll)
const observer = new MutationObserver(replaceEmoji);
observer.observe(document.body, { childList: true, subtree: true });
