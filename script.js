const clean = (node) =>
// remove useless white space from the DOM because whitespace appears as child nodes
// https://www.sitepoint.com/removing-useless-nodes-from-the-dom/
{
  for(let n = 0; n < node.childNodes.length; n ++)
  {
    const child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}

clean(document.body);

let navButtons = document.querySelector(".nav-container").childNodes;

for (let i = 0; i < navButtons.length; i++) {

	navButtons[i].addEventListener("mouseover", () => {
		navButtons[i].innerHTML = navButtons[i].id;
	},false);

	navButtons[i].addEventListener("mouseout", () => {
		navButtons[i].innerHTML = `<img src="svg_icons/${navButtons[i].id}.svg">`;
	},false);
}

