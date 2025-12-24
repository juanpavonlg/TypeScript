type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`;

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
  const getSeconds = (time: ElfDateTime): number => {
    return (
      new Date(
        time
          .replace(/\*/g, "-")
          .replace("@", "T")
          .replace(/\|/g, ":")
          .replace(" NP", "")
      ).getTime() / 1000
    );
  }; // getSeconds()

  return getSeconds(takeOffTime) - getSeconds(fromTime);
} // timeUntilTakeOff()

const takeoff = "2025*12*25@00|00|00 NP";
console.log(timeUntilTakeOff("2025*12*24@23|59|30 NP", takeoff));
console.log(timeUntilTakeOff("2025*12*25@00|00|00 NP", takeoff));
console.log(timeUntilTakeOff("2025*12*25@00|00|12 NP", takeoff));
