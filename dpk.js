const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  // const TRIVIAL_PARTITION_KEY = "0";

  // const MAX_PARTITION_KEY_LENGTH = 256;
  // let candidate;
  // if (event) {
  //   if (event.partitionKey) {
  //     candidate = event.partitionKey;
  //   } else {
  //     const data = JSON.stringify(event);
  //     candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  //   }
  // }

  // if (candidate) {
  //   if (typeof candidate !== "string") {
  //     candidate = JSON.stringify(candidate);
  //   }
  // } else {
  //   candidate = TRIVIAL_PARTITION_KEY;
  // }
  // if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
  //   candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  // }
  // return candidate;

  // REFACTORED CODE

  /**
   *  I initialized the candidate variable with the value of TRIVIAL_PARTITION_KEY, and deleted the TRIVIAL_PARTITION_KEY since it only holds the value that should be returned if no parameter is supplied to the function. I ensured that the function  returns early and stop execution if no parameter was supplied to the function. My code is more readable because the if-else statement in the original code was refactored to if condition only
   *
   */
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = "0";
  if (!event) {
    return candidate;
  }

  if (event.partitionKey) {
    candidate = event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};
