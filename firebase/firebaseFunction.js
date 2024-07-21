// firebaseUtils.js
import { db } from './firebaseConfig';
import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';

const fetchLatestBlogs = async () => {
  try {
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, orderBy('createdAt', 'desc')); // Assuming you have a 'timestamp' field in your blogs
    const querySnapshot = await getDocs(q);
    
    const blogs = [];
    querySnapshot.forEach((doc) => {
      blogs.push({ id: doc.id, ...doc.data() });
    });

    console.log(blogs)
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};



const fetchBlogBySlug = async (slug) => {
  console.log(slug, "slug is here")
  try {
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, where('slug', '==', slug)); // Assuming you have a 'slug' field in your blogs
    const querySnapshot = await getDocs(q);

    let blog = null;
    querySnapshot.forEach((doc) => {
      blog = { id: doc.id, ...doc.data() };
    });

    
    if(blog){
      console.log(blog, "blog comming from firebase, blog is present true")
      return blog;
    }

    
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    throw error;
  }
};
export { fetchLatestBlogs, fetchBlogBySlug };
