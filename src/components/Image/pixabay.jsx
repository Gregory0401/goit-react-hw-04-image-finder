let PAGE = 1;

function pixFetch(searchValue) {
  const BASIC_URL = `https://pixabay.com/api/`;
  const searchParam = new URLSearchParams({
    key: '28712886-1cb23b606877bc8498f4e16b7',
    q: `${searchValue}`,
    image_type: 'photo',
    orientation: 'horizontal',
    page: `${PAGE}`,
    per_page: 9,
  });

  return fetch(`${BASIC_URL}?${searchParam}`)
  .then(response => response.json());
}

export default pixFetch;



 