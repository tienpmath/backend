const getBlurDataURL = async (url) => {
  if (!url) {
    return null;
  }
  const prefix = `https://res.cloudinary.com/ddmusvbbw/image/upload/`;
  const suffix = url.split(prefix)[1];
  const response = await fetch(
    `${prefix}w_100,e_blur:5000,q_auto,f_auto/${suffix}`
  );
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  return `data:image/png;base64,${base64}`;
};

module.exports = getBlurDataURL;
