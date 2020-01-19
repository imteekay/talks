const string = " I will be a url slug   ";

const slugify = (string) => {
  string = string.toLowerCase();
  string = string.trim();
  string = string.split(' ');
  string = string.join('-');
  return string;
}

slugify(string); // i-will-be-a-url-slug
