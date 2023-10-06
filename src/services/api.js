const getDataFromApi = () => {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (!data) {
        throw new Error('Data is undefined');
      }
      const cleanData = data.map((objectApi) => {
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
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
      throw error;
    });
};

export default getDataFromApi;
