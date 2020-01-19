const string = " I will be a url slug   ";

const slugify = (string) =>
  string
    .toLowerCase()
    .trim()
    .split(" ")
    .join("-");

slugify(string); // i-will-be-a-url-slug
