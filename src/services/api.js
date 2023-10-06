const getDataFromApi = () => {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((objectApi) => {
        return {
          id: objectApi.id,
          title: objectApi.title,
          price: objectApi.price,
          description: objectApi.description,
          category: objectApi.category,
          image: objectApi.image,
          rating: objectApi.rating,
        };
      });
      return cleanData;
    });
};

export default getDataFromApi;
