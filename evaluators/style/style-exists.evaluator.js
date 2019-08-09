export default node => ((node.htmlElement && node.htmlElement.getAttribute('style')) ? node.htmlElement.getAttribute('style') : undefined);
