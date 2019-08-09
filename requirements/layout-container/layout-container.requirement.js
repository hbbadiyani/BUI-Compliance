const validContainerClassnames = ['.b-container', '.b-container-fluid'];
export default (layoutContainer) => {
    const childCount = layoutContainer.htmlElement.childElementCount;
    const child = layoutContainer.htmlElement.firstElementChild;

    return (childCount === 1 && child.matches(validContainerClassnames));
};
