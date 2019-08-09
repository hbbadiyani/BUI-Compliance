export default (radio) => {
    const { childElementCount: childCount, firstElementChild: child } = radio.htmlElement;
    if (childCount === 1 && child.tagName === 'LABEL') {
        const { childElementCount: grandChildCount, firstElementChild: grandChild } = child;
        if (grandChildCount === 1 && grandChild.tagName === 'INPUT') {
            return true;
        }
    }
    return false;
};
