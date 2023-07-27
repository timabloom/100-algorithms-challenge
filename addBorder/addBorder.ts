export function addBorder(picture: string[]): string[] {
  const borderLength = picture[0].length + 2;
  let border = "";

  for (let i = 0; i < borderLength; i++) {
    border = border.concat("*");
  }

  let pictureBorder: string[] = [];

  picture.forEach((data) => {
    pictureBorder.push(`*${data}*`);
  });
  pictureBorder.unshift(border);
  pictureBorder.push(border);

  return pictureBorder;
}

console.log(addBorder(["abc", "ded"]));
