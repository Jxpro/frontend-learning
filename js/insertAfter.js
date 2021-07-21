function insertAfter(newElement, targetElement) {
    let parent = targetElement.parentNode;
    let child = targetElement.children;
    if (parent.lastChild === targetElement)
        parent.appendChild(newElement);
    else
        parent.insertBefore(newElement, targetElement.nextSibling);
}
