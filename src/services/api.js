import axios from 'axios';

const BASE_URL = 'http://localhost:5050'; //backend URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});




//Users API functions
export const getUsers = async () => {
const response = await api.get('/users/');
console.log(response);
return response.data;
};

export const getUserByName = async (name) => {
const response = await api.get(`/users/username/${name}`);
return response.data;
};

export const getUserByPhNo = async (phNo) => {
  const response = await api.get(`/users/phone/${phNo}/admin`);
  return response.data;
};

export const getUserByLocation = async (location) => {
  const response = await api.get(`/users/location/${location}`);
  return response.data;
};

export const getUserByEmail = async (email) => {
  const response = await api.get(`/users/emailId/${email}/admin`);
  return response.data;
};

export const getUserByRating = async (rating) => {
  const response = await api.get(`/users/ratingUser/${rating}/admin`);
  return response.data;
};

export const getUserByStatus = async (status) => {
  const response = await api.get(`/users/status/${status}/admin`);
  return response.data;
};

export const getAllCommunitiesJoinedByUser = async (userId) => {
  const response = await api.get(`/users/communityList/userId/${userId}`);
  return response.data;
};

export const getAllBooksDonatedByUser = async (userId) => {
  const response = await api.get(`/users/bookList/userId/${userId}`);
  return response.data;
};

export const createUser = async (user) => {
  try {
    const response = await api.post('/users/', user);
    return response.data;
  } catch (error) {
    console.log("Failed to create user",error);
    throw error;
  }
};

export const addBooksByUser = async (book, userId, authName) => {
  try {
    const response = await api.post(`/users/addBooks/userId/${userId}/authorName/${authName}`, book);
    return response.data;
  } catch (error) {
    console.log("Failed to add book by user", error);
    throw error;
  }
};

export const loginUser = async (loginRequest) => {
  try {
    const response = await api.post(`/users/userLogin`, loginRequest);
    return response.data;
  } catch (error) {
    console.log("Failed to login user", error);
    throw error;
  }
};

export const updateUser = async (user, id) => {
  try {
    const response = await api.put(`/users/${id}/admin`, user);
    return response.data;
  } catch (error) {
    console.log("Error updating user", error);
    throw error;
  }
};

export const addUserToCommunity = async (userId, communityName) => {
  try {
    const response = await api.put(`/users/subToCommunity/${userId}/communityName/${communityName}`);
    return response.data;
  } catch (error) {
    console.log("Failed to add user to community", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/deleteUser/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error deleting user", error);
    throw error;
  }
};

export const deleteBooksDonatedByUser = async (id, bookId, authName) => {
  try {  
    const response = await api.delete(`/users/deleteBooks/userId/${id}/bookId/${bookId}/authorName/${authName}`);
    return response.data; 
  } catch (error) {
    console.log("Error deleting books by user", error);
    throw error;
  }
};





//Community API functions
export const getCommunities = async () => {
const response = await api.get('/community/');
return response.data;
};

export const getCommunityByName = async (name) => {
const response = await api.get(`/community/CommunityName/${name}`);
return response.data;
};

export const getCommunityByTopic = async (topic) => {
  const response = await api.get(`/community/CommunityTopic/${topic}`);
  return response.data;
};

export const getCommunityByRating = async (rating) => {
  const response = await api.get(`/community/CommunityRating/${rating}`);
  return response.data;
};

export const createCommunity = async (community) => {
  try {
    const response = await api.post('/community/admin', community);
    return response.data;
  } catch (error) {
    console.log("Failed to create community",error);
    throw error;
  }
};

export const updateCommunity = async (id, community) => {
  try {
    const response = await api.put(`/community/CommunityId/${id}/admin`, community);
    return response.data;
  } catch (error) {
    console.log("Failed to update community", error);
    throw error;
  }
};

export const deleteCommunity = async (id) => {
  try {
    const response = await api.delete(`/community/CommunityId/${id}/admin`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete community",error);
    throw error;
  }
};

export const removeUserFromCommunity = async (userId, communityId) => {
  try {
    const response = await api.delete(`/community/DeleteUser/UserId/${userId}/CommunityId/${communityId}`);
    return response.data;
  } catch (error) {
    console.log("Failed to delete user from community", error);
    throw error;
  }
};




//Books API functions
export const getBooks = async () => {
const response = await api.get('/books/');
return response.data;
};

export const getBookByName = async (name) => {
const response = await api.get(`/books/bookName/${name}`);
return response.data;
};
export const getBookByGenre = async (genre) => {
  const response = await api.get(`/books/bookGenre/${genre}`);
  return response.data;
};
export const getBookByBestseller = async (bool) => {
  const response = await api.get(`/books/bestsellingBooks/${bool}`);
  return response.data;
};
export const getBookByISBN = async (isbn) => {
  const response = await api.get(`/books/bookISBN/${isbn}`);
  return response.data;
};
export const getBookByPublicationYear = async (year) => {
  const response = await api.get(`/books/bookPubYear/${year}`);
  return response.data;
};
  
export const saveBook = async (book) => {
  try {
    const url = '/books/saveBook/admin';
    const response = await api.post(url, book);
    return response.data;
  } catch (error) {
    console.log('Error saving book:', error);
    throw error;
  }
};

export const updateBook = async (book, id) => {
  try{
    const response = await api.put(`/books/bookId/${id}/admin`, book);
    return response.data;
  }catch(error){
    console.log('Error updating book:', error);
    throw error;
  }
};

export const updateAuthorsInABook = async (bookName, authorName) => {
  try {
    const response = await api.put(`/books/bookName/${bookName}/updateAuthors/authorName/${authorName}/admin`);
    return response.data;
  } catch (error) {
    console.log('Error updating authors for book', error.message);
    throw error.message;
  }
}

export const deleteAuthorFromABook = async (bookName, authorName) => {
  try {
    const response = await api.put(`/books/bookName/${bookName}/deleteAuthors/authorName/${authorName}/admin`);
    return response.data;
  } catch (error) {
    console.log('Error updating authors for book', error.message);
    throw error.message;
  }
}

export const deleteBook = async (id) => {
  try{
    const response = await api.delete(`/books/bookId/${id}`);
    return response.data;
  }catch(error){
    console.log('Error deleting book:', error);
    throw error;
  }
};




//Author API functions
export const getAuthors = async () => {
const response = await api.get('/authors/');
return response.data;
};

export const getAuthorByName = async (name) => {
const response = await api.get(`/authors/authorName/${name}`);
return response.data;
};

export const getAuthorById = async (id) => {
  const response = await api.get(`/authors/authorId/${id}/admin`);
  return response.data;
};

export const getAllBooksByAuthor = async(name) => {
  const response = await api.get(`/authors/authorName/${name}/getAllBooks`);
  return response.data;
};

export const createAuthor = async (author) => {
  try{
    const response = await api.post('/authors/saveAuthor', author);
  return response.data;
  }catch(error){
    console.log("Error creating author", error);
    throw error;
  }
};

export const updateAuthor = async (id, author) => {
  try {
    const response = await api.put(`/authors/authorId/${id}`, author);
    return response.data;
  } catch (error) {
    console.log("failed to update author", error);
    throw error;
  }
};

export const deleteAuthor = async (id) => {
  try {
    const response = await api.delete(`/authors/authorId/${id}/admin`);
    return response.data;
  } catch (error) {
    console.log("Error deleting author", error);
    throw error;
  }
};