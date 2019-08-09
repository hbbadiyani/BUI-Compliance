const validLayoutClassnames = ['.b-layout-form', '.b-layout', '.b-layout-list', '.b-layout-right-sidebar', '.b-layout-summary'];
export default node => (node.element.matches(validLayoutClassnames) ? node : undefined);
