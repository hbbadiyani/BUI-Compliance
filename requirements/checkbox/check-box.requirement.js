export default (checkBox) => {
    const { childElementCount: childCount, firstElementChild: child } = checkBox.htmlElement;
    if (childCount === 1 && child.tagName === 'LABEL') {
        const { childElementCount: grandChildCount, firstElementChild: grandChild } = child;
        if (grandChildCount === 1 && grandChild.tagName === 'INPUT') {
            return true;
        }
    }
    return false;
};
