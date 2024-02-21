export function htmlEndTagByStartTag(startTag: string): string {
  const tagArray = startTag.split(" ");
  let endTagString = tagArray[0].substring(1);
  
  if (!endTagString.endsWith(">")) {
    endTagString = `${endTagString}>`;
  }

  return `</${endTagString}`
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag("<i>"));
