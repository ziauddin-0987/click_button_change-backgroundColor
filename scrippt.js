const mycolor = () => {
  const rendomcolor = Math.floor(Math.random() * 16777215);
  const rendomcode = "#" + rendomcolor.toString(16);
  document.body.style.backgroundColor = rendomcode;
  document.getElementById("clickme");
};

document.getElementById("clickme").addEventListener("click", mycolor);
