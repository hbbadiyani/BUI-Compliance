export default (dropdown) => {
    const { childElementCount: childCount, firstElementChild: child } = dropdown.htmlElement;
    if (childCount === 2 && child.tagName === 'LABEL') {
        const { childElementCount: grandChildCount, firstElementChild: grandChild } = child;
        if (grandChildCount === 1 && grandChild.tagName === 'INPUT') {
            return true;
        }
    }
    return false;
};
