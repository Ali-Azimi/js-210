const sampleList1 = ["sheep", "sheep", "sheep" ,"wolf", "sheep", "sheep", "sheep"];
const sampleList2 = ["sheep", "sheep", "wolf"];

function Sheeps(list) {
  const wolfIndex = list.indexOf("wolf");
  if (wolfIndex === list.length - 1) {
    return "GO AWAY WOLF";
  } else {
    const sheepIndex = (list.length-wolfIndex)-1
    return `sheep number ${sheepIndex} you might be eaten`;
  }
}
